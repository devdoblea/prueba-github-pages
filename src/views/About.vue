<template>
  <div class="about">
    <AboutPage msg="Hola"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutPage from '@/components/AboutPage.vue'

export default {
  name: 'About',
  components: {
    AboutPage
  }
}
</script>