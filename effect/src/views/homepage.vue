<template>
  <div>
    <div class="topbox">
      <div class="left">
        <ul>
          <li><big>待办事项</big> <span class="gongs">查看更多</span></li>
          <li>
            [待办事项]您申请的报销还未审批 请及时查看 防止过期
            <span>2022年8月</span>
          </li>
          <li>
            [待办事项]您申请的报销还未审批 请及时查看 防止过期
            <span>2022年8月</span>
          </li>
          <li>
            [待办事项]您申请的报销还未审批 请及时查看 防止过期
            <span>2022年8月</span>
          </li>
          <li class="Notyet">暂无代办事</li>
        </ul>
      </div>
      <div class="right">
        <el-date-picker v-model="times" type="date" placeholder="选择日期">
        </el-date-picker>
      </div>
    </div>
    <div class="centerbox">
      <div class="left">
        <p>员工数据</p>
        <ul>
          <li>
            <p>员工总人数</p>
            <p>200人</p>
          </li>
          <li>
            <p>员工总人数</p>
            <p>200人</p>
          </li>
          <li>
            <p>员工总人数</p>
            <p>200人</p>
          </li>
          <li>
            <p>员工总人数</p>
            <p>200人</p>
          </li>
          <li>
            <p>员工总人数</p>
            <p>200人</p>
          </li>
          <li>
            <p>员工总人数</p>
            <p>200人</p>
          </li>
        </ul>
      </div>
      <div class="right">
        <p>员工地区分布</p>
        <div id="main"></div>
      </div>
    </div>
    <div class="footerbox">
      <p>员工生日</p>
      <div id="mains"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'Homepage',
  components: {},
  data() {
    return {
      times: ''
    }
  },
  //过滤器
  filters: {},
  created() {},
  //计算属性
  computed: {},
  mounted() {
    var chartDom = document.getElementById('main')
    var myChart = echarts.init(chartDom)
    var option

    option = {
      title: {
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'right'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
    option && myChart.setOption(option)

    var chartDoms = document.getElementById('mains')
    var myCharts = echarts.init(chartDoms)
    var options

    options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          barWidth: '60%',
          itemStyle: { color: '#b886f8' },
          data: [120, 200, 150, 80, 70, 110, 130, 100, 50, 60, 20, 160]
        }
      ]
    }
    options && myCharts.setOption(options)
  },
  methods: {}
}
</script>
<style scoped lang="scss">
#main {
  width: 100%;
  height: 100%;
}
#mains {
  width: 100%;
  height: 400px;
}
.topbox {
  display: flex;
  margin-bottom: 30px;
  .left {
    width: 60%;
    ul {
      li {
        height: 40px;
        border: 1px solid #7b7b7b;
        line-height: 40px;
        padding-left: 20px;
        color: #7b7b7b;
        big {
          color: black;
        }
        .gongs {
          color: #458bf3;
        }
        span {
          float: right;
          margin-right: 20px;
        }
        .Notyet {
          text-align: center;
        }
      }
      .Notyet {
        text-align: center;
      }
    }
  }
  .right {
    width: 40%;
  }
}
.centerbox {
  display: flex;
  .left {
    width: 48%;
    border: 1px solid #7b7b7b;
    p {
      height: 40px;
      line-height: 40px;
      padding-left: 20px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      color: #7b7b7b;
      border-top: 1px solid #7b7b7b;
      padding-top: 20px;
      padding-bottom: 20px;
      li {
        width: 166px;
        border-right: 1px solid #7b7b7b;
        text-align: center;
        margin-bottom: 10px;
      }
    }
  }
  .right {
    width: 48%;
    border: 1px solid #7b7b7b;
    margin-left: 30px;
    p {
      height: 40px;
      line-height: 40px;
      padding-left: 20px;
      border-bottom: 1px solid #7b7b7b;
    }
  }
}
.footerbox {
  margin-top: 30px;
  border: 1px solid #7b7b7b;
  p {
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
  }
}
</style>
