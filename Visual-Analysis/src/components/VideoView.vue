<template>
  <div class="TeBody">
    <div class="panelclass">
      <div class="top">
        <div class="top_left">
          <p style="text-aligin:left">Summary View</p>
        </div>
        <div class="topSelect">
          <div class="select_left">
            <p>Sort Select：</p>
          </div>
          <div class="select_right">
            <template>
              <el-select v-model="value"
                         @change="ChangeType">
                <el-option v-for="item in options"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </template>
          </div>
        </div>
      </div>
      <div class="emomain">
        <div class="middle">
          <!-- <div class="emobox"
             style="width:15%;padding-left:1%">
          <img src="@/assets/emotionicon/anger.svg"
               style="width:100%;float:left; margin-left:10%" />
        </div> -->
          <div class="cir"
               style="width:10%;height:100%;margin-left:3%">
            <div class="cirtop">
              <svg style="width:100%">
                <circle cx="39"
                        cy="39"
                        r="30"
                        style="fill:none; stroke:	#EE6363; stroke-width:2;" />
              </svg>
              <img src="@/assets/emotionicon/anger.svg"
                   style="width:120px;margin-top: -332%;margin-left: -25%;" />
            </div>
            <div class="cirmiddle">
              <i class="iconfont icon-yuanjiao-rect"
                 style="color:#EE6363;margin-top:2px"></i>
              <i style="font:caption">anger</i>
            </div>
          </div>
          <!-- 2 -->
          <div class="cir"
               style="width:10%;height:100%;margin-left:3%">
            <div class="cirtop">
              <svg style="width:100%">
                <circle cx="39"
                        cy="39"
                        r="30"
                        style="fill:none; stroke:#9370DB; stroke-width:2;" />
              </svg>
              <img src="@/assets/emotionicon/disgusted.svg"
                   style="width:120px;margin-top: -332%;margin-left: -25%;" />
            </div>
            <div class="cirmiddle">
              <i class="iconfont icon-yuanjiao-rect"
                 style="color:#9370DB;margin-top:2px"></i>
              <i style="font:caption">disgust</i>
            </div>
          </div>
          <!-- 3 -->
          <div class="cir"
               style="width:10%;height:100%;margin-left:3%">
            <div class="cirtop">
              <svg style="width:100%">
                <circle cx="39"
                        cy="39"
                        r="30"
                        style="fill:none; stroke:#B4EEB4; stroke-width:2;" />
              </svg>
              <img src="@/assets/emotionicon/fear.svg"
                   style="width:120px;margin-top: -332%;margin-left: -25%;" />
            </div>
            <div class="cirmiddle">
              <i class="iconfont icon-yuanjiao-rect"
                 style="color:#B4EEB4;margin-top:2px"></i>
              <i style="font:caption">fear</i>
            </div>
          </div>
          <!-- 4 -->
          <div class="cir"
               style="width:10%;height:100%;margin-left:3%">
            <div class="cirtop">
              <svg style="width:100%">
                <circle cx="39"
                        cy="39"
                        r="30"
                        style="fill:none; stroke:#FFD700; stroke-width:2;" />
              </svg>
              <img src="@/assets/emotionicon/happy.svg"
                   style="width:120px;margin-top: -332%;margin-left: -25%;" />
            </div>
            <div class="cirmiddle">
              <i class="iconfont icon-yuanjiao-rect"
                 style="color:#FFD700;margin-top:2px"></i>
              <i style="font:caption">happy</i>
            </div>
          </div>
          <!-- 5 -->
          <div class="cir"
               style="width:10%;height:100%;margin-left:3%">
            <div class="cirtop">
              <svg style="width:100%">
                <circle cx="39"
                        cy="39"
                        r="30"
                        style="fill:none; stroke:#CFCFCF; stroke-width:2;" />
              </svg>
              <img src="@/assets/emotionicon/neutral.svg"
                   style="width:120px;margin-top: -332%;margin-left: -25%;" />
            </div>
            <div class="cirmiddle">
              <i class="iconfont icon-yuanjiao-rect"
                 style="color:#CFCFCF;margin-top:2px"></i>
              <i style="font:caption">neutral</i>
            </div>
          </div>
          <!-- 6 -->
          <div class="cir"
               style="width:10%;height:100%;margin-left:3%">
            <div class="cirtop">
              <svg style="width:100%">
                <circle cx="39"
                        cy="39"
                        r="30"
                        style="fill:none; stroke:#66CDAA	; stroke-width:2;" />
              </svg>
              <img src="@/assets/emotionicon/sad.svg"
                   style="width:120px;margin-top: -332%;margin-left: -25%;" />
            </div>
            <div class="cirmiddle">
              <i class="iconfont icon-yuanjiao-rect"
                 style="color:#66CDAA;margin-top:2px"></i>
              <i style="font:caption">sad</i>
            </div>
          </div>
          <!-- 7 -->
          <div class="cir"
               style="width:10%;height:100%;margin-left:3%">
            <div class="cirtop">
              <svg style="width:100%">
                <circle cx="39"
                        cy="39"
                        r="30"
                        style="fill:none; stroke:#5CACEE; stroke-width:2;" />
              </svg>
              <img src="@/assets/emotionicon/surprise.svg"
                   style="width:120px;margin-top: -332%;margin-left: -25%;" />
            </div>
            <div class="cirmiddle">
              <i class="iconfont icon-yuanjiao-rect"
                 style="color:#5CACEE;margin-top:2px"></i>
              <i style="font:caption">surprise</i>
            </div>
          </div>
        </div>
        <div class="clickclass">
          <!-- 1 -->
          <div class="clickevent"
               style="width:12%">
            <i class="iconfont icon-yuan"
               style="color:	#8DEEEE"></i>
            <i style="font:caption">play</i>
          </div>
          <!-- 2 -->
          <div class="clickevent"
               style="width:13%">
            <i class="iconfont icon-yuan"
               style="color:	#EEAD0E"></i>
            <i style="font:caption">pause</i>
          </div>
          <!-- 3 -->
          <div class="clickevent"
               style="width:16%;padding-left:1%">
            <i class="iconfont icon-yuan"
               style="color:	#E6E6FA"></i>
            <i style="font:caption">seek forward</i>
          </div>
          <!-- 4 -->
          <div class="clickevent"
               style="width:15%;padding-left:1%">
            <i class="iconfont icon-yuan"
               style="color:	#FFE4E1"></i>
            <i style="font:caption">seek back</i>
          </div>
          <!-- 1 -->
          <div class="clickevent"
               style="width:15%;padding-left:1%">
            <i class="iconfont icon-yuan"
               style="color:	#ADD8E6"></i>
            <i style="font:caption">ratechange</i>
          </div>
          <!-- 1 -->
          <div class="clickevent"
               style="width:18%">
            <i class="iconfont icon-yuan"
               style="color:	#CDB38B"></i>
            <i style="font:caption">volumechange</i>
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="bottom_left bottomSize">
          <p>Video Name</p>
        </div>
        <div class="bottom_middle bottomSize">
          <p>Category</p>
        </div>
        <div class="bottom_right bottomSize">
          <p>Teacher And Student Summary</p>
        </div>
      </div>
    </div>
    <div class="GroupView">
      <div class="videolist"
           v-show="isVideolist">
        <template>
          <el-table ref="singleTable"
                    :data="tableData"
                    :show-header="false"
                    :row-style="{ height: '105px' }"
                    :cell-style="{ 'text-align': 'center', 'padding-right': '0px' }"
                    highlight-current-row
                    @current-change="handleCurrentChange"
                    style="width: 100%; font-size: 15px;text-align: center">
            <el-table-column property="videoname"
                             label="课程"
                             width="130">
            </el-table-column>
            <el-table-column property="category"
                             label="分类"
                             width="115">
            </el-table-column>
          </el-table>
        </template>
      </div>
      <div class="RingPie">
        <svg class="svg"></svg>
      </div>
    </div>
    <div class="IndividualView">
      <ClickRiver></ClickRiver>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { draw } from '../DataJS/Draw'
