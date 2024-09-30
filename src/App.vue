<!-- eslint-disable vue/no-reserved-component-names -->
<template>
   <header>   
    <div id="App">
      <Menu />
    </div>
  </header>
  
  <RouterView />


</template>

<script>
import Menu from './components/Menu.vue'
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Menu
  }
}

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
