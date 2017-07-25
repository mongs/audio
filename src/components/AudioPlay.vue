<template>
  <div class="hello">
    <p>{{audioInfo.name}}</p>
    <p>{{audioInfo.type}}</p>
    {{audioInfo.src}}
    <audio id="audio" :src="audioInfo.src" controls autoplay></audio>
    <div class="progress-bar">
      <div class="progress" style="width: 50%;"></div>
    </div>
    <i class="icon-first"></i>
    <i :class="{'icon-play2': !isPlay, 'icon-pause': isPlay}" @click="isPlay = !isPlay"></i>
    <i class="icon-last"></i>
    <i class="icon-paragraph-center"></i>
  </div>
</template>

<script>
import data from '@/data.json'
export default {
  name: 'index',
  data() {
    return {
      isPlay: true,
      current: '',
      audio: ''
    }
  },
  watch: {
    current: function(newVal){
      console.log(newVal)
    }
  },
  created (){    
    let params = this.$route.params.mid;
    let audioKey = params.split("_")[0],
        audioId = params.split("_")[1];
    for(let item in data.audioLists){
      if(item === audioKey){
        let audioItem = data.audioLists[item]
        for(let i = 0, len = audioItem.length; i<len; i++){
          if(audioItem[i].id == audioId){
            this.audioInfo = audioItem[i]
            return 
          }
        }
      }
    }
  },
  mounted (){
    this.audio = document.getElementById('audio');
    this.current = audio.currentTime;
    
    
  },
  methods: {

  }
}
</script>

<style scoped>
.progress-bar{
  height: 0.3em;
  margin-left: 5%;
  width: 90%;
  box-shadow: 0 0 5px rgba(200, 200, 200, .7)
}
.progress{
  height: 100%;
  background: rgba(0,0,100,.4);
}
</style>
