<!-- eslint-disable vue/no-reserved-component-names -->
<template>
  <div id="large-header" class="large-header">
    <header class="bg ">   
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
  color: aliceblue;
  display: flex;
  flex-direction: column; /* Alinha os itens na vertical */
  min-height: 100vh; /* Garante que o header ocupe no mínimo 100% da altura da tela */
}

.bg {
  background-image: url('./src/assets/demo-1-bg.jpg');
  flex-grow: 1; /* Faz com que a imagem de fundo ocupe o espaço restante */
}

</style>
