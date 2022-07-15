<template>
  <div class="register">
    <RegisterPage />
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterPage from '@/components/RegisterPage.vue'

export default {
  name: 'Register',
  components: {
    RegisterPage
  }
}
</script>