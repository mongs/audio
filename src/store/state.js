const state = {
  playlist: {
    "album": [{
        "id": 1,
        "name": "菊花台",
        "type": "专辑",
        "time": "5.04",
        "src": "/static/audio/海阔天空.mp3"
      },
      {
        "id": 2,
        "name": "桃花源",
        "type": "专辑",
        "time": "5.00",
        "src": "/static/audio/海阔天空.mp3"
      },
      {
        "id": 3,
        "name": "董小姐",
        "type": "专辑",
        "time": "4.00",
        "src": "/static/audio/海阔天空.mp3"
      }
    ],
    "music": [{
      "id": 1,
      "name": "菊花台",
      "type": "音乐",
      "time": "5.04",
      "src": "/static/audio/海阔天空.mp3"
    }, {
      "id": 2,
      "name": "桃花源",
      "type": "音乐",
      "time": "5.00",
      "src": "/static/audio/海阔天空.mp3"
    }, {
      "id": 3,
      "name": "董小姐",
      "type": "音乐",
      "time": "4.00",
      "src": "/static/audio/海阔天空.mp3"
    }]
  },     //歌单列表
  sequenceList: [], //播放列表
  currentIndex: -1  //当前正在播放的使那个
}

export default state
