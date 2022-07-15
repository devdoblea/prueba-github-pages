<template>
  <div id="menu-btn" class="menu-sidebar" style="display: inline-block;">
    <div class="sidebar" @click="toggleSideBar" :style="{ width: sidebarWidth }">
      <i class="fas fa-bars"></i>
      <span 
        class="collapse-icon" 
        :class="{ 'rotate-180': collapsed }" 
        @click="toggleSideBar"
      >
      </span>
    </div>
  </div>
</template>

<script>
  import { collapsed, toggleSideBar, sidebarWidth } from './state'
  export default {
    name: 'SideBar',
    props: {},
    setup() {
      return { collapsed, toggleSideBar, sidebarWidth }
    }
  }
</script>

<style>
  :root {
    --sidebar-bg-color:  #F58634;
    --sidebar-item-hover:  #38a169;
    --sidebar-item-active:  #276749;
  }
</style>
<style scoped>
  .sidebar {
    color:  white;
    background-color: var(--sidebar-bg-color);

    float: right;
    position: relative;
    z-index: 1;
    top: 7px;
    right: 0;
    bottom: 0;
    padding: 0.5rem;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
  }

  .collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.75rem;

    color:  rgba(255, 255, 255, 0.7);

    transition:  0.2s linear;
  }

  .rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
  }
</style>