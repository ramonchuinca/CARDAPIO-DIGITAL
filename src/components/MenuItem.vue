<template>
    <div class="menu-item">
      <img :src="item.imagem" alt="Imagem do Item" class="item-image" />
      <div class="item-details">
        <h3>{{ item.nome }}</h3>
        <p>{{ item.descricao }}</p>
        <p class="preco">R$ {{ item.preco.toFixed(2) }}</p>
        <button @click="addToOrder(item)">Pedir pelo WhatsApp</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MenuItem',
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    methods: {
      addToOrder(item) {
        // Número de telefone do restaurante
        const telefone = '556900000000'; // Substitua pelo número do WhatsApp do restaurante
        
        // Mensagem personalizada com nome, preço e link da imagem
        const mensagem = `
          Olá, gostaria de pedir:
          *${item.nome}* - R$ ${item.preco.toFixed(2)}
          
          Descrição: ${item.descricao}
          
          Aqui está a imagem do pedido:
          ${item.imagem}
        `;
  
        // Construindo a URL do WhatsApp com a mensagem
        const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
        
        // Abrir o WhatsApp em uma nova aba
        window.open(url, '_blank');
      }
    }
  }
  </script>
  
  
  <style scoped>
  .menu-item {
    display: flex;
    border: 1px solid #ccc;
    margin: 10px;
    padding: 10px;
  }
  .item-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  .item-details {
    margin-left: 20px;
  }
  .preco {
    font-weight: bold;
    margin-top: 10px;
  }
  button {
    margin-top: 10px;
    padding: 8px 12px;
    background-color: #25d366;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #1ebe57;
  }
  </style>
  