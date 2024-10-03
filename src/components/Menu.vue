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
      "./src/assets/demo-1-bg.jpg",
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
