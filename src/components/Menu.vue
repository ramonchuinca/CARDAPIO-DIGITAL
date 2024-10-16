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
import { useCarrinhoStore } from '@/store/carrinhoStore'
const cart = useCarrinhoStore()
const items = reactive([



{
        id: 1,
        nome: "coca-cola",
        descricao: "a melhor e a mais gelada",
        preco: 8.00,
        imagem: "https://th.bing.com/th/id/OIP.ljaiKeA72XoIOhbUrYbxLwHaHa?rs=1&pid=ImgDetMain"
    },
    {
        id: 2,
        nome: "fanta-laranja",
        descricao: "o verdadeiro gosto da laranja",
        preco: 8.00,
        imagem: "https://www.drogariaminasbrasil.com.br/media/product/dc1/refrigerante-fanta-laranja-lata-350ml-6eb.jpg"
    },
    {
        id: 3,
        nome: "coca-cola 2lt",
        descricao: "super gelada",
        preco: 12.00,
        imagem: "https://th.bing.com/th/id/OIP.bk4TA6ZdBhVeekQe2bpfGAHaHa?rs=1&pid=ImgDetMain"
    },
    {
        id: 4,
        nome: "Porção de Batata Frita",
        descricao: "Porção deliciosa de batatas fritas.",
        preco: 20.00,
        imagem: "https://bing.com/th?id=OSK.53b7bd3cbb1da38ee679787844686c7d"
    },
    {
        id: 5,
        nome: "Porção de calabresa",
        descricao: "Porção deliciosa de calabresa.",
        preco: 20.00,
        imagem: "https://bing.com/th?id=OSK.628735f1c88887ace98202e9cac467d7"
    },
    {
        id: 6,
        nome: "X-TUDO",
        descricao: "delicioso x-tudo.",
        preco: 20.00,
        imagem: "https://th.bing.com/th/id/OIP.eGWx5YD7nwvzoHTaC62EkAHaG2?rs=1&pid=ImgDetMain"
    },
    {
        id: 7,
        nome: "X-BURGUER",
        descricao: "delicioso x-burguer.",
        preco: 20.00,
        imagem: "https://th.bing.com/th/id/OIP.eGWx5YD7nwvzoHTaC62EkAHaG2?rs=1&pid=ImgDetMain"
    },
    {
        id: 8,
        nome: "X-SALADA",
        descricao: "delicioso x-salada.",
        preco: 20.00,
        imagem: "https://th.bing.com/th/id/OIP.eGWx5YD7nwvzoHTaC62EkAHaG2?rs=1&pid=ImgDetMain"
    },
    {
        id: 9,
        nome: "X-BAGUNÇA",
        descricao: "delicioso x-bagunça.",
        preco: 20.00,
        imagem: "https://th.bing.com/th/id/OIP.eGWx5YD7nwvzoHTaC62EkAHaG2?rs=1&pid=ImgDetMain"
    }
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
