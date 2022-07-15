<template>
  <div class="orders">
    <OrdersPage />
  </div>
</template>

<script>
// @ is an alias to /src
import OrdersPage from '@/components/OrdersPage.vue'

export default {
  name: 'Orders',
  components: {
    OrdersPage
  }
}
</script>