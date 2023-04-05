<template>
  <div class="clickEvent">

  </div>
</template>

<script>
import * as d3 from 'd3'
import $ from 'jquery'
import { clickdata } from './headdata'
import Emitter from '../../utils/emitter'

export default {
  components: {},
  name: 'Click',
  data() {
    return {}
  },
  methods: {
    initClickEvent() {
      const width1 = $('.clickEvent').width()
      const height1 = $('.clickEvent').height()
      const width = width1 * 0.96
      const height = height1 * 0.99
      var margin = { top: 20, right: 20, bottom: 20, left: 20 }
      var svg = d3.select('.clickEvent')

      svg = svg
        .append('svg')
        .attr('width', width1)
        .attr('height', height1)

      svg = svg.append('g').attr('class', 'EventMain')
      // .style('width', width)
      // .style('height', height)
      // .attr(
      //   'transform',
      //   'translate(' + width * 0.01 + ',' + height * 0.01 + ')'
      // )

      //直线串
      svg
        .append('line')
        .attr('x1', width * 0.05)
        .attr('y1', height / 2)
        .attr('x2', width + 16)
        .attr('y2', height / 2)
        .attr('stroke', '#9C9C9C')
        .attr('stroke-width', '1.5px')

      //纵坐标
      svg
        .append('rect')
        .attr('transform', 'translate(' + -1 + ',' + height * 0.2 + ')')
        .attr('fill', '#FFDEAD')
        .attr('x', function() {
          // return -8
          return 4
        })
        .attr('y', function() {
          return -20
        })
        .attr('height', function(d) {
          return height + 9
        })
        // .attr('width', width * 0.035)
        .attr('width', width * 0.025)

      svg
        .append('line')
        .attr('x1', -10)
        .attr('y1', height * 0.95)
        .attr('x2', width * 0.028)
        .attr('y2', height * 0.95)
        .attr('stroke', 'black')
        .attr('stroke-width', 0.8)
        .attr('stroke-dasharray', '1,2,1,2')

      svg
        .append('text')
        .attr('x', 7)
        .attr('y', height * 0.95)
        .text('1')
        .attr('font-size', 12)

      svg
        .append('rect')
        .attr('transform', 'translate(' + 0 + ',' + height * 0.28 + ')')
        .attr('fill', '#F5F5F5')
        .attr('x', function() {
          return width * 0.03
        })
        .attr('y', function() {
          return -20
        })
        .attr('height', function(d) {
          return height * 0.17
        })
        .attr('width', width * 0.1)
      svg
        .append('text')
        .attr('x', width * 0.038)
        .attr('y', height * 0.19)
        .text('Mouse Click')
        .attr('font-size', 13)

      //点击元素
      //圆

      var data = []
      for (var i = 0; i < clickdata.length; i++) {
        clickdata[i].time = parseInt(clickdata[i].time)
        clickdata[i].time1 = parseInt(clickdata[i].time1)
        clickdata[i].name = clickdata[i].name
        data.push(clickdata[i])
      }
      // console.log('点击数据', data)

      var x = d3.scaleLinear().rangeRound([width * 0.04, width]) //时间比例尺

      x.domain(
        d3.extent(data, function(d) {
          return d.time
        })
      )

      var R = height / 12
      var clickColors = {
        play: '#8DEEEE',
        pause: '#EEAD0E',
        seekforward: '#E6E6FA',
        seekback: '#FFE4E1',
        ratechange: '#ADD8E6',
        volumechange: '#CDB38B',
        ratechange1: 'none'
      }
      // for (var i = 0; i < 18; i++) {
      //   var cx = margin.left + i * (2 * R + R)
      //   var cy = height / 2

      //   svg
      //     .append('svg:circle')
      //     .classed('wcircle', true)
      //     .attr('cx', cx)
      //     .attr('cy', cy)
      //     .attr('r', R) //第一个圆半径
      //     // .style('fill', 'none')
      //     .style('fill', '#2ca02c')
      //     .style('stroke', '#2ca02c')
      //     .style('stroke-width', '1px')
      // }
      for (var item = 0; item < data.length; item++) {
        if (item <= 17) {
          svg
            .append('svg:circle')
            .classed('wcircle', true)
            .attr('transform', function() {
              return 'translate(' + width * 0.015 + ',' + 0 + ')' //返回圆心坐标
            })
            .attr('cx', function() {
              return x(data[item].time)
            })
            .attr('cy', function(d, i) {
              return height / 2
            })
            .attr('r', R) //第一个圆半径
            // .style('fill', 'none')
            .style('fill', function() {
              return clickColors[data[item].name]
            })
          // .style('stroke', '#2ca02c')
          // .style('stroke-width', '1px')
          if (item == 6) {
            svg
              .append('rect')
              // .attr('x', x(data[6].time) + 1.5 * R)
              .attr('x', x(data[6].time) + 2 * R + 1)
              .attr('y', height / 2 - R)
              .attr('width', x(225) - x(data[6].time) - 2 * R)
              .attr('height', 2 * R)
              .attr('fill', clickColors[data[item].name])

            //右半圆
            var arc1 = d3
              .arc()
              .innerRadius(0)
              .outerRadius(R)
              .startAngle(0 * Math.PI)
              .endAngle((2 / 2) * Math.PI)
            svg
              .append('path')
              .attr('class', 'arc')
              .attr('d', arc1)
              .attr('fill', clickColors[data[item].name])
              .attr(
                'transform',
                'translate(' + (x(203) + 4 * R - 1) + ',' + height / 2 + ')'
                // 'translate(' + (x(203) + 2 * R - 1) + ',' + height / 2 + ')'
              )

            //三角形
            svg
              .append('path')
              .attr('d', 'M-22,-30 l 60,30 l -60,30 z')
              .attr(
                'transform',
                'translate(' +
                  (x(data[6].time) + 2 * R + 4) +
                  ',' +
                  (height / 2 - 2 * R - 3) +
                  ')scale(.2)'
              )
              .attr('fill', '#FFB90F')
          }
          if (item == 5) {
            svg
              .append('rect')
              // .attr('x', x(data[5].time) - 2 * R)
              .attr('x', x(data[5].time) - 4 * R)
              .attr('y', height / 2 - R)
              .attr('width', x(data[5].time) - x(200) - R)
              .attr('height', 2 * R)
              .attr('fill', '#FFE4E1')

            //左半圆
            var arc1 = d3
              .arc()
              .innerRadius(0)
              .outerRadius(R)
              .startAngle(1 * Math.PI)
              .endAngle((4 / 2) * Math.PI)
            svg
              .append('path')
              .attr('class', 'arc')
              .attr('d', arc1)
              .attr('fill', '#FFE4E1')
              .attr(
                'transform',
                'translate(' + (x(200) + 6 * R + 11) + ',' + height / 2 + ')'
                // 'translate(' + (x(200) + 5 * R + 5) + ',' + height / 2 + ')'
              )

            //右半圆
            var arc = d3
              .arc()
              .innerRadius(0)
              .outerRadius(R)
              .startAngle(0 * Math.PI)
              .endAngle((2 / 2) * Math.PI)

            svg
              .append('path')
              .attr('class', 'arc')
              .attr('d', arc)
              .attr('fill', '#FFE4E1')
              // .attr('fill', 'red')
              .attr(
                'transform',
                'translate(' +
                  (x(data[5].time) + 6 * R - 1) +
                  ',' +
                  height / 2 +
                  ')'
              )

            //三角形
            svg
              .append('path')
              .attr('d', 'M-22,-30 l -60,30 l 60,30 z')
              .attr(
                'transform',
                'translate(' +
                  (x(data[5].time) + 7 * R) +
                  ',' +
                  (height / 2 - 2 * R - 3) +
                  ')scale(.2)'
              )
              .attr('fill', '#FFB90F')
          }
          if (item == 9) {
            svg
              .append('rect')
              .attr('x', x(data[9].time) + 5 * R + 2)
              .attr('y', height / 2 - R)
              .attr('width', x(data[9].time) - x(305))
              .attr('height', 2 * R)
              .attr('fill', '#FFE4E1')
            // .attr('fill', 'red')

            //左半圆
            var arc1 = d3
              .arc()
              .innerRadius(0)
              .outerRadius(R)
              .startAngle(1 * Math.PI)
              .endAngle((4 / 2) * Math.PI)
            svg
              .append('path')
              .attr('class', 'arc')
              .attr('d', arc1)
              .attr('fill', '#FFE4E1')
              .attr(
                'transform',
                // 'translate(' + (x(310) + 7 * R + 1) + ',' + height / 2 + ')'
                'translate(' + (x(310) + 10 * R - 1.5) + ',' + height / 2 + ')'
              )

            //右半圆
            var arc = d3
              .arc()
              .innerRadius(0)
              .outerRadius(R)
              .startAngle(0 * Math.PI)
              .endAngle((2 / 2) * Math.PI)

            svg
              .append('path')
              .attr('class', 'arc')
              .attr('d', arc)
              .attr('fill', '#FFE4E1')
              .attr(
                'transform',
                'translate(' +
                  (x(data[9].time) + 11 * R - 6) +
                  ',' +
                  height / 2 +
                  ')'
              )

            //三角形
            svg
              .append('path')
              .attr('d', 'M-22,-30 l -60,30 l 60,30 z')
              .attr(
                'transform',
                'translate(' +
                  (x(data[9].time) + 11 * R + 3) +
                  ',' +
                  (height / 2 - 2 * R - 3) +
                  ')scale(.2)'
              )
              .attr('fill', '#FFB90F')
          }
          if (item == 15) {
            svg
              .append('rect')
              .attr('x', x(data[15].time) + 2 * R + 3)
              .attr('y', height / 2 - R)
              .attr('width', x(530) - x(data[14].time) + 5)
              .attr('height', 2 * R)
              .attr('fill', '#FFE4E1')

            //右半圆
            var arc1 = d3
              .arc()
              .innerRadius(0)
              .outerRadius(R)
              .startAngle(0 * Math.PI)
              .endAngle((2 / 2) * Math.PI)
            svg
              .append('path')
              .attr('class', 'arc')
              .attr('d', arc1)
              .attr('fill', '#FFE4E1')
              .attr(
                'transform',
                'translate(' + (x(550) + 3 * R - 2) + ',' + height / 2 + ')'
              )

            //三角形
            svg
              .append('path')
              .attr('d', 'M-22,-30 l -60,30 l 60,30 z')
              .attr(
                'transform',
                'translate(' +
                  (x(data[15].time) + 12 * R - 3) +
                  ',' +
                  (height / 2 - 2 * R - 3) +
                  ')scale(.2)'
              )
              .attr('fill', '#FFB90F')
          }
          if (item == 16) {
            svg
              .append('rect')
              .attr('x', x(data[16].time) + 6)
              .attr('y', height / 2 - R)
              .attr('width', x(785) - x(data[16].time) + 5 + R)
              .attr('height', 2 * R)
              .attr('fill', '#E6E6FA')

            //左半圆
            var arc1 = d3
              .arc()
              .innerRadius(0)
              .outerRadius(R)
              .startAngle(1 * Math.PI)
              .endAngle((4 / 2) * Math.PI)
            svg
              .append('path')
              .attr('class', 'arc')
              .attr('d', arc1)
              .attr('fill', '#E6E6FA')
              .attr('transform', 'translate(' + x(711) + ',' + height / 2 + ')')

            //三角形
            svg
              .append('path')
              // .attr('d', 'M-22,-30 l -60,30 l 60,30 z')
              .attr('d', 'M-22,-30 l 60,30 l -60,30 z')
              .attr(
                'transform',
                'translate(' +
                  x(711) +
                  ',' +
                  (height / 2 - 2 * R - 3) +
                  ')scale(.2)'
              )
              .attr('fill', '#FFB90F')
          }
        }

        if (item > 19) {
          svg
            .append('svg:circle')
            .classed('wcircle', true)
            .attr('transform', function() {
              return 'translate(' + width * 0.015 + ',' + 0 + ')' //返回圆心坐标
            })
            .attr('cx', function() {
              return x(data[item].time)
            })
            .attr('cy', function(d, i) {
              return height / 2
            })
            .attr('r', R * 0.35) //第一个圆半径
            // .style('fill', 'none')
            .style('fill', function() {
              return '#696969'
            })
        } else {
        }
      }
    }
  },
  created() {},
  mounted() {
    Emitter.on('getLink', data => {
      this.initClickEvent()
    })
    // this.initClickEvent()
  }
}
</script>
<style scoped>
.clickEvent {
  width: 100%;
  height: 100%;
}
</style>