import { GoTo } from '../DataJS/GoTo'
import ClickRiver from '@/components/VideoView/ClickRiver'
import $ from 'jquery'
import * as d3 from 'd3'
import Emitter from '../utils/emitter'

export default {
  components: {
    ClickRiver
  },
  name: 'VideoView',
  data() {
    return {
      isVideolist: '',
      IsBehavior: '',
      tableData: [
        {
          videoname: 'Point to structure',
          category: 'Fundamentals of computer programming'
        },
        {
          videoname: 'Database query result processing',
          category: 'database query'
        },
        {
          videoname: 'Comprehensive query',
          category: 'database query'
        },
        {
          videoname: 'Nested query of database query',
          category: 'database query'
        },
        {
          videoname: 'Structure type and structure variable',
          category: 'Fundamentals of computer programming'
        }
        // {
        //   videoname: 'Query result processing of database query',
        //   category: 'database query'
        // },
        // {
        //   videoname: 'Sequence structure program distance',
        //   category: 'Fundamentals of computer programming'
        // }
      ],
      currentRow: null,
      options: [
        {
          value: '选项1',
          label: 'percentage of student behavior'
        },
        {
          value: '选项2',
          label: 'emotional diversity'
        },
        {
          value: '选项3',
          label: 'type of video'
        }
      ],
      value: '选项1'
    }
  },
  methods: {
    ChangeType(value) {
      console.log('改变了索引', value)
      this.isVideolist = true
      this.IsBehavior = true

      GoTo()
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row)
    },
    handleCurrentChange(val) {
      this.currentRow = val
      Emitter.emit('getLine', this.IsBehavior) //选中某一个视频后触发
    },
    initEmoIcon() {
      const width = $('.emobox1').width()
      const height = $('.emobox1').height()
      var svg = d3.select('.emobox1')

      svg = svg
        .append('svg')
        .attr('width', width)
        .attr('height', height)

      svg = svg
        .append('g')
        .attr('class', 'Emoicon')
        .style('width', width)

      svg
        .append('svg:circle')
        .classed('wcircle', true)
        .attr('cx', width * 0.5)
        .attr('cy', height * 0.5)
        .attr('r', width / 2) //第一个圆半径
        .style('fill', 'none')
        // .style('fill', '#fff')
        .style('stroke', '#2ca02c')
        // .style('stroke-width', '0.5px');
        .style('stroke-width', '1px')
    }
  },
  created() {},
  mounted() {
    // GoTo()
  }
}
</script>

