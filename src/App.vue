<template>
  <!-- IMAGEN PRELOADER  -->
  <!-- <div class="loader">
    <img src="./assets/images/loader.gif" alt="">
  </div> -->
  <!-- FIN IMAGEN PRELOADER  -->
  <!-- HEADER  -->
  <Header />
  <!-- FIN HEADER  -->
  
  <!-- START BODY -->
  <router-view />
  <!-- END BODY -->

  <!-- FOOTER AREA  -->
  <Footer />
  <!-- FINAL FOOTER AREA  -->

</template>

<script>
  import Header from '@/components/HeaderPage.vue';
  import Footer from '@/components/FooterPage.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
    }
  }
</script>
