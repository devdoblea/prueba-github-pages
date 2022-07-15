<template>
  <div class="heading">
    <h3>mi perfil</h3>
    <p><a href="/">inicio </a> <span> / perfil</span></p>
  </div>

  <section class="user-details">

    <div class="user">
      <img src="../assets/images/user-icon.png" alt="">
      <p><i class="fas fa-user"></i> <span>pablo perez</span></p>
      <p><i class="fas fa-phone"></i> <span>1234567890</span></p>
      <p><i class="fas fa-envelope"></i> <span>pabloperez69@gmail.com</span></p>
      <a href="/update_profile" class="btn">actualizar perfil</a>
      <p class="address"><i class="fas fa-map-marker-alt"></i> <span>calle 18 con carrera 16 edificio los palomares vereda del norte mazathlan</span></p>
      <a href="/update_address" class="btn">actualizar dirección</a>
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
