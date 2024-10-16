<template>
    <div class="d-flex">
          <router-link to="/">
              <img src="/src/assets/svg-logo.jpg" alt="Logo" style="width: 40px; height: 40px;">
        </router-link>
        <ul class="nav justify-content-end bg-dark text-white w-100">
          <li class="nav-item">
            <router-link to="/segundo" class="nav-link active" style="color:white;">Segundo</router-link>
           </li>
           <li class="nav-item">
             <router-link to="/terceiro" class="nav-link" >terceiro</router-link>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#">Link</a>
           </li>
           <li class="nav-item">
             <a class="nav-link disabled" style="color:white;"  href="#" tabindex="-1" aria-disabled="true">{{ qty }}</a>
           </li>
         </ul>
      </div>
      
</template>
<script setup>
import { useCarrinhoStore } from '@/store/carrinhoStore'
import { computed, ref } from 'vue';

// access the `store` variable anywhere in the component ✨
const cart = useCarrinhoStore()
const qty = computed(()=>cart.qty)


</script>
<style>

</style>