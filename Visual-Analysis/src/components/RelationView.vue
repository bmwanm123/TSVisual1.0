<template>
  <div class="remain">
    <div class="Relation">
      <div class="Title">
        <p style="text-aligin:left">Correlation View</p>
      </div>
      <div class="svgContainer">
        <div class="left_tree"
             id="treemap"></div>
        <div class="middle_sankey">
          <!-- <sankeyWord></sankeyWord> -->
          <SankeyWordCluster></SankeyWordCluster>
        </div>
        <div class="right_cluster">
          <StudentCluster></StudentCluster>
        </div>
      </div>
    </div>
    <div class="Detail">
      <div class="Sentence">
        <p style="text-aligin:left">Detail View</p>
      </div>
      <div class="IdvidualDetail">
        <TSDetail></TSDetail>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import * as d3 from 'd3'
import * as d3Sankey from 'd3-sankey'
import sankeyWord from '@/components/relationView/sankeyWord'
import StudentCluster from '@/components/relationView/StudentCluster'
import SankeyWordCluster from '@/components/relationView/SankeyWordCluster'
import TStudent from '@/components/SentenceView/TStudent'
import TSDetail from '@/components/DetailView/TSDetail'
import SentenceCluster from '@/components/ClusterWordView/SentenceCluster'
import SentenceCluster1 from '@/components/ClusterWordView/SentenceCluster1'
// import San from '@/components/js/sankey.js';
import { picSrc } from './relationView/Pic'
import Emitter from '../utils/emitter'

