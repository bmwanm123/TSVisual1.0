<template>
  <div class="SentenceMain">
    句子聚类
    <div id="lineChart"></div>
  </div>
</template>

<script>
import axios from 'axios'
import * as d3 from 'd3'
import { Circos } from '@/lib/circos.js'
import * as d3Queue from 'd3-queue'
import { GRCh37, cytobands, snp250, snp, snp1m } from './data'

export default {
  components: {},
  name: 'SentenceCluster',
  data() {
    return {
      GRCh37: GRCh37,
      cytobands: cytobands,
      snp250: snp250,
      snp: snp,
      snp1m: snp1m
    }
  },
  methods: {
    initLineChart() {
      d3Queue.queue().await(this.drawCircos)
      // d3Queue.queue().await(this.drawCircos)
    },
    drawCircos() {
      var width = document.getElementsByClassName('SentenceMain')[0].offsetWidth
      var height = document.getElementsByClassName('SentenceMain')[0]
        .offsetHeight
      var circosLine = new Circos({
        container: '#lineChart',
        width: height,
        height: height
      })
      var gieStainColor = {
        gpos100: 'rgb(0,0,0)',
        gpos: 'rgb(0,0,0)',
        gpos75: 'rgb(130,130,130)',
        gpos66: 'rgb(160,160,160)',
        gpos50: 'rgb(200,200,200)',
        gpos33: 'rgb(210,210,210)',
        gpos25: 'rgb(200,200,200)',
        gvar: 'rgb(220,220,220)',
        gneg: 'rgb(255,255,255)',
        acen: 'rgb(217,47,39)',
        stalk: 'rgb(100,127,164)',
        select: 'rgb(135,177,255)'
      }
      console.log(height)

      var GRCh37 = this.GRCh37.filter(function(d) {
        return d.id === 'chr1'
      })

      var cytobands = this.cytobands
        .filter(function(d) {
          return d.chrom === 'chr1'
        })
        .map(function(d) {
          return {
            block_id: d.chrom,
            start: parseInt(d.chromStart),
            end: parseInt(d.chromEnd),
            gieStain: d.gieStain,
            name: d.name
          }
        })

      var snp250 = this.snp250.map(function(d) {
        return {
          block_id: d.chromosome,
          position: parseInt(d.start) + parseInt(d.end),
          value: d.value
        }
      })

      var snp = this.snp.map(function(d) {
        return {
          block_id: d.chromosome,
          position: parseInt(d.start) + parseInt(d.end),
          value: d.value
        }
      })

      console.log('折线数据', snp)

      var snp1m = this.snp1m.map(function(d) {
        return {
          block_id: d.chromosome,
          position: parseInt(d.start) + parseInt(d.end),
          value: d.value
        }
      })

      circosLine
        .layout(GRCh37, {
          innerRadius: width / 5 - 100,
          outerRadius: width / 5 - 80,
          labels: { display: false },
          ticks: { display: false }
        })
        .highlight('cytobands', cytobands, {
          //第二层柱状间隔
          innerRadius: width / 5 - 100,
          outerRadius: width / 5 - 80,
          opacity: 0.3,
          color: function(d) {
            return gieStainColor[d.gieStain]
          },
          tooltipContent: function(d) {
            return d.name
          }
        })
        //中心绿色块
        // .line('snp-250', snp250, {
        //   innerRadius: 0.5,
        //   outerRadius: 0.8,
        //   maxGap: 1000000,
        //   min: 0,
        //   max: 0.015,
        //   color: '#222222',
        //   axes: [
        //     {
        //       spacing: 0.001,
        //       thickness: 1,
        //       color: '#666666'
        //     }
        //   ],
        //   backgrounds: [
        //     {
        //       start: 0,
        //       end: 0.002,
        //       color: '#f44336',
        //       opacity: 0.5
        //     },
        //     {
        //       start: 0.006,
        //       end: 0.015,
        //       color: '#4caf50',
        //       opacity: 0.5
        //     }
        //   ],
        //   tooltipContent: null
        // })
        // .scatter('snp-250-tooltip', snp250, {
        //   innerRadius: 0.5,
        //   outerRadius: 0.8,
        //   min: 0,
        //   max: 0.015,
        //   fill: false,
        //   strokeWidth: 0,
        //   tooltipContent: function(d, i) {
        //     return `${d.block_id}:${Math.round(d.position)} ➤ ${d.value}`
        //   }
        // })
        .line('snp', snp, {
          //外层黑色折线
          innerRadius: 1.01,
          outerRadius: 1.15,
          maxGap: 1000000,
          min: 0,
          max: 0.015,
          color: '#222222',
          axes: [
            {
              //外层红线
              position: 0.002,
              color: '#f44336'
            },
            {
              //最外层蓝线
              position: 0.006,
              color: '#4caf50'
            }
          ],
          tooltipContent: null
        })
        // .line('snp1m', snp1m, {
        //   //外层红色的线
        //   innerRadius: 1.01,
        //   outerRadius: 1.15,
        //   maxGap: 1000000,
        //   min: 0,
        //   max: 0.015,
        //   color: '#f44336',
        //   tooltipContent: null
        // })
        .line('snp-in', snp, {
          //内存黑色折现及绿色块
          innerRadius: 0.85,
          outerRadius: 0.95,
          maxGap: 1000000,
          direction: 'in',
          min: 0,
          max: 0.015,
          color: '#222222',
          axes: [
            // {
            //   position: 0.01,
            //   color: '#4caf50'
            // },
            {
              position: 0.008,
              color: '#4caf50'
            }
            // {
            //   position: 0.006,
            //   color: '#4caf50'
            // },
            // {
            //   position: 0.002,
            //   color: '#f44336'
            // }
          ],
          tooltipContent: null
        })
        // .line('snp1m-in', snp1m, {
        //   //第二圈红色的线
        //   innerRadius: 0.85,
        //   outerRadius: 0.95,
        //   maxGap: 1000000,
        //   direction: 'in',
        //   min: 0,
        //   max: 0.015,
        //   color: '#f44336',
        //   tooltipContent: null
        // })
        .render()
    }
  },
  created() {},
  mounted() {
    this.initLineChart()
  }
}
</script>
<style scoped>
.SentenceMain {
  width: 100%;
  height: 100%;
}
</style>