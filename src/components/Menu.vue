<template>
  <div class="menu">
    <h1>Cardápio</h1>
    <div class="menu-items">
      <MenuItem v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import MenuItem from "./MenuItem.vue";
const items = reactive([
  {
    id: 1,
    nome: "Pizza Margherita",
    descricao:
      "Molho de tomate, mussarela, manjericão,tomate,Azeitonas pretas.",
    preco: 25.0,
    imagem:
      "https://bemaisaude.com.br/wp-content/uploads/2022/06/Aprenda-a-receita-da-classica-pizza-margherita.jpg",
  },
  {
    id: 2,
    nome: "Hambúrguer Gourmet",
    descricao: "Carne bovina, queijo cheddar, alface, tomate.",
    preco: 30.0,
    imagem: "./src/assets/hanburguer.jpg",
  },
  {
    id: 3,
    nome: "Espetinho de Carne ",
    descricao: "Carne bovina, Arroz, Farofa, Macaxeira,Vinagrete,Vatapa.",
    preco: 30.0,
    imagem:
      "https://th.bing.com/th/id/OIP.BJ6NUci24xMwGb3viVjGGgHaE7?rs=1&pid=ImgDetMain",
  },
  {
    id: 4,
    nome: "Espetinho de frango",
    descricao: "Frango, Arroz, Farofa, Macaxeira,Vinagrete,Vatapa.",
    preco: 30.0,
    imagem:
      "https://i.pinimg.com/736x/45/12/fa/4512fa2704be1ef2b25a72c676e7f5c2--link-youtube.jpg",
  },
]);

onMounted(() => {
  const containerEl = document.querySelector(".container");  
  console.log(containerEl);
})

// export default {
//   // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
//   components: {
//     MenuItem,
//   },
//   beforeMount() {},
//   data() {
//     return {
//       items: [
//         {
//           id: 1,
//           nome: "Pizza Margherita",
//           descricao:
//             "Molho de tomate, mussarela, manjericão,tomate,Azeitonas pretas.",
//           preco: 25.0,
//           imagem:
//             "https://bemaisaude.com.br/wp-content/uploads/2022/06/Aprenda-a-receita-da-classica-pizza-margherita.jpg",
//         },
//         {
//           id: 2,
//           nome: "Hambúrguer Gourmet",
//           descricao: "Carne bovina, queijo cheddar, alface, tomate.",
//           preco: 30.0,
//           imagem: "./src/assets/hanburguer.jpg",
//         },
//         {
//           id: 3,
//           nome: "Espetinho de Carne ",
//           descricao: "Carne bovina, Arroz, Farofa, Macaxeira,Vinagrete,Vatapa.",
//           preco: 30.0,
//           imagem:
//             "https://th.bing.com/th/id/OIP.BJ6NUci24xMwGb3viVjGGgHaE7?rs=1&pid=ImgDetMain",
//         },
//         {
//           id: 4,
//           nome: "Espetinho de frango",
//           descricao: "Frango, Arroz, Farofa, Macaxeira,Vinagrete,Vatapa.",
//           preco: 30.0,
//           imagem:
//             "https://i.pinimg.com/736x/45/12/fa/4512fa2704be1ef2b25a72c676e7f5c2--link-youtube.jpg",
//         },
//         // Adicione mais itens conforme necessário
//       ],
//     };
//   },
// };

const canvasEl = document.querySelector("canvas#neuro");
const devicePixelRatio = Math.min(window.devicePixelRatio, 2);

// containerEl.style.backgroundColor = "red"


const pointer = {
  x: 0,
  y: 0,
  tX: 0,
  tY: 0,
};

let uniforms;
// const gl = initShader();

// setupEvents();

// resizeCanvas();
// window.addEventListener("resize", resizeCanvas);

// render();

function initShader() {
  const vsSource = document.getElementById("vertShader").innerHTML;
  const fsSource = document.getElementById("fragShader").innerHTML;

  const gl =
    canvasEl.getContext("webgl") || canvasEl.getContext("experimental-webgl");

  if (!gl) {
    alert("WebGL is not supported by your browser.");
  }

  function createShader(gl, sourceCode, type) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, sourceCode);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(
        "An error occurred compiling the shaders: " +
          gl.getShaderInfoLog(shader)
      );
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  }

  const vertexShader = createShader(gl, vsSource, gl.VERTEX_SHADER);
  const fragmentShader = createShader(gl, fsSource, gl.FRAGMENT_SHADER);

  function createShaderProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(
        "Unable to initialize the shader program: " +
          gl.getProgramInfoLog(program)
      );
      return null;
    }

    return program;
  }

  const shaderProgram = createShaderProgram(gl, vertexShader, fragmentShader);
  uniforms = getUniforms(shaderProgram);

  function getUniforms(program) {
    let uniforms = [];
    let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < uniformCount; i++) {
      let uniformName = gl.getActiveUniform(program, i).name;
      uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
    }
    return uniforms;
  }

  const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);

  const vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  gl.useProgram(shaderProgram);

  const positionLocation = gl.getAttribLocation(shaderProgram, "a_position");
  gl.enableVertexAttribArray(positionLocation);

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  return gl;
}

