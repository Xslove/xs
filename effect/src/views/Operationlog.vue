<template>
  <div>
    <div class="top">
      <p>账号名称</p>
      <p>
        <el-input
          v-model="name"
          placeholder="请输入姓名"
          class="name"
        ></el-input>
      </p>
      <p>
        <span>时间</span>
        <span>
          <el-time-picker
            is-range
            v-model="value1"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围"
          >
          </el-time-picker>
        </span>
      </p>
    </div>
    <p class="p">
      <el-button icon="el-icon-search">查询</el-button>
      <el-button icon="el-icon-refresh-right">重置</el-button>
    </p>
    <!-- 表格 -->
    <el-table :data="tableData" stripe border>
      <el-table-column prop="id" label="id"> </el-table-column>
      <el-table-column prop="Operator" label="操作人"> </el-table-column>
      <el-table-column prop="Operapath:" label="操作路径"> </el-table-column>
      <el-table-column prop="action" label="操作动作"> </el-table-column>
      <el-table-column prop="time" label="操作时间"> </el-table-column>
    </el-table>
    <div class="footer">
      <div class="right">
        <!-- 分页 -->
        <el-pagination
          style="float: right; margin: 20px"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="page"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Operationlog',
  components: {},
  data() {
    return {
      name: '', //请输入姓名输入框
      // 表格数据
      tableData: [
        {
          id: 1,
          Operator: '小白',
          Operapath: '',
          action: '',
          time: '444'
        },
        {
          id: 1,
          Operator: '小白',
          Operapath: '',
          action: '',
          time: '444'
        },
        {
          id: 1,
          Operator: '小白',
          Operapath: '',
          action: '',
          time: '444'
        }
      ],
      value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)] //时间
    }
  },
  //过滤器
  filters: {},
  created() {},
  //计算属性
  computed: {},
  mounted() {},
  methods: {
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style scoped lang="scss">
.top {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  margin-bottom: 20px;
  p {
    margin-right: 30px;
    span {
      margin-right: 10px;
    }
  }
}
.name {
  width: 300px;
}
.p {
  margin-bottom: 20px;
}
.footer {
  margin-top: 20px;
  .right {
    float: right;
    ul {
      height: 40px;
      line-height: 40px;
      display: flex;
      li {
        margin-left: 27px;
      }
    }
  }
}
</style>
