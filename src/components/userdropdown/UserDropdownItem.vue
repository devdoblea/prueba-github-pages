<template>
  <p class="name">  Usuario   </p>
  <div class="flex">
    <router-link to="/profile" class="btn">perfil</router-link>
    <router-link to="#" class="delete-btn">logout</router-link>
  </div>
  <p class="account">
    <router-link to="#" target="_blank" rel="noopener noreferrer">login</router-link> or <router-link to="/register">register</router-link>
  </p>
</template>

<script>
  export default {
    name: 'UserDropdownItem',
    inject: ['sharedState'],
    computed: {
      active () {
        return this.sharedState.active
      }
    }
  }
</script>