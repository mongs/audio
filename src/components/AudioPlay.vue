<template>
<div class="hello">
  <p>{{audioInfo.name}}</p>
  <p>{{audioInfo.type}}</p>
  {{audioInfo.src}}
  <audio id="audio" :src="audioInfo.src" controls autoplay @timeupdate="updateTime" @play="play" ref="audio" @pause="pause"></audio>

  <p>当前播放时间： {{format(current)}}</p>
  <p>总时间长： {{format(duration)}}</p>

  <div class="progress-bar">
    <div class="progress" :style="{width: percent}"></div>
  </div>
  <i class="icon-first"></i>
  <i :class="{'icon-play2': !isPlay, 'icon-pause': isPlay}" @click="clickIcon"></i>
  <i class="icon-last"></i>
  <i class="icon-paragraph-center"></i>
</div>
</template>

<script>
import {
  mapActions
} from 'vuex'
export default {
  name: 'index',
  data() {
    return {
      current: 0,
      duration: 0,
      isPlay: true,
      percent: 0
    }
  },

  created() {
    let params = this.$route.params.mid;
    let audioKey = params.split("_")[0],
      audioId = params.split("_")[1];
    let playlist = this.$store.getters.playlist;
    for (let item in playlist) {
      if (item === audioKey) {
        let audioItem = playlist[item]
        for (let i = 0, len = audioItem.length; i < len; i++) {
          if (audioItem[i].id == audioId) {
            this.audioInfo = audioItem[i]
            return
          }
        }
      }
    }
  },

  methods: {
    play(e) {
      this.isPlay = true;
      let list = this.$store.getters.sequenceList || [];
      list.push(this.audioInfo)
      this.selectPlay({
        list: list,
        index: 1
      })
      this.duration = e.target.duration
    },
    pause() {
      this.isPlay = false;
    },
    clickIcon() {
      if(this.isPlay){
        this.$refs.audio.pause()
      }else{
        this.$refs.audio.play()
      }
    },
    updateTime(e) {
      this.current = e.target.currentTime;

      this.percent = ((this.current / this.duration)*100).toFixed(2) + "%"
      console.log(this.percent);
    },
    format(interval) {
      interval = interval | 0
      const minute = interval / 60 | 0
      const second = this._pad(interval % 60)
      return `${minute}:${second}`
    },
    onProgressBarChange(percent) {
      const currentTime = this.duration * percent
      this.$refs.audio.currentTime = currentTime
    },
    _pad(num, n = 2) {
      let len = num.toString().length
      while (len < n) {
        num = '0' + num
        len++
      }
      return num
    },
    ...mapActions([
      'selectPlay',
    ])
  }
}
</script>

<style scoped>
.progress-bar {
  height: 0.3em;
  margin-left: 5%;
  width: 90%;
  box-shadow: 0 0 5px rgba(200, 200, 200, .7)
}

.progress {
  height: 100%;
  background: rgba(0, 0, 100, .4);
}
</style>