<style scoped>
.TeBody {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.GroupView {
  height: 52%;
  border: 0.5px #ccc solid;
  margin: 1px;
  display: flex;
  flex-direction: row;
  width: 100%;
}
.panelclass {
  width: 100%;
  height: 25%;
  border: 0.5px #ccc solid;
  margin: 1px;
  display: flex;
  flex-direction: column;
}
.IndividualView {
  width: 100%;
  height: 30%;
  border: 0.5px #ccc solid;
  margin: 1px;
}
.videolist {
  width: 33%;
  height: 99%;
  margin-top: 1%;
}
.RingPie {
  width: 67%;
  height: 99%;
  margin-top: 1%;
}
.svg {
  height: 100%;
  width: 100%;
}
.top {
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  border: 0.8px #ccc solid;
  margin: 0.1%;
  background-color: rgb(240, 240, 240);
}
.top_left {
  width: 34%;
  padding-top: 1%;
  text-align: left;
  padding-left: 3%;
  font-size: xx-large;
  font-weight: bolder;
}
.topSelect {
  width: 70%;
  padding-left: 10%;
  padding-right: 5%;
  padding-top: 1%;
  display: flex;
  flex-direction: row;
}
.select_left {
  width: 40%;
  padding-top: 1%;
  text-align: right;
  font-size: larger;
}
.el-select {
  float: left;
}
.el-select > .el-input {
  font-size: large;
}
.select_right {
  width: 60%;
}
.emomain {
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
}
.middle {
  width: 100%;
  height: 78%;
  display: flex;
  flex-direction: row;
}
.clickclass {
  width: 100%;
  height: 20%;
  margin-left: 3%;
  display: flex;
  flex-direction: row;
}
.emobox1 {
  width: 10%;
  height: 60%;
}
.bottom {
  width: 100%;
  height: 20%;
  border: 0.8px #ccc solid;
  margin: 0.1%;
  display: flex;
  flex-direction: row;
}
.bottom_left {
  width: 18%;
  padding-top: 1.5%;
}
.bottom_middle {
  width: 14%;
  padding-top: 1.5%;
}
.bottom_right {
  width: 70%;
  padding-top: 1.5%;
}
.bottomSize {
  font-weight: bolder;
  font-size: x-large;
}
.el-input {
  font-size: 20px;
}
.cir {
  display: flex;
  flex-direction: column;
}
.cirtop {
  height: 66%;
}
.cirmiddle {
  height: 21%;
  /* width: 114%; */
}
.icon-yuanjiao-rect {
  fill: #007cfd;
}
.el-table__body,
.el-table__footer,
.el-table__header {
  width: 260px;
}
</style>
