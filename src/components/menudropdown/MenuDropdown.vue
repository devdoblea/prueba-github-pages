<template>
  <div @click="togglemenu" style="display: inline-block;">
    <slot name="toggler">
      <!-- <div id="user-btn" class="fas fa-user"></div> -->
      <div id="menu-btn" class="fas fa-bars"></div>
    </slot>
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'MenuDropdown',
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
      togglemenu () {
        this.sharedState.active = !this.sharedState.active
      }
    }
  }
</script>