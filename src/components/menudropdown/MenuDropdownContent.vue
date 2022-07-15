<template>
  <div class="menu-sidebar" v-if="active">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'MenuDropdownContent',
    inject: ['sharedState'],
    computed: {
      active () {
        return this.sharedState.active
      }
    }
  }
</script>