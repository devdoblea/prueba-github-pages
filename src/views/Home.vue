<template>
  <div class="home">
    <HomeLanding msg="Hola"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeLanding from '@/components/HomeLanding.vue'

export default {
  name: 'Home',
  components: {
    HomeLanding
  }
}
</script>
