<template>
  <div class="hello">
    {{audioInfo.name}}
  </div>
</template>

<script>
import data from '@/data.json'
export default {
  name: 'index',
  data() {
    return data
  },
  created (){    
    let params = this.$route.params.mid;
    let audioKey = params.split("_")[0],
        audioId = params.split("_")[1];
    console.log(data.audioLists)
    for(let item in data.audioLists){
      if(item === audioKey){
        let audioItem = data.audioLists[item]
        for(let i = 0, len = audioItem.length; i<len; i++){
          if(audioItem[i].id == audioId){
            this.audioInfo = audioItem[i]
            console.log(this.audioInfo)
            return 
          }
        }
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
