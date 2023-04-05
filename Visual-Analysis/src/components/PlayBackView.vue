<template>
  <div class="backmain">
    <div class="Title">
      <p style="text-aligin:left">Playback View</p>
    </div>
    <div class="VideoBox">
      <VideoBack></VideoBack>
    </div>
    <div class="SlideBox">
      <Slide></Slide>
    </div>
    <div class="StudentBox">
      <StudentShot></StudentShot>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import $ from 'jquery'
import VideoBack from '@/components/PlayBackView/Videoback'
import Slide from '@/components/PlayBackView/Slide'
import StudentShot from '@/components/PlayBackView/StudentShot'

export default {
  components: { VideoBack, Slide, StudentShot },
  name: 'PlayBackView',
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {}
}
</script>

<style scoped>
.backmain {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.Title {
  height: 3.8%;
  width: 100%;
  border: 0.8px #ccc solid;
  background-color: rgb(240, 240, 240);
  text-align: left;
  padding-left: 3%;
  font-weight: bolder;
  font-size: x-large;
}
.VideoBox {
  height: 25%;
}
.SlideBox {
  height: 18%;
}
.StudentBox {
  height: 53.2%;
}
</style>