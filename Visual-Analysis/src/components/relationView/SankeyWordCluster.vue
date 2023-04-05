<template>
  <div class="relationMain">
    <div class="relationbox"></div>
  </div>
</template>

<script>
import axios from 'axios'
import * as d3 from 'd3'
import $ from 'jquery'
// import {sankey as Sankey} from '@/lib/d3-sankey.js'
import { sankey, sankeyLinkHorizontal } from 'd3-sankey'
// import { happyTexts } from "./worData";
import Emitter from '../../utils/emitter'

export default {
  components: {},
  name: 'SankeyWordCluster',
  data() {
    return {
      IsDetail: ''
    }
  },
  methods: {
    SankeyWord() {
      const width = $('.relationMain').width()
      const height = $('.relationMain').height()
      var svg = d3.select('.relationbox')

      svg = svg
        .append('svg')
        .attr('width', width)
        .attr('height', height)

      svg = svg
        .append('g')
        .attr('class', 'SankeyContent')
        .style('width', width)
        .style('height', height)
      console.log('sankey: ', sankey)
      console.log('sankey(): ', sankey())

      var data = {
        nodes: [
          { id: 'a' },
          { id: 'b' },
          { id: 'c' },
          { id: 'd' },
          { id: 'e' },
          { id: 'f' },
          { id: 'g' },
          { id: 'h' },
          { id: 'i' },
          { id: 'j' },
          { id: 'k' },
          { id: 'l' },
          { id: 'm' }
        ],
        links: [
          { source: 'a', target: 'd', value: 2 },
          { source: 'a', target: 'e', value: 2 },
          { source: 'b', target: 'd', value: 2 },
          { source: 'b', target: 'e', value: 2 },
          { source: 'b', target: 'd', value: 1 },
          { source: 'c', target: 'i', value: 1 },
          { source: 'b', target: 'e', value: 2 },
          { source: 'c', target: 'e', value: 1 },
          { source: 'b', target: 'i', value: 4 },
          { source: 'b', target: 'i', value: 2 },
          { source: 'b', target: 'i', value: 1 },
          { source: 'i', target: 'h', value: 2 },
          { source: 'i', target: 'g', value: 2 },
          { source: 'i', target: 'f', value: 4 },
          { source: 'i', target: 'f', value: 1 },
          { source: 'd', target: 'f', value: 2 },
          { source: 'd', target: 'g', value: 1 },
          { source: 'd', target: 'f', value: 1 },
          { source: 'd', target: 'h', value: 2 },
          { source: 'd', target: 'k', value: 2 },
          { source: 'e', target: 'g', value: 2 },
          { source: 'e', target: 'f', value: 2 },
          { source: 'e', target: 'g', value: 2 },
          { source: 'e', target: 'h', value: 2 },
          { source: 'b', target: 'j', value: 2 },
          { source: 'b', target: 'j', value: 1 },
          { source: 'j', target: 'k', value: 2 },
          { source: 'j', target: 'f', value: 2 },
          { source: 'l', target: 'h', value: 2 },
          { source: 'l', target: 'k', value: 2 },
          { source: 'c', target: 'j', value: 2 },
          { source: 'c', target: 'l', value: 2 },
          { source: 'i', target: 'm', value: 1 },
          { source: 'a', target: 'i', value: 2 },
          { source: 'i', target: 'k', value: 1 },
          { source: 'e', target: 'm', value: 1 },
          { source: 'j', target: 'm', value: 1 },
          { source: 'j', target: 'h', value: 3 },
          { source: 'a', target: 'l', value: 1 },
          { source: 'b', target: 'l', value: 1 }
        ]
      }

      // var data = {
      //   nodes: [
      //     { id: 'a' },
      //     { id: 'b' },
      //     { id: 'c' },
      //     { id: 'd' },
      //     { id: 'e' },
      //     { id: 'f' },
      //     { id: 'g' },
      //     { id: 'h' },
      //     { id: 'i' },
      //     { id: 'j' },
      //     { id: 'k' },
      //     { id: 'l' }
      //   ],
      //   links: [
      //     { source: 'a', target: 'd', value: 10 },
      //     { source: 'a', target: 'e', value: 2 },
      //     { source: 'a', target: 'f', value: 2 },
      //     { source: 'a', target: 'g', value: 2 },
      //     { source: 'a', target: 'h', value: 2 },
      //     { source: 'b', target: 'd', value: 8 },
      //     { source: 'b', target: 'e', value: 6 },
      //     { source: 'b', target: 'f', value: 8 },
      //     { source: 'b', target: 'h', value: 6 },
      //     { source: 'c', target: 'e', value: 5 },
      //     { source: 'b', target: 'e', value: 2 },
      //     { source: 'c', target: 'h', value: 5 },
      //     { source: 'b', target: 'f', value: 2 },
      //     { source: 'e', target: 'i', value: 4 },
      //     { source: 'd', target: 'j', value: 3 },
      //     { source: 'd', target: 'k', value: 4 },
      //     { source: 'd', target: 'l', value: 5 },
      //     { source: 'e', target: 'j', value: 7 },
      //     { source: 'e', target: 'l', value: 3 },
      //     { source: 'e', target: 'j', value: 5 }
      //   ]
      // }
      console.log(data.nodes)
      var Sankey = sankey()
        .nodeWidth(20)
        .nodePadding(30)
        .size([width, height])
        .nodeId(d => d.id)

      var { nodes, links } = Sankey({
        nodes: data.nodes,
        links: data.links
      })

      //起始坐标

      var node_x1 = nodes[3].x0,
        node_y1 = nodes[3].y0
      var node_x2 = nodes[4].x0,
        node_y2 = nodes[4].y0
      var node_x3 = nodes[8].x0,
        node_y3 = nodes[8].y0
      var node_x4 = nodes[9].x0,
        node_y4 = nodes[9].y0
      var node_x5 = nodes[11].x0,
        node_y5 = nodes[11].y0

      // const {nodes, links} = Sankey.nodes(data.nodes).links(data.links);
      for (var i = 0; i < 22; i++) {
        var tag = links[i].source
        if (links[i].source.id == 'i') {
          // links[i].source.y0 = links[i].source.y0 * 0.8
          // links[i].source.y1 = links[i].source.y1 * 0.8
        }
      }
      console.log('数据', nodes, links)
      for (var i = 0; i < 13; i++) {
        if (i == 3 || i == 4) {
          nodes[i].x0 = nodes[i].x0 - nodes[i].x0 / 1.7 + 20
          nodes[i].x1 = nodes[i].x1 + nodes[i].x0 / 1.7 + 40
          // nodes[i].y0 = nodes[i].y0 + nodes[i].y1 / 4
          // nodes[i].y1 = nodes[i].y1 - nodes[i].y1 / 4
        }
        if (i == 8) {
          nodes[i].x0 = nodes[3].x0
          nodes[i].x1 = nodes[3].x1
          nodes[i].y0 = nodes[4].y1 + 20
        }
        if (i == 9) {
          nodes[i].x0 = nodes[3].x0
          nodes[i].x1 = nodes[3].x1
          nodes[i].y0 = nodes[8].y1 + 20
        }
        // if (i == 10) {
        //   nodes[i].x0 = nodes[3].x0
        //   nodes[i].x1 = nodes[3].x1
        //   nodes[i].y0 = nodes[9].y1 + 20
        // }
        if (i == 11) {
          nodes[i].x0 = nodes[3].x0
          nodes[i].x1 = nodes[3].x1
          nodes[i].y0 = nodes[9].y1 + 20
        }
        // if (i == 10) {
        //   nodes[i].x0 = nodes[3].x0
        //   nodes[i].x1 = nodes[3].x1
        //   nodes[i].y0 = nodes[9].y1 + 20
        // }
      }

      /* ----------------------------渲染节点------------------------  */
      // var nodecolors = [
      //   "#FFD700",
      //   "#A9A9A9",
      //   "#DC143C",
      //   // '#0B1746',
      //   "#1E90FF",
      //   "#FFD700",
      //   "#A9A9A9",
      //   "#FFD700",
      //   "#9400D3",
      //   "#A9A9A9",
      //   "#DC143C",
      //   "#1E90FF",
      //   "#1E90FF",
      //   "#0B1746"
      // ];
      var nodecolors = [
        '#FFD700',
        '#CFCFCF',
        '#EE6363',
        // '#0B1746',
        '#5CACEE',
        '#FFD700',
        '#CFCFCF',
        '#FFD700',
        '#9370DB',
        '#CFCFCF',
        '#EE6363',
        '#5CACEE',
        '#9370DB',
        '#66CDAA'
      ]
      var rects = svg
        .append('g')
        .attr('class', 'rects')
        .selectAll('node')
        .data(nodes)
      rects
        .enter()
        .append('g')
        .attr('class', 'node')
        .attr('index', d => d.id)
        .attr('linkNodes', d => {
          const nextNodes = d.sourceLinks.map(link => link.target.id).join('')
          const prevNodes = d.targetLinks.map(link => link.source.id).join('')
          return nextNodes + d.id + prevNodes
        })
        .append('rect')
        .merge(rects)
        .attr('x', function(d, i) {
          return d.x0
        })
        .attr('y', function(d, i) {
          return d.y0
        })
        .attr('width', function(d, i) {
          return d.x1 - d.x0
        })
        .attr('height', function(d, i) {
          return d.y1 - d.y0
        })
        .attr('fill', function(d, i) {
          return nodecolors[i]
        })

      //添加词云

      {
        //sad
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x1)
          .attr('y', node_y1 + 35)
          .text('Array')
          .attr('font-size', 24)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x1 - 35)
          .attr('y', node_y1 + 18)
          .text('So')
          .attr('font-size', 18)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x1 - 80)
          .attr('y', node_y1 + 46)
          .text('same')
          .attr('font-size', 16)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x1 - 30)
          .attr('y', node_y1 + 60)
          .text('first')
          .attr('font-size', 14)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x1 + 45)
          .attr('y', node_y1 + 18)
          .text('That')
          .attr('font-size', 12)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x1 + 70)
          .attr('y', node_y1 + 30)
          .text('problem')
          .attr('font-size', 16)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x1 - 110)
          .attr('y', node_y1 + 10)
          .text('everyone')
          .attr('font-size', 8)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x1 - 100)
          .attr('y', node_y1 + 28)
          .text('adopt')
          .attr('font-size', 13)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x1 + 80)
          .attr('y', node_y1 + 58)
          .text('form')
          .attr('font-size', 18)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x1 + 75)
          .attr('y', node_y1 + 40)
          .text('said')
          .attr('font-size', 7)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x1 - 105)
          .attr('y', node_y1 + 60)
          .text('direct')
          .attr('font-size', 14)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x1 - 115)
          .attr('y', node_y1 + 40)
          .text('below')
          .attr('font-size', 9)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x1 + 87)
          .attr('y', node_y1 + 12)
          .text('analysis')
          .attr('font-size', 11)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x1)
          .attr('y', node_y1 + 10)
          .text('modify')
          .attr('font-size', 7)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x1)
          .attr('y', node_y1 + 47)
          .text('influence')
          .attr('font-size', 7)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x1 - 55)
          .attr('y', node_y1 + 30)
          .text('sentence')
          .attr('font-size', 12)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x1)
          .attr('y', node_y1 + 60)
          .text('relationship')
          .attr('font-size', 12)

        // happy
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x2 - 60)
          .attr('y', node_y2 + 25)
          .text('Hello')
          .attr('font-size', 14)

        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x2 - 80)
          .attr('y', node_y2 + 40)
          .text('and')
          .attr('font-size', 18)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x2 + 5)
          .attr('y', node_y2 + 15)
          .text('Like')
          .attr('font-size', 17)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x2 - 15)
          .attr('y', node_y2 + 38)
          .text('example')
          .attr('font-size', 22)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x2 + 40)
          .attr('y', node_y2 + 20)
          .text('as')
          .attr('font-size', 16)

        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x2 - 100)
          .attr('y', node_y2 + 35)
          .text('we')
          .attr('font-size', 7)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x2 - 40)
          .attr('y', node_y2 + 55)
          .text('Object')
          .attr('font-size', 17)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x2 + 40)
          .attr('y', node_y2 + 60)
          .text('figure')
          .attr('font-size', 18)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x2 + 80)
          .attr('y', node_y2 + 29)
          .text('course')
          .attr('font-size', 14)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x2 - 110)
          .attr('y', node_y2 + 60)
          .text('Result')
          .attr('font-size', 17)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x2 - 120)
          .attr('y', node_y2 + 20)
          .text('member')
          .attr('font-size', 15)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x2 - 60)
          .attr('y', node_y2 + 10)
          .text('OK')
          .attr('font-size', 10)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x2 - 40)
          .attr('y', node_y2 + 8)
          .text('share')
          .attr('font-size', 6)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x2 - 20)
          .attr('y', node_y2 + 15)
          .text('add')
          .attr('font-size', 10)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x2 + 100)
          .attr('y', node_y2 + 65)
          .text('get')
          .attr('font-size', 12)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x2 + 88)
          .attr('y', node_y2 + 50)
          .text('again')
          .attr('font-size', 11)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x2 + 65)
          .attr('y', node_y2 + 15)
          .text('output')
          .attr('font-size', 14)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x2 - 65)
          .attr('y', node_y2 + 70)
          .text('Thank')
          .attr('font-size', 8)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x2 - 20)
          .attr('y', node_y2 + 70)
          .text('transmit')
          .attr('font-size', 13)

        // neutral
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x3 - 85)
          .attr('y', node_y3 + 10)
          .text('variable')
          .attr('font-size', 21)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x3 - 25)
          .attr('y', node_y3 + 38)
          .text('point')
          .attr('font-size', 26)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x3 - 80)
          .attr('y', node_y3 + 55)
          .text('address')
          .attr('font-size', 17)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x3 - 5)
          .attr('y', node_y3 + 7)
          .text('time')
          .attr('font-size', 16)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x3 + 32)
          .attr('y', node_y3 + 17)
          .text('parameter')
          .attr('font-size', 22)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x3 - 85)
          .attr('y', node_y3 + 35)
          .text('this')
          .attr('font-size', 8)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x3 - 120)
          .attr('y', node_y3 + 25)
          .text('use')
          .attr('font-size', 18)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x3 - 65)
          .attr('y', node_y3 + 32)
          .text('value')
          .attr('font-size', 15)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x3 + 45)
          .attr('y', node_y3 + 38)
          .text('Then')
          .attr('font-size', 13)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x3 + 85)
          .attr('y', node_y3 + 30)
          .text('first')
          .attr('font-size', 11)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x3 + 25)
          .attr('y', node_y3 + 68)
          .text('visit')
          .attr('font-size', 23)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x3 + 85)
          .attr('y', node_y3 + 55)
          .text('define')
          .attr('font-size', 16)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x3 - 110)
          .attr('y', node_y3 + 75)
          .text('typeof')
          .attr('font-size', 19)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x3 - 50)
          .attr('y', node_y3 + 80)
          .text('system')
          .attr('font-size', 7)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x3 - 5)
          .attr('y', node_y3 + 80)
          .text('function')
          .attr('font-size', 12)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x3 - 35)
          .attr('y', node_y3 + 65)
          .text('operator')
          .attr('font-size', 10)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x3 + 78)
          .attr('y', node_y3 + 75)
          .text('program')
          .attr('font-size', 11)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x3 - 125)
          .attr('y', node_y3 + 52)
          .text('already')
          .attr('font-size', 12)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x3)
          .attr('y', node_y3 + 52)
          .text('still')
          .attr('font-size', 10)

        //anger
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x4)
          .attr('y', node_y4 + 25)
          .text('not')
          .attr('font-size', 22)

        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x4 + 40)
          .attr('y', node_y4 + 22)
          .text('How')
          .attr('font-size', 15)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x4 - 35)
          .attr('y', node_y4 + 16)
          .text('error')
          .attr('font-size', 14)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x4 - 30)
          .attr('y', node_y4 + 28)
          .text("n't")
          .attr('font-size', 10)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x4 - 70)
          .attr('y', node_y4 + 22)
          .text('Please')
          .attr('font-size', 9)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x4 + 40)
          .attr('y', node_y4 + 35)
          .text('but')
          .attr('font-size', 13)

        //disgust
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x5 + 30)
          .attr('y', node_y5 + 15)
          .text('not')
          .attr('font-size', 13)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x5 - 27)
          .attr('y', node_y5 + 12)
          .text('What')
          .attr('font-size', 14)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x5 + 10)
          .attr('y', node_y5 + 20)
          .text('Is')
          .attr('font-size', 18)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x5 - 40)
          .attr('y', node_y5 + 28)
          .text('happen')
          .attr('font-size', 11)
        svg
          .append('g')
          .append('text')
          .classed('wordCloud', true)
          .attr('x', node_x5 + 35)
          .attr('y', node_y5 + 30)
          .text('problem')
          .attr('font-size', 8)
      }

      //添加词云结束

      // .attr('x', d => d.x0)
      // .attr('y', d => d.y0)
      // .attr('width', d => d.x1 - d.x0)
      // .attr('height', d => d.y1 - d.y0)
      // .attr('fill', d => d3.scaleOrdinal(d3.schemeCategory10)(d.index % 10))

      // const pics = svg
      //   .append('g')
      //   .attr('class', 'pics')
      //   .selectAll('.node')
      //   .data(nodes)
      //   .enter()
      // pics
      //   .append('g')
      //   .attr('class', 'pic')
      //   .attr('index', d => d.id)
      //   .append('svg:image')
      //   .attr('xlink:href', function(d) {
      //     if (d.id == 'd' || d.id == 'e') {
      //       return 'https://video-lecture.oss-cn-beijing.aliyuncs.com/teacherPic/%E8%AF%8D%E4%BA%91.jpg'
      //     }
      //   })
      //   .attr('x', d => d.x0)
      //   .attr('y', d => d.y0)
      //   // .attr("width", function(d) {
      //   //   if (d.id == "d" || d.id == "e") {
      //   //     return 3 * (d.x1 - d.x0);
      //   //     // return (d.x1 - d.x0);
      //   //   } else {
      //   //     return d.x1 - d.x0;
      //   //   }
      //   // })
      //   .attr('width', d => d.x1 - d.x0)
      //   .attr('height', d => d.y1 - d.y0)

      /* ----------------------------渲染连线------------------------  */
      var lines = svg
        .append('g')
        .attr('class', 'lines')
        .selectAll('path')
        .data(links)

      lines
        .enter()
        .append('path')
        .merge(lines)
        .attr('linkNodes', d => d.source.id + '-' + d.target.id)
        .attr('d', sankeyLinkHorizontal())
        .attr('stroke', '#A9A9A9')
        // .attr('stroke', d =>
        //   d3.scaleOrdinal(d3.schemeCategory10)(d.source.index % 10)
        // )
        // .attr('stroke-width', d => d.width)
        // .attr('stroke-opacity', '0.4')
        .attr('stroke-width', d => d.width)
        .attr('stroke-opacity', function(d, i) {
          if (i == 30 || i == 37) {
            return 2.5
          } else {
            return 0.4
          }
        })
        .attr('fill', 'none')
        .attr('class', 'sankeyPath')
        .on('mouseover', (e, d) => {
          e.target.style.cursor = 'hand'
          svg.selectAll('.sankeyPath').attr('opacity', 0.1)
          d3.select(e.currentTarget).attr('opacity', 1)
          // console.log(e.currentTarget, d)
        })
        .on('mouseleave', e => {
          svg.selectAll('.sankeyPath').attr('opacity', 1)
        })
        .on('click', (e, d) => {
          if (d.index == 37) {
            this.IsDetail = true
            Emitter.emit('getLink', this.IsDetail) //选中某一link后触发
          }
          console.log(this.IsDetail)
        })

      /* ----------------------------渲染文本标签------------------------  */
      var nodeName = {
        a: 'teacher_happpy',
        b: 'teacher_neutral',
        c: 'teacher_anger',
        d: 'text_sad',
        e: 'text_happpy',
        i: 'text_neutral',
        j: 'text_anger',
        l: 'text_surprise',
        g: 'student_happy',
        f: 'student_neutral',
        h: 'student_disgust',
        m: 'student_sad',
        k: 'student_surprise'
      }

      svg
        .selectAll('.node')
        .append('text')
        .attr('class', 'text')
        // .attr('x', d => d.x1 + 50)
        .attr('x', function(d) {
          console.log(d)
          if (nodeName[d.id].indexOf('text') != -1) {
            return d.x1 + 41
          }
          if (nodeName[d.id].indexOf('teacher') != -1) {
            return d.x1 + 50
          } else {
            return d.x1 - 52
          }
        })
        .attr('y', function(d) {
          if (nodeName[d.id].indexOf('student') != -1) {
            return d.y0 + 5
          }
          if (nodeName[d.id].indexOf('text') != -1) {
            return d.y1 - 8
          } else {
            return (d.y0 + d.y1) / 2
          }
        })
        // .attr('y', d => (d.y0 + d.y1) / 2)
        // .attr('stroke', config.textColor)
        .attr('text-anchor', 'middle')
        .attr('dy', 6)
        .attr('font-size', 14)
        .text(d => nodeName[d.id])
    }
  },
  created() {},
  mounted() {
    // const oScript = document.createElement('script');
    // oScript.type = 'text/javascript';
    // oScript.src = 'https://unpkg.com/d3-sankey@0';
    // document.body.appendChild(oScript);
    // console.log(document.body)
    Emitter.on('getLine', data => {
      this.IsLearning = data
      this.SankeyWord()
    })

    // this.SankeyWord()
  }
}
</script>

<style scoped>
.relationMain {
  width: 100%;
  height: 95%;
}
.relationbox {
  width: 100%;
  height: 95%;
}
</style>
