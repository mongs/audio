<template>
  <div class="hello">
    <ul>
      <li v-for="list in audioLists.album">
        <router-link :to="{path: 'detail/album_' + list.id}">
          {{list.name}}
        </router-link>
      </li>
      <li v-for="list in audioLists.music">
        <router-link :to="{path: 'detail/music_' + list.id}">
          {{list.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import data from '@/data.json'
export default {
  name: 'index',
  data() {
    return data
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
