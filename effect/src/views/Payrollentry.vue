<template>
  <div>
    <div class="top">
      <p>姓名</p>
      <p>
        <el-input
          v-model="name"
          placeholder="请输入姓名"
          class="name"
        ></el-input>
      </p>
      <p>账号</p>
      <p>
        <el-input
          v-model="names"
          placeholder="请输入账号"
          class="names"
        ></el-input>
      </p>
      <p>手机号</p>
      <p>
        <el-input
          v-model="tel"
          placeholder="请输入手机号"
          class="tel"
        ></el-input>
      </p>
    </div>
    <p class="p">
      <el-button icon="el-icon-search">查询</el-button>
      <el-button icon="el-icon-refresh-right">重置</el-button>
      <el-button type="info">下载工资条模板</el-button>
      <el-button>上传</el-button>
      <el-button icon="el-icon-circle-plus-outline" class="xin" @click="tan"
        >新增材料</el-button
      >
    </p>
    <!-- 表格 -->
    <el-table
      :data="tableData"
      stripe
      border
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column prop="id" label="id"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="Attendance" label="出勤"> </el-table-column>
      <el-table-column prop="Absenteeism" label="旷工"> </el-table-column>
      <el-table-column prop="leave" label="请假"> </el-table-column>
      <el-table-column prop="basepay" label="基本工资"> </el-table-column>
      <el-table-column prop="Postsalary" label="岗位工资"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-edit"
            @click="rejected(scope.$index, scope.row)"
            >修改</el-button
          >
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="dialogFormVisible = true"
            >删除</el-button
          >
        </template>
      </el-table-column>
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
    <!-- 新增工资条 -->

    <el-dialog
      title="新增工资条"
      :model="form"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >新增</el-button
        >
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Payrollentry',
  components: {},
  data() {
    return {
      name: '', //请输入姓名输入框
      dialogVisible: false, //弹框状态
      // 表格数据
      tableData: [
        {
          id: '',
          name: '',
          tel: '',
          Attendance: '',
          Absenteeism: '',
          leave: '',
          basepay: '',
          Postsalary: ''
        }
      ],
      // 表单数据
      form: {
        region: ''
      },
      names: '',
      tel: ''
    }
  },
  //过滤器
  filters: {},
  created() {},
  //计算属性
  computed: {},
  mounted() {},
  methods: {
    tan() {
      this.dialogVisible = true //弹框状态
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    rejected() {}
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
.xin {
  float: right;
  background-color: #d9bffb;
  color: white;
}
.inp {
  width: 200px;
}
</style>
