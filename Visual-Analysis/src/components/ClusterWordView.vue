<template>
  <div class="sentencemain">
    <div class="cluster">
      sentence view
    </div>
    <div class="word">
      <WordView></WordView>
    </div>

  </div>
</template>


<script>
import axios from 'axios'
import { draw } from '../DataJS/Draw'
import { GoTo } from '../DataJS/GoTo'
import $ from 'jquery'
import WordView from './ClusterWordView/WordView.vue'

export default {
  name: 'ClusterWordView',
  components: { WordView },
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {}
}
</script>

<style scoped>
.sentencemain {
  height: 100%;
}
.cluster {
  height: 50%;
  border: 0.5px #ccc solid;
  margin: 1px;
}
.word {
  height: 50%;
  border: 0.5px #ccc solid;
  margin: 1px;
}
</style>