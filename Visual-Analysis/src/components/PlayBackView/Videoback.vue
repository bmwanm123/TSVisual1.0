<template>
  <div class="videomain">
    <awesome-video :properties="videoOption.properties"
                   :videoStyle="videoOption.videoStyle"
                   :controlsConfig="videoOption.controlsConfig">

    </awesome-video>
  </div>
</template>

<script>
import axios from 'axios'
import AwesomeVideo from 'awesome-video-player'

export default {
  components: { AwesomeVideo },
  name: 'VideoBack',
  data() {
    return {
      videoOption: {
        properties: {
          // src:
          //   'https://mos-vod-drcn.dbankcdn.cn/P_VT/video_injection/2A1343EFA/v3/6CC21C811065945606293295744/MP4Mix_H.264_1920x1080_6000_HEAAC1_PVC_NoCut.mp4',
          src:
            'https://video-lecture.oss-cn-beijing.aliyuncs.com/struct/%E6%8C%87%E5%90%91%E7%BB%93%E6%9E%84%E4%BD%93%E7%9A%84%E6%8C%87%E9%92%88.webm',
          preload: 'auto',
          // autoplay: 'autoplay',
          muted: true
        },
        videoStyle: {
          width: '100%',
          height: '100%'
        },
        controlsConfig: {
          fullScreenTit: '全屏',
          EscfullScreenTit: '退出全屏',
          speedTit: '倍速',
          volumeTit: '音量',
          muteTit: '静音',
          playTit: '播放',
          pauseTit: '暂停',
          fullScreen: true,
          speed: true,
          listen: true
        }
      }
    }
  },
  methods: {},
  created() {}
}
</script>

<style scoped>
.videomain {
  width: 100%;
  height: 100%;
}
</style>