<template>
  <div class="VisBosy">
    <div class="VideoViewBody">
      <VideoView></VideoView>
    </div>
    <div class="RelationBody">
      <RelationView></RelationView>
    </div>
    <!-- <div class="ClusterBody">
      <ClusterWordView></ClusterWordView>
    </div> -->
    <div class="playvideobody">
      <PlayBackView></PlayBackView>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ClusterWordView from '@/components/ClusterWordView'
import VideoView from '@/components/VideoView'
import RelationView from '@/components/RelationView'
import PlayBackView from '@/components/PlayBackView'

export default {
  components: { ClusterWordView, VideoView, RelationView, PlayBackView },
  name: 'VisIndex',
  data() {
    return {
      msg: 'Hello World FlaskVue!'
    }
  },
  methods: {},
  created() {}
}
</script>

<style scoped>
.VisBosy {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 95%;
}
.VideoViewBody {
  width: 30%;
  height: 100%;
  border: 0.8px #ccc solid;
  margin: 0.1%;
}
.RelationBody {
  width: 57%;
  height: 100%;
  border: 0.8px #ccc solid;
  margin: 0.1%;
}
/* .ClusterBody {
  width: 16%;
  height: 100%;
  border: 0.8px #ccc solid;
  margin: 0.1%;
} */
.playvideobody {
  width: 10%;
  height: 100%;
  border: 0.8px #ccc solid;
  margin: 0.1%;
}
</style>
