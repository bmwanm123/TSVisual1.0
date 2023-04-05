<template>
  <div class="TeacherEmo"></div>
</template>

<script>
import * as d3 from 'd3'
import $ from 'jquery'
import { tem, Teachertem, Teachertem1 } from '@/DataJS/TeacherData'
// import { Teachertem1 } from '@/DataJS/TeacherData_case2'
import { TeacherPitch } from './headdata'
import Emitter from '../../utils/emitter'

export default {
  components: {},
  name: 'Teacher',
  data() {
    return {}
  },
  methods: {
    initTeacherEmo() {
      const width1 = $('.TeacherEmo').width()
      const height1 = $('.TeacherEmo').height()
      const width = width1 * 0.96
      const height = height1 * 0.96
      console.log(width, height)
      var margin = { top: 20, right: 20, bottom: 20, left: 20 }
      var svg = d3.select('.TeacherEmo')

      svg = svg
        .append('svg')
        .attr('width', width1)
        .attr('height', height1)

      //教师情感Bar
      var gBar = svg
        .append('g')
        .attr('class', 'EmoBar')
        .style('width', width)
        .style('height', height)
        .attr(
          'transform',
          'translate(' + width * 0.025 + ',' + height * 0.0 + ')'
        )
      var x = d3.scaleBand().rangeRound([width * 0.01, width])
      // .paddingInner(0.0001)
      // .align(0.1);

      var barY = d3.scaleLinear().rangeRound([height * 0.47, 0])

      var data = Teachertem1
      // var data = Teachertem;
      var keys = ['a', 'b', 'c']
      data.sort(function(a, b) {
        return b.total - a.total
      })

      x.domain(
        data.map(function(d) {
          return d.state
        })
      )
      barY
        .domain([
          0,
          d3.max(data, function(d) {
            return d.total
          })
        ])
        .nice()

      let tt = d3.stack().keys(keys)(data)
      gBar
        .append('g')
        .selectAll('g')
        .data(tt)
        .enter()
        .append('g')
        .selectAll('rect')
        .data(function(d) {
          return d
        })
        .enter()
        .append('rect')
        .style('cursor', 'pointer')
        .on('mouseover', ev =>
          d3
            .select(ev.currentTarget)
            .attr('fill', 'black')
            .attr('fill-opacity', 0.5)
        )
        .on('mouseleave', (ev, d) =>
          d3
            .select(ev.currentTarget)
            .attr('fill', function() {
              if (d[0] == 0) {
                return d.data.colors['a']
              }
              if (d[0] == 1) {
                return d.data.colors['b']
              }
              if (d[0] == 2) {
                return d.data.colors['c']
              }
            })
            .attr('fill-opacity', 1)
        )
        .attr('fill', function(d) {
          console.log(d)
          if (d[0] == 0) {
            return d.data.colors['a']
          }
          if (d[0] == 1) {
            return d.data.colors['b']
          }
          if (d[0] == 2) {
            return d.data.colors['c']
          }
        })
        .attr('x', function(d) {
          return x(d.data.state)
        })
        .attr('y', function(d) {
          return barY(d[1])
        })
        .attr('height', function(d) {
          return barY(d[0]) - barY(d[1] + 0.05)
        })
        .attr('width', x.bandwidth() + 1)

      //教师情感Bar结束

      //教师音高信息变化

      var x = d3.scaleLinear().rangeRound([width * 0.04, width + 25]) //时间比例尺
      var x1 = d3.scaleLinear().rangeRound([width * 0.04, width]) //时间比例尺

      var y = d3.scaleLinear().rangeRound([height * 0.87, height * 0.5])

      var lineX = [],
        lineY = []
      var line = d3
        .line()
        .curve(d3.curveStepAfter)
        .x(function(d) {
          lineX.push(x(parseInt(d.name)))
          return x(parseInt(d.name) * 3.72)
        })
        .y(function(d) {
          lineY.push(y(parseInt(d.pitch)))
          return y(parseInt(d.pitch))
        })

      this.line_x = lineX
      this.line_y = lineY
      console.log(lineX, lineY)
      var data = []

      for (var i = 0; i < TeacherPitch.length; i++) {
        TeacherPitch[i].name = parseInt(TeacherPitch[i].name)
        TeacherPitch[i].pitch = parseInt(TeacherPitch[i].pitch)
        data.push(TeacherPitch[i])
      }
      console.log(data)

      x.domain(
        d3.extent(data, function(d) {
          return d.name * 3.72
        })
      )
      x1.domain(
        d3.extent(data, function(d) {
          return d.name * 3.72
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
        .attr('transform', 'translate(0,' + height * 0.87 + ')')
        .call(d3.axisBottom(x1))
        .select('.domain')
        .remove()

      //纵坐标轴
      svg
        .append('rect')
        .attr('transform', 'translate(' + 0 + ',' + height * 0.12 + ')')
        .attr('fill', '#FFDEAD')
        .attr('x', function() {
          return -6
        })
        .attr('y', function() {
          return -20
        })
        .attr('height', function(d) {
          return height
        })
        .attr('width', width * 0.03)

      svg
        .append('text')
        .attr('x', 1)
        .attr('y', height * 0.1)
        .text('Bar')
        .attr('font-size', 12)

      svg
        .append('text')
        .attr('x', 1)
        .attr('y', height * 0.8)
        .text('Pitch')
        .attr('font-size', 12)

      //纵坐标轴
      // svg
      //   .append('g')
      //   .attr(
      //     'transform',
      //     'translate(' + width * 0.02 + ',' + height * 0.13 + ')'
      //   )
      //   .call(d3.axisLeft(y))
      //   .append('text')
      //   .attr('fill', '#000')
      //   .attr('transform', 'rotate(-90)')

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
      this.initTeacherEmo()
    })
    // this.initTeacherEmo()
  }
}
</script>
<style scoped>
.TeacherEmo {
  width: 100%;
  height: 100%;
}
</style>
