<template>
    <div id="large-header" class="large-header">
      <canvas id="demo-canvas"></canvas>
      <h1 class="main-title">Connect <span class="thin">Three</span></h1>
    </div>
  </template>
  
  <script>
  import { gsap } from 'gsap';
  
  export default {
    name: "AnimatedHeader",
    mounted() {
      this.initHeader();
      this.initAnimation();
      this.addListeners();
    },
    data() {
      return {
        width: 0,
        height: 0,
        target: { x: 0, y: 0 },
        points: [],
        animateHeader: true,
        largeHeader: null,
        canvas: null,
        ctx: null,
      };
    },
    methods: {
      initHeader() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.target = { x: this.width / 2, y: this.height / 2 };
  
        this.largeHeader = this.$el.querySelector('#large-header');
        this.largeHeader.style.height = `${this.height}px`;
  
        this.canvas = this.$el.querySelector('#demo-canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext('2d');
  
        for (let x = 0; x < this.width; x += this.width / 20) {
          for (let y = 0; y < this.height; y += this.height / 20) {
            const px = x + Math.random() * this.width / 20;
            const py = y + Math.random() * this.height / 20;
            this.points.push({ x: px, originX: px, y: py, originY: py });
          }
        }
  
        this.points.forEach(p1 => {
          const closest = [];
          this.points.forEach(p2 => {
            if (p1 !== p2) {
              if (closest.length < 5) {
                closest.push(p2);
              } else {
                closest.sort((a, b) => this.getDistance(p1, a) - this.getDistance(p1, b));
                if (this.getDistance(p1, p2) < this.getDistance(p1, closest[4])) {
                  closest[4] = p2;
                }
              }
            }
          });
          p1.closest = closest;
          p1.circle = new this.Circle(p1, 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
        });
      },
  
      addListeners() {
        window.addEventListener('mousemove', this.mouseMove);
        window.addEventListener('scroll', this.scrollCheck);
        window.addEventListener('resize', this.resize);
      },
  
      mouseMove(e) {
        this.target.x = e.pageX || e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        this.target.y = e.pageY || e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      },
  
      scrollCheck() {
        this.animateHeader = document.body.scrollTop <= this.height;
      },
  
      resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.largeHeader.style.height = `${this.height}px`;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
      },
  
      initAnimation() {
        this.animate();
        this.points.forEach(p => this.shiftPoint(p));
      },
  
      animate() {
        if (this.animateHeader) {
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.points.forEach(p => {
            if (Math.abs(this.getDistance(this.target, p)) < 4000) {
              p.active = 0.3;
              p.circle.active = 0.6;
            } else if (Math.abs(this.getDistance(this.target, p)) < 20000) {
              p.active = 0.1;
              p.circle.active = 0.3;
            } else if (Math.abs(this.getDistance(this.target, p)) < 40000) {
              p.active = 0.02;
              p.circle.active = 0.1;
            } else {
              p.active = 0;
              p.circle.active = 0;
            }
            this.drawLines(p);
            p.circle.draw();
          });
        }
        requestAnimationFrame(this.animate);
      },
  
      shiftPoint(p) {
        gsap.to(p, { 
          x: p.originX - 50 + Math.random() * 100,
          y: p.originY - 50 + Math.random() * 100,
          duration: 1 + Math.random(),
          ease: "circ.inOut",
          onComplete: () => this.shiftPoint(p),
        });
      },
  
      drawLines(p) {
        if (!p.active) return;
        p.closest.forEach(closestPoint => {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(closestPoint.x, closestPoint.y);
          this.ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
          this.ctx.stroke();
        });
      },
  
      Circle(pos, rad, color) {
        this.pos = pos;
        this.radius = rad;
        this.color = color;
        this.active = 1;
  
        this.draw = () => {
          if (!this.active) return;
          this.ctx.beginPath();
          this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
          this.ctx.fillStyle = `rgba(156,217,249,${this.active})`;
          this.ctx.fill();
        };
      },
  
      getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
      }
    }
  };
  </script>
  
  <style scoped>
  .large-header {
    position: relative;
    width: 100%;
    background: #333;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    z-index: 1;
  }
  
  #large-header {
    background-image: url('https://www.marcoguglie.it/Codepen/AnimatedHeaderBg/demo-1/img/demo-1-bg.jpg');
  }
  
  .main-title {
    position: absolute;
    margin: 0;
    padding: 0;
    color: #f9f1e9;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .main-title {
    text-transform: uppercase;
    font-size: 4.2em;
    letter-spacing: 0.1em;
  }
  
  .main-title .thin {
    font-weight: 200;
  }
  
  @media only screen and (max-width: 768px) {
    .main-title {
      font-size: 3em;
    }
  }
  </style>
  