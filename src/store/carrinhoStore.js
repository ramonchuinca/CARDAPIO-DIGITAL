// stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCarrinhoStore = defineStore('counter', () => {
    const cart = ref([])
    const qty = ref(0)
    function addQty(n){ 
        console.log ('store', n)
        qty.value += n
    }
   function addToCart(item) {
        const cartItem = cart.value.find(cartItem => cartItem.id === item.id);
        if (cartItem) {
            cartItem.quantity++;
        } else {
          cart.push({ ...item, quantity: 1 });
        }
      }

     function removeFromCart(item) {
        const cartItem = cart.value.find(cartItem => cartItem.id === item.id);
        if (cartItem) {
            cartItem.quantity--;
          if (cartItem.quantity<= 0) {
            cart = this.cart.filter(cartItem => cartItem.id !== item.id);
          }
        }
      }

     function getQuantity(itemId) {
        const cartItem = cart.value.find(cartItem => cartItem.id === itemId);
        return cartItem ? cartItem.quantity : 0;
      }
    
  
    return {cart,addToCart,removeFromCart,getQuantity,qty,addQty}
  });