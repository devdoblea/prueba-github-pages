<template>
  <div @click="toggle" style="display: inline-block;">
    <slot name="toggler">
      <div id="user-btn" class="fas fa-user"></div>
    </slot>
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'UserDropdown',
    provide () {
      return {
        sharedState: this.sharedState
      }
    },
    data () {
      return {
        sharedState: {
          active: false
        }
      }
    },
    methods: {
      toggle () {
        this.sharedState.active = !this.sharedState.active
      }
    }
  }
</script>