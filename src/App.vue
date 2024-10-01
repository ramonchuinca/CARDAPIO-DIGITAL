<!-- eslint-disable vue/no-reserved-component-names -->
<template>
   <header>   
      <Header/>
      <RouterView />

  
      <!-- <Menu /> -->
  </header>
</template>

<script setup>
import Menu from './components/Menu.vue'
import Header from './components/Header.vue'
import { defineComponent } from 'vue'
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'



</script>


<style scoped>
/* Estilos globais podem ser adicionados aqui */
body {
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
  margin: 0;
  padding: 20px;
}

</style>
