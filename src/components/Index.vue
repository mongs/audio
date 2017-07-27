<template>
  <div class="hello">
    <ul>
      <li v-for="list in playlist.album">
        <router-link :to="{path: 'detail/album_' + list.id}">
          {{list.name}}
        </router-link>
      </li>
      <li v-for="list in playlist.music">
        <router-link :to="{path: 'detail/music_' + list.id}">
          {{list.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  created() {
      this.playlist = this.$store.getters.playlist
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
