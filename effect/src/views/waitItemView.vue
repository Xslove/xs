<template>
  <div>
    <!-- 搜索框 -->
    <el-row :gutter="20">
      <el-col :span="6"
        ><span>审批类型</span>
        <el-select v-model="fname" placeholder="请选择审批类型">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option> </el-select
      ></el-col>
      <el-col :span="8"
        ><span>申请人</span
        ><el-input v-model="name" placeholder="请输入账号"></el-input>
      </el-col>
      <el-col :span="8"
        ><span>审批状态</span>
        <el-input v-model="status" placeholder="请输入状态"></el-input
      ></el-col>
    </el-row>
    <!-- 按钮 -->
    <div class="btn-box">
      <el-button icon="el-icon-search">查询</el-button>
      <el-button icon="el-icon-refresh-right">重制</el-button>
    </div>
    <!-- 表格 -->
    <div class="table-box">
      <el-table :data="tableData" stripe style="width: 100%" border>
        <el-table-column type="index" label="id" width="80"> </el-table-column>
        <el-table-column prop="name" label="申请人"> </el-table-column>
        <el-table-column prop="fname" label="审批类型"> </el-table-column>
        <el-table-column prop="create_time" label="申请时间" width="220">
        </el-table-column>
        <el-table-column prop="aname" label="当前审批人"> </el-table-column>
        <el-table-column prop="status" label="审批状态"> </el-table-column>
        <el-table-column prop="dname" label="所属部门"> </el-table-column>
        <el-table-column label="操作" width="230">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="through(scope.$index, scope.row)"
              style="background-color: #b886f8; color: #fff"
              >通过</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="rejected(scope.$index, scope.row)"
              >驳回</el-button
            >
            <el-button
              size="mini"
              type="primary"
              @click="dialogFormVisible = true"
              >详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="tableData.length"
          :current-page.sync="page"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
    <el-dialog title="审批详情" :visible.sync="dialogFormVisible">
      <el-steps :space="200" :active="1" finish-status="success">
        <el-step title="guanlyuan" description="admin"></el-step>
        <el-step title="guanlyuan" description="debveloper"></el-step>
        <el-step description="over"></el-step>
      </el-steps>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="申请人" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="审批类型" prop="fname">
          <el-select v-model="ruleForm.fname" placeholder="请假申请">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请时间" required>
          <el-col :span="11">
            <el-form-item prop="date">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="create_time">
              <el-time-picker
                placeholder="选择时间"
                v-model="ruleForm.create_time"
                style="width: 100%"
              ></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="所属部门" prop="dname">
          <el-select v-model="ruleForm.dname" placeholder="人事部">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="理由" prop="reason">
          <el-input
            type="textarea"
            placeholder="理由"
            v-model="ruleForm.reason"
          ></el-input>
        </el-form-item>
        <el-form-item class="form-right">
          <el-button
            style="background-color: #d9bffb; color: #fff"
            @click="submitForm('ruleForm')"
            >新增</el-button
          >
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'WaitItemView',
  components: {},
  data() {
    return {
      ruleForm: {},
      rules: {},
      page: 1, // 当前页
      name: '', // 申请人
      status: '', // 审批状态
      fname: '', // 审批类型
      options: [
        // 审批类型
        {
          label: '请假',
          value: '请假'
        },
        {
          label: '车贷',
          value: '车贷'
        },
        {
          label: '出差',
          value: '出差'
        },
        {
          label: '加班',
          value: '加班'
        }
      ],
      // 表格数据
      tableData: [
        {
          name: '王小诺',
          fname: '请假',
          create_time: '15632456789',
          aname: '小明',
          status: '已通过',
          dname: '总经办'
        },
        {
          name: '王小诺',
          fname: '请假',
          create_time: '15632456789',
          aname: '小明',
          status: '已通过',
          dname: '总经办'
        },
        {
          name: '王小诺',
          fname: '请假',
          create_time: '15632456789',
          aname: '小明',
          status: '已通过',
          dname: '总经办'
        }
      ],
      dialogFormVisible: false // 弹框数据
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 当前页
    handleCurrentChange(val) {
      this.page = val
    },
    // 通过
    through(Idx, row) {
      console.log(Idx, row)
      this.$prompt('确认通过该申请', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValue: '通过理由'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '确认通过'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
    },
    // 驳回
    rejected(Idx, row) {
      console.log(Idx, row)
      this.$prompt('是否驳回该申请', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValue: '驳回理由'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '确认通过'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
    },
    // 详情
    details(Idx, row) {
      console.log(Idx, row)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped lang="scss">
.demo-ruleForm {
  overflow: hidden;
  .form-right {
    float: right;
  }
}
.el-steps {
  margin: 0 8%;
}
.block {
  .el-pagination {
    float: right;
  }
}
.el-row {
  .el-col {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-input {
      width: 80%;
    }
  }
}
.btn-box {
  margin: 20px 0;
}
</style>