function render() {
  const currentTime = performance.now();

  pointer.x += (pointer.tX - pointer.x) * 0.5;
  pointer.y += (pointer.tY - pointer.y) * 0.5;

  gl.uniform1f(uniforms.u_time, currentTime);
  gl.uniform2f(
    uniforms.u_pointer_position,
    pointer.x / window.innerWidth,
    1 - pointer.y / window.innerHeight
  );
  gl.uniform1f(
    uniforms.u_scroll_progress,
    window["pageYOffset"] / (2 * window.innerHeight)
  );

  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  requestAnimationFrame(render);
}

function resizeCanvas() {
  canvasEl.width = window.innerWidth * devicePixelRatio;
  canvasEl.height = window.innerHeight * devicePixelRatio;
  gl.uniform1f(uniforms.u_ratio, canvasEl.width / canvasEl.height);
  gl.viewport(0, 0, canvasEl.width, canvasEl.height);
}

function setupEvents() {
  window.addEventListener("pointermove", (e) => {
    updateMousePosition(e.clientX, e.clientY);
  });
  window.addEventListener("touchmove", (e) => {
    updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
  });
  window.addEventListener("click", (e) => {
    updateMousePosition(e.clientX, e.clientY);
  });

  function updateMousePosition(eX, eY) {
    pointer.tX = eX;
    pointer.tY = eY;
  }
}
</script>

<style scoped>
.menu {
  text-align: center;
}
.menu-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
body,
html {
  margin: 0;
  padding: 0;
  background-color: #151912;
  overflow-x: hidden;
}

.content {
  width: 100vw;
  font-family: "Times New Roman", serif;
}

.section {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff6f7;
  text-align: center;
}

.section > div {
  width: 90%;
}

.section:nth-child(1) {
  font-size: 20vh;
}

@media (max-width: 600px) {
  .section:nth-child(1) {
    font-size: 25vw;
  }
}

@media (max-width: 350px) {
  .section:nth-child(1) {
    font-size: 30px;
  }
}

.section:nth-child(2) {
  font-size: 10vh;
}

.section:nth-child(3) {
  font-size: 8vh;
}

.section:nth-child(2) > div {
  max-width: 800px;
}

.section:nth-child(3) > div {
  max-width: 900px;
}

@media (max-width: 750px) {
  .section:nth-child(2),
  .section:nth-child(3) {
    font-size: 9vw;
  }
}

.section:nth-child(3) a {
  padding: 0 0.3em;
}

canvas#neuro {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
  opacity: 0.95;
}

a {
  display: inline-block;
  text-decoration: none;
  color: inherit;
  font-weight: inherit;
  font-style: inherit;
}

a:hover {
  font-weight: inherit;
  text-decoration: none;
  color: rgb(160, 160, 255);
}

a:active {
  color: rgb(160, 255, 255);
}

body,
html {
  margin: 0;
  padding: 0;
  background-color: #151912;
}

.content {
  width: 100vw;
  font-family: "Times New Roman", serif;
}

.section {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff6f7;
  text-align: center;
}

.section > div {
  width: 90%;
}

.section:nth-child(1) {
  font-size: 20vh;
}

@media (max-width: 600px) {
  .section:nth-child(1) {
    font-size: 25vw;
  }
}

@media (max-width: 350px) {
  .section:nth-child(1) {
    font-size: 30px;
  }
}

.section:nth-child(2) {
  font-size: 10vh;
}

.section:nth-child(3) {
  font-size: 8vh;
}

.section:nth-child(2) > div {
  max-width: 800px;
}

.section:nth-child(3) > div {
  max-width: 900px;
}

@media (max-width: 750px) {
  .section:nth-child(2),
  .section:nth-child(3) {
    font-size: 9vw;
  }
}

.section:nth-child(3) a {
  padding: 0 0.3em;
}

canvas#neuro {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
  opacity: 0.95;
}

a {
  display: inline-block;
  text-decoration: none;
  color: inherit;
  font-weight: inherit;
  font-style: inherit;
}

a:hover {
  font-weight: inherit;
  text-decoration: none;
  color: rgb(160, 160, 255);
}

a:active {
  color: rgb(160, 255, 255);
}
</style>
