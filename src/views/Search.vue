<template>
  <div class="search">
    <SearchPage />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchPage from '@/components/SearchPage.vue'

export default {
  name: 'Search',
  components: {
    SearchPage
  }
}
</script>