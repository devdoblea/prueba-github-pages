<template>
  <div class="profile">
    <ProfilePage />
  </div>
</template>

<script>
// @ is an alias to /src
import ProfilePage from '@/components/ProfilePage.vue'

export default {
  name: 'Profile',
  components: {
    ProfilePage
  }
}
</script>