<template>
  <div class="Learning_view">
    <div class="Title">
      <p style="text-aligin:left">Learning Behavior View</p>
    </div>
    <div class="river">
      <div class="riverbox"></div>
      <div class="studentRing">
        <StudentRing></StudentRing>
      </div>
    </div>
  </div>

</template>

<script>
import $ from 'jquery'
import * as d3 from 'd3'
// import { LineData, StackLine } from './clickLine'
import { LineData, StackLine, LineData1 } from './clickLine1'
import StudentRing from './StudentRing.vue'
import Emitter from '../../utils/emitter'

export default {
  components: { StudentRing },
  name: 'ClickRiver',
  data() {
    return {
      animateDuration: 1000,
      scaleX: null,
      scaleY: null,
      data: null,
      IsLearning: ''
    }
  },
  methods: {
    //中间帧函数
    areaTween(_d) {
      if (!_d) return
      const generateArea = d3
        .area()
        .x(d => d[0])
        .y0(d => d[1])
        .y1(d => d[2])
        .curve(d3.curveCardinal.tension(0))

      const pointX = this.data.map(d => this.scaleX(new Date(d.date)))
      const pointY0 = _d.map(d => this.scaleY(d[0]))
      const pointY1 = _d.map(d => this.scaleY(d[1]))

      const interpolate = this.getAreaInterpolate(pointX, pointY0, pointY1)

      const ponits = []

      return function(t) {
        ponits.push([interpolate.x(t), interpolate.y0(t), interpolate.y1(t)])
        return generateArea(ponits)
      }
    },

    //点插值
    getAreaInterpolate(pointX, pointY0, pointY1) {
      const domain = d3.range(0, 1, 1 / (pointX.length - 1))
      domain.push(1)

      const interpolateX = d3
        .scaleLinear()
        .domain(domain)
        .range(pointX)

      const interpolateY0 = d3
        .scaleLinear()
        .domain(domain)
        .range(pointY0)

      const interpolateY1 = d3
        .scaleLinear()
        .domain(domain)
        .range(pointY1)
      return {
        x: interpolateX,
        y0: interpolateY0,
        y1: interpolateY1
      }
    },
    //防抖函数
    debounce(fn, time) {
      let timeId = null
      return function() {
        const context = this
        const event = d3.event
        timeId && clearTimeout(timeId)
        timeId = setTimeout(function() {
          d3.event = event
          fn.apply(context, arguments)
        }, time)
      }
    },
    initRiver() {
      const width = $('.riverbox').width()
      const height = $('.riverbox').height()
      var svg = d3.select('.riverbox')

      svg = svg
        .append('svg')
        .attr('width', width)
        .attr('height', height)

      svg = svg
        .append('g')
        .attr('class', 'RiverMain')
        .style('width', width)
        .style('height', height)
        .attr('transform', 'translate(' + 0 + ',' + -height * 0.08 + ')')

      var dataset = LineData
      // var dataset = LineData1
      var stack = d3.stack()(dataset)
      var xScale = d3
        .scaleLinear()
        .domain([0, 31])
        .range([22, width])

      var maxHeight = d3.max(dataset, function(d) {
        return d3.max(d, function(d) {
          return d.y0 + d.y
        })
      })
      console.log('最大', maxHeight)
      var yScale = d3
        .scaleLinear()
        .domain([0, maxHeight])
        .range([0, height * 0.95])
      var colors = [
        '#8DEEEE',
        '#EEAD0E',
        '#E6E6FA',
        '#FFE4E1',
        '#ADD8E6',
        '#CDB38B'
      ]
      var groups = svg
        .selectAll('g')
        .data(dataset)
        .enter()
        .append('g')
        .style('fill', function(d, i) {
          console.log(d)
          return colors[i]
        })
      var area = d3
        .area()
        .curve(d3.curveBasis)
        // .interpolate('cardinal')
        .x(function(d, i) {
          return xScale(i)
        })
        .y0(function(d) {
          return height - yScale(d.y0 + d.y)
        })
        .y1(function(d) {
          return height - yScale(d.y0)
        })

      groups
        .append('path')
        .attr('d', function(d) {
          return area(d)
        })
        .style('fill', function(d, i) {
          return colors[i]
        })

      var x = d3
        .scaleLinear()
        .domain([0, 900])
        .range([0, width])

      var y = d3
        .scaleLinear()
        .domain([80, 0])
        .range([0, height])

      const axisBottomLine = d3
        .axisBottom()
        .scale(x) // 使用上面定义的比例尺
        .ticks(2) // 指定刻度的数量,会根据当前区间做出最优分配

      const axisLeftLine = d3
        .axisLeft()
        .scale(y) // 使用上面定义的比例尺
        .ticks(3) // 指定刻度的数量,会根据当前区间做出最优分配

      //在svg中添加一个包含坐标轴各元素的g元素
      const gAxis = svg
        .append('g')
        .attr('transform', 'translate(' + 20 + ',' + height * 1.01 + ')') //平移到(30,10)
        .attr('class', 'axis')
        .attr('fill', '#CFCFCF')

      const gAxis1 = svg
        .append('g')
        .attr('transform', 'translate(' + 20 + ',' + height * 0 + ')') //平移到(30,10)

        .attr('class', 'axis')

      axisBottomLine(gAxis)
      axisLeftLine(gAxis1)
      svg
        .append('text')
        .attr('x', width * 0.94)
        .attr('y', height * 1.06)
        .text('900(s)')
        .attr('font-size', 10)

      // /* ----------------------------绑定鼠标交互事件------------------------  */
      // var textColor = 'black'
      // d3.selectAll('g')
      //   .on('mouseover', function(e, d) {
      //     // const e = d3.event
      //     const position = d3.pointer(e)
      //     console.log('位置', position, d)
      //     e.target.style.cursor = 'hand'

      //     d3.selectAll('g').attr('fill-opacity', 0.3)

      //     d3.select(e.currentTarget).attr('fill-opacity', 1)

      //     svg
      //       .append('text')
      //       .classed('tip', true)
      //       .attr('x', position[0] + 5)
      //       .attr('y', position[1] - 25)
      //       .attr('fill', 'black')
      //       .text(200)
      //   })
      //   .on('mouseleave', function() {
      //     const e = d3.event

      //     d3.selectAll('g').attr('fill-opacity', 1)

      //     d3.select('.tip').remove()
      //   })

      // //添加新的河流图
      // this.data = StackLine
      // var data = this.data
      // console.log(data)
      // /* ----------------------------尺度转换------------------------  */
      // this.scaleX = d3
      //   .scaleTime()
      //   .domain([new Date(data[0].date), new Date(data[data.length - 1].date)])
      //   .range([0, width])

      // this.scaleY = d3
      //   .scaleLinear()
      //   .domain([
      //     0,
      //     (Math.floor(
      //       (d3.max(data, d => d.play) +
      //         d3.max(data, d => d.pause) +
      //         d3.max(data, d => d.seekforward) +
      //         d3.max(data, d => d.seekback) +
      //         d3.max(data, d => d.ratechange) +
      //         d3.max(data, d => d.volumechange)) /
      //         10
      //     ) +
      //       1) *
      //       10
      //   ])
      //   .range([height, 0])

      // var stack = d3
      //   .stack()
      //   .keys([
      //     'play',
      //     'pause',
      //     'seekforward',
      //     'seekback',
      //     'ratechange',
      //     'volumechange'
      //   ])
      //   .order(d3.stackOrderInsideOut)
      //   .offset(d3.stackOffsetWiggle)

      // /* ----------------------------渲染面------------------------  */

      // var areas = svg
      //   .insert('g', ':first-child')
      //   .attr(
      //     'transform',
      //     'translate(0, -' + d3.max(data, d => d3.mean(Object.values(d))) + ')'
      //   ) // 使流图的位置处于Y轴中部
      //   .selectAll('.area')
      //   .data(stack(data))

      // var _colors = d3.scaleOrdinal(d3.schemeCategory10)
      // areas
      //   .enter()
      //   .append('path')
      //   .attr('class', d => 'area area-' + d.key)
      //   .merge(areas)
      //   .style('fill', (d, i) => _colors(i))
      //   .transition()
      //   .duration(this.animateDuration)
      //   .attrTween('d', this.areaTween)

      // /* ----------------------------绑定鼠标交互事件------------------------  */
      // var textColor = 'black'
      // d3.selectAll('.area')
      //   .on('mouseover', function(e, d) {
      //     // const e = d3.event
      //     const position = d3.pointer(e)
      //     console.log('位置', position)
      //     e.target.style.cursor = 'hand'

      //     d3.selectAll('.area').attr('fill-opacity', 0.3)

      //     d3.select(e.currentTarget).attr('fill-opacity', 1)

      //     svg
      //       .append('text')
      //       .classed('tip', true)
      //       .attr('x', position[0] + 5)
      //       .attr('y', position[1] - 25)
      //       .attr('fill', 'black')
      //       .text(d.key)
      //   })
      //   .on('mouseleave', function() {
      //     const e = d3.event

      //     d3.selectAll('.area').attr('fill-opacity', 1)

      //     d3.select('.tip').remove()
      //   })

      // svg
      //   .append('text')
      //   .attr('x', width * 0.25)
      //   .attr('y', height * 0.18)
      //   .text('Y/Yaw')
      //   .attr('font-size', 13)
    }
  },
  created() {},
  mounted() {
    Emitter.on('getLine', data => {
      this.IsLearning = data
      this.initRiver()
    })
    // this.initRiver()
  }
}
</script>

<style scoped>
.Learning_view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.Title {
  width: 100%;
  height: 10%;
  border: 0.8px #ccc solid;
  margin: 0.1%;
  background-color: rgb(240, 240, 240);
  text-align: left;
  font-size: larger;
  padding-left: 3%;
  font-weight: bolder;
}
.river {
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
}
.riverbox {
  width: 60%;
  height: 100%;
}
.studentRing {
  width: 40%;
  height: 100%;
}
</style>
