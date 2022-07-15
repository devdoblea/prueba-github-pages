<template>
  <div class="profile" v-if="active">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'UserDropdownContent',
    inject: ['sharedState'],
    computed: {
      active () {
        return this.sharedState.active
      }
    }
  }
</script>