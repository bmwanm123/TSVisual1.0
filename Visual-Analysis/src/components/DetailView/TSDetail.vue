<template>
  <div class="Box">
    <div class="teacher">
      <Teacher></Teacher>
    </div>
    <div class="Text"
         v-show="IsText"
         style="margin-top:1%">
      <p class="Content"
         style="text-align:left;text-indent: 2em;line-height:25px">
        <a style="color:#9370DB">What</a> can we get from the results? It can be seen <a style="color:#5CACEE">that</a> when the structure
        pointer variable is used as a
        <a style="color:#CFCFCF">function parameter</a>, the change
        of the formal
        parameters in the function will affect the value of the actual parameters, that <a style="color:#EE6363">is to say</a>, they are passed in two directions. <a style="color:#EE6363">Please pay
          attention
          to</a> this!

        <!-- By comparing the two <a style="color:#FFD700">results</a>, we find an <a style="color:#FFD700">interesting phenomenon</a> that when using nested queries, the results of the inner layer queries
        will
        <a style="color:#5CACEE">affect</a> the <a style="color:#5CACEE">outer</a> layer
        results. In addition, <i style="color:#EE6363">any</i>, <i style="color:#EE6363">all</i>,
        <i style="color:#EE6363">in</i> and other operations are usually used <a style="color:#FFD700">together</a> in <a style="color:#CFCFCF">multiple value</a> nested queries -->
        <!-- Now, <a style="color:#EE6363">please</a> think about <a style="color:#9370DB">when</a> the <i>IN subquery</i> <a style="color:#EE6363">cannot</a> replace the <i>OR expression</i> in the
        <i>WHERE</i> clause of the <a style="color:#CFCFCF">SQL</a> <a style="color:#FFD700">statement</a><a style="color:#EE6363">?</a> -->
      </p>
    </div>
    <div class="detailMain">
      <XYaw></XYaw>
    </div>
    <div class="click">
      <Click></Click>
    </div>
    <div class="detailMain1">
      <YPitch></YPitch>
    </div>
  </div>

</template>

<script>
import * as d3 from 'd3'
import $ from 'jquery'
import { HeadData, faceProbability } from './headdata'
import YPitch from '@/components/DetailView/YPitch'
import XYaw from '@/components/DetailView/XYaw'
import Click from '@/components/DetailView/click'
import Teacher from '@/components/DetailView/teacher'
import Emitter from '../../utils/emitter'

export default {
  components: { YPitch, XYaw, Click, Teacher },
  name: 'TSDetail',
  data() {
    return {
      line_x: [],
      line_y: [],
      IsText: ''
    }
  },
  methods: {
    initPic() {
      const width1 = $('.Text').width()
      const height1 = $('.Text').height()
      const width = width1 * 0.96
      const height = height1 * 0.96
      var margin = { top: 20, right: 20, bottom: 20, left: 20 }
      var svg = d3.select('.Text')

      svg = svg
        .append('svg')
        .attr('width', width1)
        .attr('height', height1)

      svg = svg
        .append('g')
        .attr('class', 'TSText')
        .style('width', width)
        .style('height', height)
      //纵坐标轴
      svg
        .append('rect')
        .attr('transform', 'translate(' + 0 + ',' + height * 0.12 + ')')
        .attr('fill', '#FFDEAD')
        .attr('x', function() {
          return -8
        })
        .attr('y', function() {
          return -20
        })
        .attr('height', function(d) {
          return -height
        })
        .attr('width', width * 0.025)
    }
  },
  created() {},
  mounted() {
    Emitter.on('getLink', data => {
      this.IsText = data
    })
    this.initPic()
  }
}
</script>
<style scoped>
.Box {
  width: 98%;
  height: 95%;
  /* margin: 1%; */
  margin-left: 1%;
  margin-right: 1%;
  display: flex;
  flex-direction: column;
}
.teacher {
  width: 98%;
  height: 20%;
}
.Text {
  width: 98%;
  height: 15%;
  padding-right: 2%;
  padding-left: 2%;
}
.detailMain {
  width: 98%;
  height: 25%;
  /* margin: 1%; */
}
.click {
  width: 98%;
  height: 15%;
  /* margin: 1%; */
}
.detailMain1 {
  width: 98%;
  height: 25%;
  /* margin: 1%; */
}

.axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}

.axis path {
  display: none;
}

.axis--y-inside line {
  stroke: #fff;
  stroke-opacity: 1;
}

.axis--y-inside .tick:first-of-type line {
  stroke: #000;
}

.axis--y-inside text {
  display: none;
}

.axis--x path {
  display: none;
}

.title {
  font-weight: bold;
}

rect {
  fill: steelblue;
}
</style>