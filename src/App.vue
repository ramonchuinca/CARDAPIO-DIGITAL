<!-- eslint-disable vue/no-reserved-component-names -->
<template>
  <div id="large-header" class="large-header">
    <canvas id="demo-canvas"></canvas>
    <header class="bg h-100">   
       <Header/>
       <RouterView />
       <!-- <Menu /> -->
   </header>

  </div>
</template>

<script setup>
import Menu from './components/Menu.vue'
import Header from './components/Header.vue'
import { defineComponent, onMounted } from 'vue'
import AnimatedHeader from './components/AnimatedHeader.vue';
import { TweenLite, Circ } from 'gsap';
    
</script>


<style scoped>
/* Estilos globais podem ser adicionados aqui */
header {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-size: cover; /* Faz a imagem cobrir todo o contêiner */
  background-position: center; /* Centraliza a imagem */
  min-height: 100vh;
  color:aliceblue;
}
.bg{
    background-image: url('./src/assets/demo-1-bg.jpg');
  
}




</style>
