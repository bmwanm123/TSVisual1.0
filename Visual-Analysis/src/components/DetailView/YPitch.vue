<template>
  <div class="Pitch"></div>
</template>

<script>
import * as d3 from 'd3'
import $ from 'jquery'
import {
  HeadData_Y,
  faceProbability_Pitch,
  stu1Head_pitch,
  stu1Head_pitch1
} from './headdata'
import Emitter from '../../utils/emitter'

export default {
  components: {},
  name: 'YPitch',
  data() {
    return {}
  },
  methods: {
    initDetaile_Y() {
      const width1 = $('.Pitch').width()
      const height1 = $('.Pitch').height()
      const width = width1 * 0.96
      const height = height1 * 0.96
      console.log(width1, height1)
      var margin = { top: 20, right: 20, bottom: 20, left: 20 }
      var svg = d3.select('.Pitch')

      svg = svg
        .append('svg')
        .attr('width', width1)
        .attr('height', height1)

      svg = svg
        .append('g')
        .attr('class', 'TSDetailMain')
        .style('width', width)
        .style('height', height)
        .attr(
          'transform',
          'translate(' + width * 0.01 + ',' + height * 0.01 + ')'
        )

      var parseTime = d3.timeParse('%d-%b-%y')

      var x = d3.scaleLinear().rangeRound([width * 0.04, width]) //时间比例尺

      var y = d3.scaleLinear().rangeRound([height * 0.87, 0])

      var lineX = [],
        lineY = []
      var line = d3
        .line()
        .curve(d3.curveStepAfter)
        .x(function(d) {
          lineX.push(x(parseInt(d.name)))
          return x(parseInt(d.name) * 1.18)
        })
        .y(function(d) {
          lineY.push(y(parseInt(d.pitch)))
          return y(parseInt(d.pitch))
        })

      this.line_x = lineX
      this.line_y = lineY
      console.log(lineX, lineY)

      var data = []
      // for (var i = 0; i < stu1Head_pitch.length; i++) {
      //   stu1Head_pitch[i].name = parseInt(stu1Head_pitch[i].name)
      //   stu1Head_pitch[i].pitch = parseInt(stu1Head_pitch[i].pitch)
      //   data.push(stu1Head_pitch[i])
      // }
      for (var i = 0; i < stu1Head_pitch1.length; i++) {
        stu1Head_pitch1[i].name = parseInt(stu1Head_pitch1[i].name)
        stu1Head_pitch1[i].pitch = parseInt(stu1Head_pitch1[i].pitch)
        data.push(stu1Head_pitch1[i])
      }
      console.log(data)
      x.domain(
        d3.extent(data, function(d) {
          return d.name * 1.18
        })
      )
      y.domain(
        d3.extent(data, function(d) {
          return d.pitch
        })
      )

      //横坐标轴
      svg
        .append('g')
        .attr('transform', 'translate(0,' + height * 0.9 + ')')
        .call(d3.axisBottom(x))
        .select('.domain')
        .remove()

      svg
        .append('rect')
        .attr('transform', 'translate(' + -3 + ',' + height * 0.12 + ')')
        .attr('fill', '#FFDEAD')
        .attr('x', function() {
          return -8
        })
        .attr('y', function() {
          return -20
        })
        .attr('height', function(d) {
          return height + 8
        })
        .attr('width', width * 0.025)

      svg
        .append('rect')
        .attr('transform', 'translate(' + 0 + ',' + height * 0.13 + ')')
        .attr('fill', '#F5F5F5')
        .attr('x', function() {
          return width * 0.02
          // return width * 0.22
        })
        .attr('y', function() {
          return -20
        })
        .attr('height', function(d) {
          return height * 0.11
        })
        .attr('width', width * 0.06)
      svg
        .append('text')
        .attr('x', width * 0.025)
        .attr('y', height * 0.08)
        .text('X/Pitch')
        // .text('student_happy')
        // .attr('dy', 6)
        // .attr('font-size', 14)
        .attr('font-size', 13)

      //中间数字线
      svg
        .append('line')
        .attr('x1', -10)
        .attr('y1', height / 2 - 10)
        .attr('x2', width * 0.015)
        .attr('y2', height / 2 - 10)
        .attr('stroke', 'black')
        .attr('stroke-width', 0.8)
        .attr('stroke-dasharray', '1,2,1,2')

      svg
        .append('text')
        .attr('x', -2)
        .attr('y', height / 2 - 10)
        .text('0')
        .attr('font-size', 12)

      //下方数字线
      svg
        .append('line')
        .attr('x1', -10)
        .attr('y1', height - 10)
        .attr('x2', width * 0.015)
        .attr('y2', height - 10)
        .attr('stroke', 'black')
        .attr('stroke-width', 0.8)
        .attr('stroke-dasharray', '1,2,1,2')

      svg
        .append('text')
        .attr('x', -2)
        .attr('y', height - 10)
        .text('-1')
        .attr('font-size', 12)

      //折线
      svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'black')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('stroke-width', 0.5)
        .attr('d', line)
    }
  },
  created() {},
  mounted() {
    Emitter.on('getLink', data => {
      this.initDetaile_Y()
    })
    // this.initDetaile_Y()
  }
}
</script>

<style scoped>
.Pitch {
  width: 100%;
  height: 100%;
}
</style>
