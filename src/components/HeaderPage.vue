<template>
  <!-- HEADER AREA -->
  <header class="header">

    <section class="flex">

      <router-link to="/" class="logo"><img src="../assets/images/logo/logotipo.png" alt=""></router-link>

      <nav class="navbar">
        <router-link class="linkBtn" to="/">Inicio</router-link>
        <router-link class="linkBtn" to="/about">nosotros</router-link>
        <router-link class="linkBtn" to="/menu">menu</router-link>
        <router-link class="linkBtn" to="/orders">pedidos</router-link>
        <router-link class="linkBtn" to="/contact">contactanos</router-link>
      </nav>

      <div class="icons">
        <router-link to="/search"><font-awesome-icon :icon="['fas', 'search']" /></router-link>
        <router-link to="/cart"><font-awesome-icon :icon="['fas', 'shopping-cart']" /><span>(3)</span></router-link>
        <!-- Dropdown del dropdown de usuario -->
        <UserDropdown>
          <UserDropdownContent>
            <UserDropdownItem></UserDropdownItem>
          </UserDropdownContent>
        </UserDropdown>
        <!-- <SideBar /> -->
        <div class="menu-sidebar" style="display: inline-block;">
          <div id="menu-btn" class="sidebar" @click="toggleSideBar" :style="{ width: sidebarWidth }">
            <i class="fas fa-bars"></i>
            <span 
              class="collapse-icon" 
              :class="{ 'rotate-180': collapsed }" 
              @click="toggleSideBar"
            >
            </span>
          </div>
        </div>
      </div>
      
    </section>

  </header>
  <!-- FINAL HEADER  -->
  
</template>

<script>
  import UserDropdown from '@/components/userdropdown/UserDropdown.vue'
  import UserDropdownContent from '@/components/userdropdown/UserDropdownContent.vue'
  import UserDropdownItem from '@/components/userdropdown/UserDropdownItem.vue'
  //
  import SideBar from '@/components/sidebar/SideBar.vue'

  export default {
    name: 'HeaderPage',
    props: {},
    components: {
      UserDropdown,
      UserDropdownContent,
      UserDropdownItem,
      SideBar
    },
  }
</script>
