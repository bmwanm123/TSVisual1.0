<template>
  <div class="stumain">
    <p class="textSty">Studentshot</p>
    <div class="pic1"
         v-show="IsShot">
      <img src="@/assets/image/back2.jpg"
           style="width:100%;height:100%;" />
    </div>
    <div class="pic2"
         v-show="IsShot">
      <img src="@/assets/image/back3.jpg"
           style="width:100%;height:100%;" />
    </div>
    <div class="pic3"
         v-show="IsShot">
      <img src="@/assets/image/back1.jpg"
           style="width:100%;height:100%;" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Emitter from '../../utils/emitter'

export default {
  components: {},
  name: 'StudentShot',
  data() {
    return {
      IsShot: ''
    }
  },
  methods: {},
  created() {},
  mounted() {
    Emitter.on('getPic', data => {
      this.IsShot = data
    })
  }
}
</script>

<style scoped>
.stumain {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.pic1 {
  width: 100%;
  height: 31%;
  padding: 3%;
}
.pic2 {
  width: 100%;
  height: 31%;
  padding: 3%;
}
.pic3 {
  width: 100%;
  height: 31%;
  padding: 3%;
}
.textSty {
  text-align: left;
  padding-left: 5%;
}
</style>