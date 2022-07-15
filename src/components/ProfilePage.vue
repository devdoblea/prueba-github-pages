<template>
  <div class="heading">
    <h3>mi perfil</h3>
    <p><router-link to="/"> inicio </router-link> <span> / perfil</span></p>
  </div>

  <section class="user-details">

    <div class="user">
      <img src="../assets/images/user-icon.png" alt="">
      <p><i class="fas fa-user"></i> <span>pablo perez</span></p>
      <p><i class="fas fa-phone"></i> <span>1234567890</span></p>
      <p><i class="fas fa-envelope"></i> <span>pabloperez69@gmail.com</span></p>
      <router-link to="/update_profile" class="btn">actualizar perfil</router-link>
      <p class="address"><i class="fas fa-map-marker-alt"></i> <span>calle 18 con carrera 16 edificio los palomares vereda del norte mazathlan</span></p>
      <router-link to="/update_address" class="btn">actualizar dirección</router-link>
    </div>

  </section>
  
</template>

<script>
  export default {
    name: 'ProfilePage',

    data() {
      return {
      };
    },
  }
</script>
