<template>
  <nav class="navbar navbar-expand-lg navbar-light custom-navbar">
    <div class="container-fluid">
        <!-- Logo e Título -->
        <router-link to="/" class="navbar-brand d-flex align-items-center">
            <img src="/src/assets/svg-logo.jpg" alt="Logo" width="70" height="50" class="d-inline-block align-text-top">
            <div class="ms-2">Hanburgueria do Pôr do Sol</div>
        </router-link>
        
        <!-- Toggler para visualização mobile -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Links de navegação -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/produtos" class="nav-link">Produtos</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/contato" class="nav-link">Contato</router-link>
                </li>

                <!-- Contador de itens no carrinho -->
                <li class="nav-item">
                    <a class="nav-link disabled" style="color:white;" href="#" tabindex="-1" aria-disabled="true">
                        Itens no carrinho: {{ qty }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    
</template>
<script setup>
import { useCarrinhoStore } from '@/store/carrinhoStore'
import { computed, ref } from 'vue';

// access the `store` variable anywhere in the component ✨
const cart = useCarrinhoStore()
const qty = computed(()=>cart.qty)


</script>
<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.custom-navbar {
  background-color: #007bff; /* Cor de fundo da navbar */
}

.navbar-light .navbar-nav .nav-link {
  color: whitesmoke; /* Cor do texto dos links */
}

.navbar-toggler {
  border-color: black; /* Cor da borda do botão de toggler */
  border-width: 1px; /* Largura da borda */
  border-style: solid; /* Estilo da borda */
  width: 70px; /* Ajuste a largura do botão */
  height: 50px; /* Ajuste a altura do botão, se necessário */
}

.navbar-toggler-icon {
  width: 44px; /* Ajuste a largura do ícone */
  height: 26px; /* Ajuste a altura das barras do ícone */
}

.navbar-toggler-icon::before,
.navbar-toggler-icon::after {
  height: 2px; /* Ajusta a altura das barras do ícone */
}



.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30' fill='white'%3E%3Cpath stroke='white' stroke-width='2' d='M3 6h24M3 14h24M3 22h24'/%3E%3C/svg%3E"); /* Cor do ícone do toggler */
}

.custom-navbar {
  background-color: rgba(0, 0, 0, 0.5); /* Preto com 50% de opacidade */
}

.custom-navbar .ms-2 {
  font-size: 1.5em;
  color: #ddd;
}
.navbar {
  list-style: none;
  gap: 10px;
  font-size: 1.3em;
}

.banner-chopper {
  background-image: url("https://http2.mlstatic.com/D_NQ_NP_2X_637301-MLB32084169718_092019-F.jpg"); /* Define a imagem de fundo */
  background-size: cover; /* Cobre todo o espaço do elemento */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Evita que a imagem se repita */
  height: 100vh; /* Define uma altura fixa para o header */
  overflow: hidden; /* Garante que nada exceda o container */
  filter: brightness(0.5);
  min-height: 50vh; 
  max-height: 100vh; 
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.foto-do-banner {
  top: 35%;
  position: absolute; 
  z-index: 1;
  object-fit: cover; 
  width: 200px;
  height: 150px;
  border-radius: 100px;
}


.texto-banner {
  position: relative; /* Mantém o texto no fluxo normal, mas com controle sobre o z-index */
  z-index: 2; /* O texto aparecerá acima da imagem */
  color: aliceblue;
  text-align: center; /* Centraliza o texto */
  font-size: 2em; /* Ajuste o tamanho da fonte */
  top: 55%; /* Alinha verticalmente */
  transform: translateY(-50%); /* Centraliza verticalmente */
  position: absolute;
  width: 100%; /* Para garantir que o texto ocupe a largura do container */
}


.carousel-inner {
  padding: 10px;
}

.card {
  margin: 10px;
  border-radius: 10px;
  transition: transform 0.2s ease-in-out; /* Adiciona a transição suave */
  cursor: pointer;
  background:#000
}

.card:hover {
  transform: scale(1.05); /* Aplica o efeito de aumento ao passar o mouse */
}

.card img {
  height: 300px;
  object-fit: cover;
}

.carousel-item .row {
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.card-body {
  text-align: center;
  color: #ddd;
}
.card-text{
  color:#ddd;
}


.container {
  width:100%; 
  padding: 20px;
  background-color:#f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center; /* Centraliza o texto dentro da container */
  
}

h1,
h2,
p {
  color:blue;
  text-align: center;
  font-weight: bolder;
  font-size: 1.5em;
}

.menu-item {
  display: inline-block; /* Permite que os itens fiquem lado a lado */
  width: calc(34% - 40px); /* Ajusta a largura dos itens */
  margin: 15px; /* Aumenta o espaço entre os itens */
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  text-align: center;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;
}




.menu-item:hover {
  transform: scale(1.05); /* Efeito de hover */
}

.item-image {
  height: 150px; /* Tamanho fixo para todas as imagens */
  object-fit: cover; /* Mantém a proporção da imagem */
  border-radius: 4px;
}

.item-details {
  margin-top: 10px;
}

.preco {
  font-weight: bold;
  color: #27ae60; /* Cor do preço */
}

button {
  margin-top: 10px;
  padding: 12px; /* Ajusta o padding para um botão mais confortável */
  background-color: #25d366; /* Cor do botão */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  width:50%; /* Faz o botão ocupar 50% da largura disponível */
  display: block; /* Permite que o botão se comporte como um bloco */
  margin-left: auto; /* Centraliza o botão */
  margin-right: auto; /* Centraliza o botão */
  text-align: center; /* Centraliza o texto do botão */
}

button:hover {
  background-color: #1ebe57; /* Cor do botão ao passar o mouse */
}



.quantity-controls {
  display: flex;
  gap: 10px;
  align-items: center;
}

.btn-icon {
  margin-right: 10px;
}

.icon-marmita--plus-sign svg, .icon-marmita--minus-sign svg {
  width: 24px;
  height: 24px;
}

.footer {
  margin-top: 20px;
  text-align: center;
  color: #777;
}


/* Media Query para telas pequenas */
@media (max-width: 430px) {
  .menu-item {
    display: block; /* Altera o layout para block */
    width: 100%; /* Faz os itens ocuparem toda a largura */
    margin: 10px 0; /* Ajusta a margem para cima e para baixo */
  }

  button {
    width: 100%; /* Faz o botão ocupar toda a largura disponível */
    padding: 12px; /* Ajusta o padding para um botão mais confortável */
    text-align: center; /* Centraliza o texto do botão */
  }
  .banner-chopper {
    min-height: 28vh;
    max-height: 26vh;
}

.col-md-4 {
  flex: 0 0 100%;
  max-width: 100%;
}


}

@media (max-width: 768px) {
  .menu-item {
    display: block; /* Altera o layout para block */
    width: 100%; /* Faz os itens ocuparem toda a largura */
    margin: 10px 0; /* Ajusta a margem para cima e para baixo */
  }
  .banner-chopper {
    min-height: 28vh;
    max-height: 26vh;
}
.col-md-4 {
  flex: 0 0 100%;
  max-width: 100%;
}


}

</style>