export default {
  components: {
    sankeyWord,
    SankeyWordCluster,
    StudentCluster,
    SentenceCluster,
    SentenceCluster1,
    TStudent,
    TSDetail
  },
  name: 'RelationView',
  data() {
    return {
      msg: 'Hello World FlaskVue!',
      TeacherFaceData: ''
    }
  },
  methods: {
    treemap() {
      const width = $('.left_tree').width()
      const height = $('.left_tree').height()
      const treeData = {
        name: 'Teacher_C',
        children: [
          {
            name: 'neutral',
            children: [
              { name: 'time1', gdp: 19 },
              { name: 'time2', gdp: 22 },
              { name: 'time3', gdp: 25 },
              { name: 'time4', gdp: 18 },
              { name: 'time5', gdp: 22 },
              { name: 'time6', gdp: 26 },
              { name: 'time7', gdp: 20 },
              { name: 'time8', gdp: 12 },
              { name: 'time9', gdp: 29 },
              { name: 'time10', gdp: 20 },
              { name: 'time11', gdp: 12 },
              { name: 'time12', gdp: 18 }
            ]
            // children: [
            //   { name: 'time1', gdp: 41 },
            //   { name: 'time2', gdp: 43 },
            //   { name: 'time3', gdp: 48 },
            //   { name: 'time4', gdp: 32 },
            //   { name: 'time5', gdp: 49 },
            //   { name: 'time6', gdp: 30 }
            // ]
          },
          {
            name: 'happiness',
            children: [
              { name: 'time1', gdp: 15 },
              { name: 'time2', gdp: 2 },
              { name: 'time3', gdp: 3 },
              { name: 'time4', gdp: 7 },
              { name: 'time6', gdp: 3 },
              { name: 'time7', gdp: 6 },
              { name: 'time8', gdp: 3 },
              { name: 'time9', gdp: 1 },
              { name: 'time10', gdp: 1 },
              { name: 'time11', gdp: 9 },
              { name: 'time12', gdp: 43 }
            ]
            // children: [
            //   { name: 'time1', gdp: 17 },
            //   { name: 'time2', gdp: 10 },
            //   { name: 'time3', gdp: 3 },
            //   { name: 'time4', gdp: 9 },
            //   { name: 'time5', gdp: 2 },
            //   { name: 'time6', gdp: 52 }
            // ]
          },
          // {
          //   name: 'disgust',
          //   children: [
          //     { name: 'time1', gdp: 3 },
          //     { name: 'time2', gdp: 6 },
          //     { name: 'time3', gdp: 3 },
          //     { name: 'time4', gdp: 5 },
          //     { name: 'time5', gdp: 4 },
          //     { name: 'time6', gdp: 4 },
          //     { name: 'time7', gdp: 5 },
          //     { name: 'time8', gdp: 5 },
          //     { name: 'time10', gdp: 6 }
          //   ]
          // },
          {
            name: 'surprise',
            children: [
              { name: 'time1', gdp: 1 },
              { name: 'time2', gdp: 6 },
              { name: 'time3', gdp: 7 },
              { name: 'time4', gdp: 6 },
              { name: 'time5', gdp: 13 },
              { name: 'time6', gdp: 6 },
              { name: 'time7', gdp: 6 },
              { name: 'time8', gdp: 18 },
              { name: 'time9', gdp: 9 },
              { name: 'time10', gdp: 10 },
              { name: 'time11', gdp: 19 },
              { name: 'time12', gdp: 6 }
            ]
            // children: [
            //   { name: 'time1', gdp: 7 },
            //   { name: 'time2', gdp: 13 },
            //   { name: 'time3', gdp: 19 },
            //   { name: 'time4', gdp: 24 },
            //   { name: 'time5', gdp: 19 },
            //   { name: 'time6', gdp: 25 }
            // ]
          }
          // {
          //   name: 'anger',
          //   children: [
          //     // { name: 'time1', gdp: 2 },
          //     // { name: 'time3', gdp: 2 },
          //     // { name: 'time4', gdp: 4 },
          //     // { name: 'time5', gdp: 1 },
          //     // { name: 'time6', gdp: 1 },
          //     // { name: 'time7', gdp: 1 },
          //     // { name: 'time8', gdp: 2 },
          //     // { name: 'time10', gdp: 2 }
          //     { name: 'time1', gdp: 2 },
          //     { name: 'time2', gdp: 8 },
          //     { name: 'time3', gdp: 15 },
          //     { name: 'time4', gdp: 17 },
          //     { name: 'time6', gdp: 5 },
          //     { name: 'time7', gdp: 26 },
          //     { name: 'time8', gdp: 9 },
          //     { name: 'time9', gdp: 10 },
          //     // { name: 'time10', gdp: 1 },
          //     // { name: 'time11', gdp: 9 },
          //     // { name: 'time12', gdp: 43 }
          //   ]
          // }
          // {
          //   name: 'sadness',
          //   children: [
          //     { name: 'time2', gdp: 4 },
          //     { name: 'time7', gdp: 2 },
          //     { name: 'time9', gdp: 1 },
          //     { name: 'time10', gdp: 1 }
          //   ]
          // }
        ]
      }
      const color = d3.scaleOrdinal(d3.schemeCategory10)
      // 数据转化
      const treemap = d3.treemap().size([width, height])
      const root = d3.hierarchy(treeData).sum(d => d.gdp)
      const tree = treemap(root) // 获取treemap结构树
      const leaves = tree.leaves() // 将生成的树形结构转化成叶子节点数组
      console.log('shuju', leaves)
      var rectPadding = 4
      var colormap = ['#CFCFCF', '#FFD700', '#EE6363', '#ADD8E6']
      // 用叶子节点数组绘图
      var svg = d3.select('#treemap')

      svg = svg
        .append('svg')
        .attr('class', 'relationcontent')
        .attr('width', width)
        .attr('height', height)

      var gTree = svg
        .append('g')
        .attr('class', 'gTreeMap')
        .attr('width', width)
        .attr('height', height)
      // .attr('transform', `translate(${-width*0.35}, 0)`)
      var gSankey = svg
        .append('g')
        .attr('class', 'gSankeyWord')
        .attr('width', width * 2)
        .attr('height', height)

      // 树图
      var map = gTree
        .selectAll('rects')
        .data(leaves)
        .enter()
        .append('g')
        .attr('class', 'rects')

      var pic = gTree
        .selectAll('image')
        .data(leaves)
        .enter()
        .append('g')
        .attr('class', 'images')
      pic
        .append('svg:image')
        .attr('xlink:href', function(d, i) {
          console.log(d, i)
          return picSrc[i].src
        })
        // .attr(
        //   'xlink:href',
        //   'https://video-lecture.oss-cn-beijing.aliyuncs.com/teacherPic/1.png'
        //   // 'https://video-lecture.oss-cn-beijing.aliyuncs.com/teacherPic/45.png_no_bg.png'
        // )

        .attr('x', d => d.x0)

        .attr('y', d => d.y0)

        .attr('height', d => d.y1 - d.y0 - 2 * rectPadding)

        .attr('width', d => d.x1 - d.x0 - 2 * rectPadding)
        .attr('dy', 10)
        .attr('class', 'keyframe')
        .on('mouseover', (e, d) => {
          e.target.style.cursor = 'hand'
          svg.selectAll('.keyframe').attr('opacity', 0.1)
          d3.select(e.currentTarget)
            .attr('opacity', 1)
            .attr('width', 120)
            .attr('height', 150)
        })
        .on('mouseleave', e => {
          svg
            .selectAll('.keyframe')
            .attr('opacity', 1)
            .attr('width', d => d.x1 - d.x0 - 2 * rectPadding)
            .attr('height', d => d.y1 - d.y0 - 2 * rectPadding)
        })
      map
        .append('rect')
        .attr('x', d => d.x0)
        .attr('y', d => d.y0)
        .attr('width', d => d.x1 - d.x0 - rectPadding)
        .attr('height', d => d.y1 - d.y0 - rectPadding)
        .attr('fill', function(d, i) {
          if (d.parent.data.name == 'neutral') {
            return colormap[0]
          }
          if (d.parent.data.name == 'happiness') {
            return colormap[1]
          }
          if (d.parent.data.name == 'surprise') {
            return colormap[2]
          }
        })
      // .style('fill', d => color(d.parent.data.name))

      //桑基图

      // var San = gSankey
      //   .selectAll('rects')
      //   .data(leaves)
      //   .enter()
      //   .append('g')
      //   .attr('class', 'rects')
      //   .attr('transform', function(d) {
      //     return 'translate(' + 300 + ',' + d.y + ')' //返回圆心坐标
      //   })

      // San.append('rect')
      //   .attr('x', d => d.x0)
      //   .attr('y', d => d.y0)
      //   .attr('width', d => d.x1 - d.x0 - rectPadding)
      //   .attr('height', d => d.y1 - d.y0 - rectPadding)
      //   .style('fill', d => color(d.parent.data.name))

      // const svg = d3
      //   .select('#treemap')
      //   .append('svg')
      //   .attr('width', width)
      //   .attr('height', height)
      // const g = svg
      //   .selectAll('.rects')
      //   .data(leaves)
      //   .enter()
      //   .append('g')
      //   .attr('class', 'rects')
      // // 添加矩阵
      // g.append('rect')
      //   .attr('x', d => d.x0)
      //   .attr('y', d => d.y0)
      //   .attr('width', d => d.x1 - d.x0 - rectPadding)
      //   .attr('height', d => d.y1 - d.y0 - rectPadding)
      //   .style('fill', d => color(d.parent.data.name))
      // // .attr('fill', 'none')
      // // .style('stroke', '#cccccc')

      // //添加图片

      // g.append('svg:image')
      //   .attr('xlink:href', '../assets/image/2.svg')

      //   .attr('x', d => d.x0)

      //   .attr('y', d => d.y0)

      //   .attr('height', d => d.y1 - d.y0 - 2 * rectPadding)

      //   .attr('width', d => d.x1 - d.x0 - 2 * rectPadding)
      // //添加描述
      // g.append('text')
      //   .attr('x', d => (d.x1 - d.x0) / 2 + d.x0)
      //   .attr('y', d => (d.y1 - d.y0) / 2 + d.y0)
      //   .attr('dx', d => {
      //     return -d.data.name.length / 2 + 'em'
      //   })
      //   .attr('dy', d => {
      //     return '-0.5em'
      //   })
      //   .text(d => {
      //     return d.data.name
      //   })
      //   .attr('font-size', d => {
      //     return 14 - d.depth + 'px'
      //   })
      //   .attr('fill', '#f0f0f0')
      // g.append('text')
      //   .attr('x', d => (d.x1 - d.x0) / 2 + d.x0)
      //   .attr('y', d => (d.y1 - d.y0) / 2 + d.y0)
      //   .attr('dx', d => {
      //     return -(d.value.toString().length + 2) / 4 + 'em'
      //   })
      //   .attr('dy', d => {
      //     return '1em'
      //   })
      //   .text(d => {
      //     return '(' + d.value + ')'
      //   })
      //   .attr('font-size', d => {
      //     return 14 - d.depth + 'px'
      //   })
      //   .attr('fill', '#ffffff')
    },
    sankeyMap() {},

    // 获取后台教师面部表情数据
    getTeacherFace() {
      const path = `http://localhost:3000/TeacherFace`
      axios
        .get(path)
        .then(res => {
          console.log('flask', res, res.data)
          this.TeacherFaceData = res.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created() {},
  mounted() {
    Emitter.on('getLine', data => {
      this.IsLearning = data
      this.treemap() //树图调用
    })
    // this.treemap()
    // this.getTeacherFace()
    // this.sankeyMap()
  }
}
</script>

<style scoped>
.remain {
  /* display: flex;
  flex-direction: column; */
  width: 100%;
  height: 100%;
}
.Relation {
  height: 45%;
  border: 0.5px #ccc solid;
  margin: 1px;
  display: flex;
  flex-direction: column;
}
.Title {
  width: 100%;
  height: 8%;
  border: 0.8px #ccc solid;
  margin: 0.1%;
  background-color: rgb(240, 240, 240);
  text-align: left;
  padding-left: 3%;
  font-weight: bolder;
  font-size: x-large;
  padding-top: 0.2%;
}
.Detail {
  height: 55%;
  border: 0.5px #ccc solid;
  margin: 1px;
  display: flex;
  flex-direction: column;
}
.Sentence {
  width: 100%;
  height: 6.5%;
  border: 0.8px #ccc solid;
  background-color: rgb(240, 240, 240);
  text-align: left;
  padding-left: 3%;
  font-weight: bolder;
  font-size: x-large;
}
.IdvidualDetail {
  width: 100%;
  height: 93.5%;
  border: 0.5px #ccc solid;
  margin: 1px;
}
.svgContainer {
  width: 100%;
  height: 92%;
  display: flex;
  flex-direction: row;
  margin-left: 0.5%;
}
.left_tree {
  width: 20%;
  height: 98%;
}
.middle_sankey {
  width: 37%;
  height: 95%;
  margin-top: 1%;
  margin-left: 2%;
}
.right_cluster {
  width: 43%;
  height: 96%;
  margin-right: 2%;
}
</style>
