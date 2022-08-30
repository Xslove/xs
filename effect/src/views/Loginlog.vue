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
      <p><span>时间</span> <span>时间组件</span></p>
    </div>
    <p class="p">
      <el-button icon="el-icon-search">查询</el-button>
      <el-button icon="el-icon-refresh-right">重置</el-button>
    </p>
    <!-- 表格 -->
    <el-table :data="tableData" stripe border>
      <el-table-column prop="id" label="id"> </el-table-column>
      <el-table-column prop="ip" label="登录IP"> </el-table-column>
      <el-table-column prop="name" label="账号名称"> </el-table-column>
      <el-table-column prop="equipment" label="登录设备"> </el-table-column>
      <el-table-column prop="place" label="登录地点"> </el-table-column>
      <el-table-column prop="time" label="登录时间"> </el-table-column>
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
  name: 'Loginlog',
  components: {},
  data() {
    return {
      name: '', //请输入姓名输入框
      tableData: [
        //表格数据
        {
          id: 1,
          ip: '小红',
          name: '111',
          equipment: '22',
          place: '333',
          time: '444'
        },
        {
          id: 1,
          ip: '小红',
          name: '111',
          equipment: '22',
          place: '333',
          time: '444'
        },
        {
          id: 1,
          ip: '小红',
          name: '111',
          equipment: '22',
          place: '333',
          time: '444'
        },
        {
          id: 1,
          ip: '小红',
          name: '111',
          equipment: '22',
          place: '333',
          time: '444'
        }
      ]
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
