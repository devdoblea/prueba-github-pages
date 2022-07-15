<template>
  <div class="checkout">
    <CheckoutPage />
  </div>
</template>

<script>
// @ is an alias to /src
import CheckoutPage from '@/components/CheckoutPage.vue'

export default {
  name: 'Checkout',
  components: {
    CheckoutPage
  }
}
</script>