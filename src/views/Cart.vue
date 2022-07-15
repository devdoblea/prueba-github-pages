<template>
  <div class="cart">
    <CartPage />
  </div>
</template>

<script>
// @ is an alias to /src
import CartPage from '@/components/CartPage.vue'

export default {
  name: 'Cart',
  components: {
    CartPage
  }
}
</script>