<template>
  <router-link to="/">Inicio</router-link>
  <router-link to="/about">nosotros</router-link>
  <router-link to="/menu">menu</router-link>
  <router-link to="/orders">pedidos</router-link>
  <router-link to="/contact">contactanos</router-link>
</template>

<script>
  export default {
    name: 'MenuDropdownItem',
    inject: ['sharedState'],
    computed: {
      active () {
        return this.sharedState.active
      }
    }
  }
</script>