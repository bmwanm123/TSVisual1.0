<template>
  <div class="XYaw"></div>
</template>

<script>
import * as d3 from 'd3'
import $ from 'jquery'
import {
  HeadData,
  faceProbability,
  faceProbability1,
  stu1Head_yaw,
  faceProdata,
  stu1Head_yaw1,
  faceProdata11
} from './headdata'
import Emitter from '../../utils/emitter'

export default {
  components: {},
  name: 'XYaw',
  data() {
    return {
      YawData: [],
      IsShot: ''
    }
  },
  methods: {
    initDetaile() {
      const width1 = $('.XYaw').width()
      const height1 = $('.XYaw').height()
      const width = width1 * 0.96
      const height = height1 * 0.96
      console.log(width, height)
      var margin = { top: 20, right: 20, bottom: 20, left: 20 }
      var svg = d3.select('.XYaw')

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

      // var x = d3.scaleTime().rangeRound([0, width]) //时间比例尺
      var x = d3.scaleLinear().rangeRound([width * 0.04, width]) //时间比例尺

      var y = d3.scaleLinear().rangeRound([height * 0.87, 0])

      var lineX = [],
        lineY = []
      var line = d3
        .line()
        .curve(d3.curveStepAfter)
        .x(function(d) {
          // lineX.push(x(d.date))
          // return x(d.date)
          lineX.push(x(parseInt(d.name)))
          // return x(parseInt(d.name))
          return x(parseInt(d.name) * 1.18)
        })
        .y(function(d) {
          // lineY.push(y(d.close))
          // return y(d.close)
          lineY.push(y(parseInt(d.yaw)))
          return y(parseInt(d.yaw))
        })

      this.line_x = lineX
      this.line_y = lineY
      console.log(lineX, lineY)

      var data = []
      // for (var i = 0; i < HeadData.length; i++) {
      //   HeadData[i].date = parseTime(HeadData[i].date) //日期字符串转换为d3的日期对象
      //   HeadData[i].close = +HeadData[i].close
      //   data.push(HeadData[i])
      // }
      // for (var i = 0; i < stu1Head_yaw.length; i++) {
      //   stu1Head_yaw[i].name = parseInt(stu1Head_yaw[i].name)
      //   stu1Head_yaw[i].yaw = parseInt(stu1Head_yaw[i].yaw)
      //   data.push(stu1Head_yaw[i])
      // }
      for (var i = 0; i < stu1Head_yaw1.length; i++) {
        stu1Head_yaw1[i].name = parseInt(stu1Head_yaw1[i].name)
        stu1Head_yaw1[i].yaw = parseInt(stu1Head_yaw1[i].yaw)
        data.push(stu1Head_yaw1[i])
      }
      console.log(data)
      this.YawData = data
      x.domain(
        d3.extent(data, function(d) {
          //返回最大、最小值
          // return d.date
          // return d.name
          return d.name * 1.18
        })
      )
      y.domain(
        d3.extent(data, function(d) {
          // return d.close
          return d.yaw
        })
      )
      // console.log('坐标', x, y)
      //横坐标轴
      svg
        .append('g')
        .attr('transform', 'translate(0,' + height * 0.9 + ')')
        .call(d3.axisBottom(x))
        .select('.domain')
        .remove()

      //纵坐标轴
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
        .text('Y/Yaw')
        .attr('font-size', 13)

      //中间数字线
      svg
        .append('line')
        .attr('x1', -10)
        .attr('y1', height / 2)
        .attr('x2', width * 0.015)
        .attr('y2', height / 2)
        .attr('stroke', 'black')
        .attr('stroke-width', 0.8)
        .attr('stroke-dasharray', '1,2,1,2')

      svg
        .append('text')
        .attr('x', -2)
        .attr('y', height / 2)
        .text('0')
        .attr('font-size', 12)

      //下方数字线
      svg
        .append('line')
        .attr('x1', -10)
        .attr('y1', height)
        .attr('x2', width * 0.015)
        .attr('y2', height)
        .attr('stroke', 'black')
        .attr('stroke-width', 0.8)
        .attr('stroke-dasharray', '1,2,1,2')

      svg
        .append('text')
        .attr('x', -2)
        .attr('y', height)
        .text('-1')
        .attr('font-size', 12)

      // //上方数字线
      svg
        .append('line')
        .attr('x1', -10)
        .attr('y1', 0)
        .attr('x2', width * 0.015)
        .attr('y2', 0)
        .attr('stroke', 'black')
        .attr('stroke-width', 0.8)
        .attr('stroke-dasharray', '1,2,1,2')

      svg
        .append('text')
        .attr('x', -2)
        .attr('y', 10)
        .text('1')
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

      // 表情概率柱状图
      var y_face = d3 //整体高度
        .scaleOrdinal()
        .domain(['X-Yaw'])
        .range([0, height * 0.87])
      // .rangeRoundBands([0, height], 0.15, 0)

      var y1 = d3 //算法概率比例尺
        .scaleLinear()
        .domain([0, 98])
        .range([height * 0.08, 0])

      var x_face = d3 //概率图横坐标
        .scaleOrdinal()
        // .domain(d3.range(9))
        .domain(d3.range(data.length))
        .range([0, width], 0.1)

      // var xAxis = d3.svgAxis()
      //   .scale(x_face)
      //   .orient('bottom')

      var multiple = svg
        .selectAll('.multiple')
        .attr('width', width)
        .attr('height', height)
        .data(
          y_face.domain().map(function(d) {
            return { name: d }
          })
        )
        .enter()
        .append('g')
        .attr('class', 'multiple')
        .attr('transform', function(d) {
          return 'translate(0,' + y_face(d.name) + ')'
        })

      // var facedata = faceProbability
      var facedata = []
      // for (var i = 0; i < faceProdata.length; i++) {
      //   faceProdata[i].emotionlabel = faceProdata[i].emotionlabel
      //   faceProdata[i].percentage = parseFloat(faceProdata[i].percentage)
      //   facedata.push(faceProdata[i])

      //   // var key = i;
      //   // var value = faceProdata[i].percentage;
      //   // pcenD[key] = value;
      // }
      for (var i = 0; i < faceProdata11.length; i++) {
        faceProdata11[i].emotionlabel = faceProdata11[i].emotionlabel
        faceProdata11[i].percentage = parseFloat(faceProdata11[i].percentage)
        facedata.push(faceProdata11[i])
      }

      var faceColors = {
        anger: '#EE6363',
        disgust: '#9370DB',
        fear: '#B4EEB4',
        happiness: '#FFD700',
        neutral: '#CFCFCF',
        sadness: '#66CDAA',
        surprise: '#5CACEE'
      }

      var pcenD = faceProbability1
      //概率线条
      var yAxis = d3
        .axisLeft(y1)
        .scale(y1)
        .ticks(4, '%')

      multiple
        .data(pcenD, function(d) {
          return d.name
        })
        .selectAll('rect')
        .data(function(d) {
          return x_face.domain().map(function(i) {
            return { key: i, value: +d[i] }
          })
        })
        .enter()
        .insert('rect', '*')
        .style('cursor', 'pointer')
        .on('mouseover', function(ev, d) {
          d3.select(ev.currentTarget)
            .attr('width', 10)
            .attr('height', 30)

          // console.log(d.key)
          svg
            .append('text')
            .classed('tip', true)
            .attr('x', lineX[parseInt(d.key)] * 1.18 - 1.5)
            .attr('y', lineY[parseInt(d.key)] + 15)
            .attr('fill', 'black')
            .text(facedata[d.key].emotionlabel)

          // console.log(stu1Head_yaw1)
          svg
            .append('text')
            .classed('tip1', true)
            .attr('x', lineX[parseInt(d.key)] * 1.18 + 10.5)
            .attr('y', lineY[parseInt(d.key)] + 30)
            .attr('fill', 'black')
            .text(`${stu1Head_yaw1[parseInt(d.key)].yaw}°`)
        })
        .on('mouseleave', function(ev, d) {
          d3.select(ev.currentTarget)
            .attr('width', width / data.length - 0.8)
            .attr('height', function(d) {
              return (y1(0) - y1(d.value)) / 2
            })
            .attr('fill-opacity', 1)
          d3.select('.tip').remove()
          d3.select('.tip1').remove()
        })
        .on('click', (e, d) => {
          if (d.key == 155) {
            this.IsShot = true
            Emitter.emit('getShot', this.IsShot) //选中某一link后触发
          }
          console.log(this.IsShot)
        })
        //鼠标结束
        .attr('width', width / data.length - 0.8)
        // .attr('width', x_face.rangeBand())
        .style('fill', function(d) {
          return faceColors[facedata[d.key].emotionlabel]
        })
        .attr('x', function(d) {
          // console.log(d, lineX)
          return lineX[parseInt(d.key)] * 1.18 - 9.5
          // return lineX[parseInt(d.key)] + 0.8
        })
        .attr('y', function(d) {
          return lineY[parseInt(d.key)] + 1
        })
        .attr('height', function(d) {
          return (y1(0) - y1(d.value)) / 2
        })

      // for (var item = 0; item < data.length; item++) {
      // svg
      //   .append('g')
      //   .attr('class', 'axis axis--y axis--y-inside')
      //   // .data(pcenD, function(d) {
      //   //   return x_face.domain().map(function(i) {
      //   //     return { key: i, value: +d[i] }
      //   //   })
      //   // })
      //   // .attr('width', width / data.length - 0.1)
      //   .attr('transform', function(d, i) {
      //     // console.log(item)
      //     return (
      //       'translate(' + lineX[parseInt(2)] + ',' + lineY[parseInt(2)] + ')'
      //     ) //返回圆心坐标
      //   })
      //   .call(yAxis(pcenD[2]).tickSize(-(width / data.length - 0.1)))
      // }
    }
  },
  created() {},
  mounted() {
    Emitter.on('getLink', data => {
      this.initDetaile()
    })
    // this.initDetaile()
  }
}
</script>

<style scoped>
.XYaw {
  width: 100%;
  height: 100%;
}
</style>
