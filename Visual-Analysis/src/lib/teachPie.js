import * as d3 from 'd3';
import $ from 'jquery';
import { TeacherData } from '../components/SentenceView/Sentencedata';
export  class TeacherPie {
    constructor(container,TeacherData) {
        this._container = container;
  
        this.TeacherData = TeacherData;  
        
    }


    render() {
      const width = $('.TStudentCluster').width();
      const height = $('.TStudentCluster').height();
    
      var data = this.TeacherData
      console.log(data)

      /* ----------------------------尺度转换------------------------  */
      var arcAngle = d3
        .pie()
        .sort((d, i) => i)
        .value(d => d.money)

      var scaleRadius = d3
        .scaleLinear()
        .domain([0, d3.max(data.map(d => d.money))])
        .range([0, d3.min([width, height]) * 0.5])
      this.scaleRadius = scaleRadius

      /* ----------------------------渲染扇形------------------------  */
      //添加外层圆
      var _colors = d3.scaleOrdinal(d3.schemeCategory10)
      var R = d3.max(data.map(d => d.money))

      //teacher圆
      var arc = d3
        .arc()
        .innerRadius(scaleRadius(R) * 0.12)
        .outerRadius(scaleRadius(R) * 0.12)
        .startAngle(0.74 * Math.PI)
        .endAngle(2.26 * Math.PI)

      this._container
        .append('path')
        .attr('class', 'arc')
        .attr('d', arc)
        .attr('fill', 'none')
        .attr('stroke', '#2ca02c')
        .attr(
          'transform',
          'translate(' + width * 0.185 + ',' + height * 0.2 + ')'
        )

      //student圆
      var arc = d3
        .arc()
        .innerRadius(scaleRadius(R) * 0.23)
        .outerRadius(scaleRadius(R) * 0.23)
        .startAngle(-0.37 * Math.PI)
        .endAngle(1.40 * Math.PI)

      this._container
        .append('path')
        .attr('class', 'arc')
        .attr('d', arc)
        .attr('fill', 'none')
        .attr('stroke', '#000')
        .attr(
          'transform',
          'translate(' + width * 0.335 + ',' + height * 0.205 + ')'
        )

      //添加句子序号标题
      this._container
        .append('text')
        .classed('Sentencetitle', true)
        .attr('x', width * 0.21)
        .attr('y', height * 0.188)
        .text('20')
        .attr('fill', this.textColor)
        .attr('stroke', this.textColor)
        .attr('font-size', 18)
        .style('stroke-width', '2px')

      var slices = this._container
        .append('g')
        .classed('pie', true)
        .attr(
          'transform',
          'translate(' + width * 0.18 + ',' + height * 0.2 + ')' //移动饼图在左圆中的位置
        )
        .selectAll('.arc')
        .data(arcAngle(data))

      slices
        .enter()
        .append('path')
        .attr('class', (d, i) => 'arc arc-' + i)
        .merge(slices)
        .attr('fill', (d, i) => _colors(i))
        .transition()
        .duration(this.animateDuration)
        .attrTween('d', this.arcTween)

      slices.exit().remove()

      return this;
  }

   //Teacher图调用函数
   arcTween(d) {
    const width = $('.TStudentCluster').width();
      const height = $('.TStudentCluster').height();
    const data = TeacherData
    var scaleRadius = d3
        .scaleLinear()
        .domain([0, d3.max(data.map(d => d.money))])
        .range([0, d3.min([width, height]) * 0.5])

    let currentR = this._current

    if (!currentR) {
      currentR = 0
    }

    const interpolate = d3.interpolate(currentR, scaleRadius(d.value))
    this._current = interpolate(1) //当饼图更新时，从当前半径到新半径

    return function(t) {
      let arc = d3
        .arc()
        .outerRadius(interpolate(t) * 0.08)
        // .outerRadius(40)
        .innerRadius(8 * 0.8)
      // .innerRadius(config.innerRadius);

      return arc(d)
    }
  }
  }