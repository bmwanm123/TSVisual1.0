<template>
  <div class="TStudentCluster_view">
    <div class="box"></div>
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import * as d3 from 'd3'
import { StudentData } from '../SentenceView/Sentencedata'
// import { StudentData } from './Sentencedata_case2'
import { WeatherWheel } from '@/lib/weatherwheel.js'
import { TeacherPie } from '@/lib/teachPie.js'
import Emitter from '../../utils/emitter'

export default {
  components: {},
  name: 'TStudent',
  data() {
    return {
      TeacherData: [
        {
          date: 'Mon',
          money: 120
        },
        {
          date: 'Tue',
          money: 200
        },
        {
          date: 'Wed',
          money: 150
        }
      ],
      animateDuration: 1000,
      scaleRadius: '',
      sentenceTitle: 20,
      textColor: 'black'
    }
  },
  methods: {
    initCluster() {
      const width = $('.TStudentCluster_view').width()
      const height = $('.TStudentCluster_view').height()
      console.log(width, height)
      var svg = d3.select('.box')

      svg = svg
        .append('svg')
        .attr('width', width)
        .attr('height', height)

      for (var item = 0; item < 1; item++) {
        svg = svg
          .append('g')
          .attr('class', 'TSContent')
          .attr(
            'transform',
            'translate(' +
              width * (item + 1) * 0.2 +
              ',' +
              height * (item + 1) * 0.28 +
              ')' //移动饼图在左圆中的位置
          )
          .style('width', width)

        //左侧老师pie图
        // const tePie = new TeacherPie(svg, this.TeacherData) //svg画布作为参数
        //   .render();

        //学生元素
        console.log('学生数据', StudentData)
        var diameter = d3.min([width, height])
        // }
        const wheel = new WeatherWheel(svg) //svg画布作为参数
          .size([diameter, diameter])
          .data(StudentData)
          .render()
      }
    }
  },
  created() {},
  mounted() {
    Emitter.on('getLine', data => {
      this.IsLearning = data
      this.initCluster()
    })
    // this.initCluster()
  }
}
</script>

<style scoped>
.TStudentCluster_view {
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 100%;
}
</style>
