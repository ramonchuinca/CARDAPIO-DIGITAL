<template>
    <div class="menu">
      <h1>Cardápio</h1>
      <div class="menu-items">
        <MenuItem v-for="item in items" :key="item.id" :item="item" />
      </div>
    </div>
  </template>
  
  <script>
  import MenuItem from './MenuItem.vue'


  
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    name: 'Menu',
    components: {
      MenuItem
    },
    data() {
      return {
        items: [
          {
            id: 1,
            nome: 'Pizza Margherita',
            descricao: 'Molho de tomate, mussarela, manjericão.',
            preco: 25.00,
            imagem: 'https://bemaisaude.com.br/wp-content/uploads/2022/06/Aprenda-a-receita-da-classica-pizza-margherita.jpg'
          },
          {
            id: 2,
            nome: 'Hambúrguer Gourmet',
            descricao: 'Carne bovina, queijo cheddar, alface, tomate.',
            preco: 30.00,
            imagem: './src/assets/hanburguer.jpg'
          },
          // Adicione mais itens conforme necessário
        ]
      }
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
  </style>
  