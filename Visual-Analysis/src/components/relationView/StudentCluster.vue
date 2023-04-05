<template>
  <div class="studentProject">
    <div id="studentGaugeContainer"
         style="position:relative"></div>
  </div>
</template>

<script>
import axios from 'axios'
import { Gauge } from '@/lib/gauge.js'
import * as d3 from 'd3'
import {
  X,
  Y,
  stu1X_UMAP,
  stu1Y_UMAP,
  stuAllX,
  stuAllY,
  stu2X_UMAP,
  stu2Y_UMAP,
  relationStu2
} from '@/lib/stuaxis.js'
import { X_Clust, Y_Clust, Stu2Clust } from '@/lib/stuClusData.js'
// import { X_Clust, Y_Clust, Stu2Clust } from '@/lib/stuClusData_case2.js'
import $ from 'jquery'
import Emitter from '../../utils/emitter'

export default {
  components: {},
  name: 'StudentCluster',
  data() {
    return {
      PercenMin: 0,
      PercenMax: 0,
      YawMin: 0,
      YawMax: 0
    }
  },
  methods: {
    initialize() {
      console.log(Math.max(...X), Math.min(...X))
      console.log(relationStu2)
      this.createGauges()
    },
    createGauge(name, label, index, x, y, stuD, min, max) {
      const width = $('.studentProject').width()
      const height = $('.studentProject').height()
      var gauges = []
      console.log('调用函数', this.PercenMin, this.YawMax, stuD)

      var config = {
        size: width * 0.1,
        label: label,
        min: undefined != min ? min : 0,
        max: undefined != max ? max : 100,
        // Xmax: Math.max(...X_Clust), //case2
        // Xmin: Math.min(...X_Clust),
        // Ymax: Math.max(...Y_Clust),
        // Ymin: Math.min(...Y_Clust),
        Xmax: Math.max(...X), //case1
        Xmin: Math.min(...X),
        Ymax: Math.max(...Y),
        Ymin: Math.min(...Y),
        minorTicks: 5,
        index: index,
        stuX: x,
        stuY: y
      }

      //点击流数据
      config.clickdata = stuD.click

      var faceColors = {
        anger: '#EE6363',
        disgust: '#9370DB',
        fear: '#B4EEB4',
        happiness: '#FFD700',
        neutral: '#CFCFCF',
        sadness: '#66CDAA',
        surprise: '#5CACEE'
      }

      //外层表情比例尺
      var scaleFaceRange = d3
        .scaleLinear()
        .domain([this.PercenMin, this.PercenMax])
        .nice()
        .range([config.min, config.max])

      //指针比例尺 左边部分
      var scalePoint_left = d3
        .scaleLinear()
        .domain([this.YawMin, 0])
        .nice()
        .range([config.min, config.max * 0.5])

      //指针比例尺 右边部分
      var scalePoint_right = d3
        .scaleLinear()
        .domain([0, this.YawMax])
        .nice()
        .range([config.max * 0.5, config.max])

      config.PoinText = stuD.yaw
      var faceEnd = scaleFaceRange(stuD.percentage)
      var range = config.max - config.min

      if (stuD.yaw < 0) {
        config.PointAt = scalePoint_left(stuD.yaw)
      }
      if (stuD.yaw >= 0) {
        config.PointAt = scalePoint_right(stuD.yaw)
      }

      console.log(config.PointAt, range)

      config.yellowColor = faceColors[stuD.emotionlabel]

      //内层指向环范围
      // config.yellowZones = [
      //   { from: config.min + range * 0.75, to: config.min + range * 0.9 }
      // ]
      // config.redZones = [{ from: config.min + range * 0.9, to: config.max }]
      config.yellowZones = [
        {
          from: config.PointAt - range * 0.1,
          to: config.PointAt + range * 0.05
        }
      ]
      config.redZones = [
        {
          from: config.PointAt + range * 0.05,
          to: config.PointAt + range * 0.1
        }
      ]

      //face环范围
      // config.faceZones = [{ from: config.min, to: config.min + range * 0.75 }]
      config.faceZones = [{ from: config.min, to: faceEnd }]

      gauges[name] = new Gauge(name + 'GaugeContainer', config)
      console.log(gauges[name])
      gauges[name].render()
    },
    createGauges() {
      // for (var i = 0; i < stu2X_UMAP.length; i++) {
      //   if (i % 6 == 0) {
      //     this.createGauge(
      //       'student',
      //       'Student',
      //       i,
      //       stu2X_UMAP[i],
      //       stu2Y_UMAP[i]
      //     )
      //   }
      // }

      //找出概率、yaw的最大最小值
      var percen = [],
        yaw = []
      for (var i = 0; i < relationStu2.length; i++) {
        percen.push(parseFloat(relationStu2[i].percentage))
        yaw.push(parseFloat(relationStu2[i].yaw))
      }
      this.PercenMin = Math.min(...percen)
      this.PercenMax = Math.max(...percen)
      this.YawMin = Math.min(...yaw)
      this.YawMax = Math.max(...yaw)

      for (var i = 0; i < X_Clust.length; i++) {
        // if ((i % 2 == 0)) {
        //   //case2
        //   this.createGauge(
        //     'student',
        //     'Student',
        //     i,
        //     X_Clust[i],
        //     Y_Clust[i],
        //     Stu2Clust[i]
        //   )
        // }
        this.createGauge(
          'student',
          'Student',
          i,
          X_Clust[i],
          Y_Clust[i],
          Stu2Clust[i]
        )
      }

      // for (var i = 0; i < X.length; i++) {
      //   if (i % 5 == 0) {
      //     this.createGauge(
      //       "student",
      //       "Student",
      //       i,
      //       X[i],
      //       Y[i],
      //       relationStu2[i]
      //     );
      //   }
      // }
    },
    updateGauges() {
      for (var key in gauges) {
        var value = this.getRandomValue(gauges[key])
        gauges[key].redraw(value)
      }
    },
    getRandomValue(gauge) {
      var overflow = 0 //10;
      return (
        gauge.config.min -
        overflow +
        (gauge.config.max - gauge.config.min + overflow * 2) * Math.random()
      )
    }
  },
  created() {},
  mounted() {
    Emitter.on('getLine', data => {
      this.IsLearning = data
      this.initialize()
    })
    // this.initialize()
  }
}
</script>
<style scoped>
.studentProject {
  width: 100%;
  height: 100%;
}
#studentGaugeContainer {
  width: 100%;
  height: 100%;
}
</style>
