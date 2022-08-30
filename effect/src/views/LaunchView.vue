<template>
  <div>
    <div class="top">
      <p>
        <span>审批类型</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </p>
      <p>
        <span>申请人</span>
        <el-input v-model="searchVal" placeholder="请输入账号"></el-input>
      </p>
      <p>
        <span>审批状态</span>
        <el-input v-model="searchStatus" placeholder="请输入状态"></el-input>
      </p>
    </div>

    <div class="btn-box">
      <el-button icon="el-icon-search">查询</el-button>
      <el-button icon="el-icon-refresh-right">重置</el-button>
      <el-button type="info" @click="addDialog = true">新增申请</el-button>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%"
      max-height="250"
      border
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
      stripe
    >
      <el-table-column label="id" type="index"> </el-table-column>
      <el-table-column prop="name" label="申请人"> </el-table-column>
      <el-table-column prop="name" label="审批类型"> </el-table-column>
      <el-table-column prop="date" label="申请时间"> </el-table-column>
      <el-table-column prop="name" label="当前审批人"> </el-table-column>
      <el-table-column prop="name" label="审批状态"> </el-table-column>
      <el-table-column prop="name" label="所属部门"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            class="edit-btn"
            icon="el-icon-chat-dot-round"
            @click="dialogFormVisible = true"
            >详情</el-button
          >
          <el-button
            size="mini"
            class="del-btn"
            icon="el-icon-refresh-right"
            @click="recall"
            >撤回</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="page-box">
      <el-pagination background layout="prev, pager, next" :total="100">
      </el-pagination>
    </div>

    <!-- 审批详情弹出框 -->
    <el-dialog title="审批详情" :visible.sync="dialogFormVisible">
      <el-steps :space="200" :active="1" finish-status="success">
        <el-step title="已完成"></el-step>
        <el-step title="进行中"></el-step>
        <el-step title="步骤 3"></el-step>
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
        <el-form-item label="审批类型" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请假申请">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="1">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker
                placeholder="选择时间"
                v-model="ruleForm.date2"
                style="width: 100%"
              ></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="所属部门" prop="region">
          <el-select v-model="ruleForm.region" placeholder="人事部">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="审批状态" prop="region">
          <el-select v-model="ruleForm.region" placeholder="已审批">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="当前审批人" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item class="form-right">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >撤回</el-button
          >
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!-- 新增申请弹出框 -->
    <el-dialog title="收货地址" :visible.sync="addDialog">
      <el-form
        ref="form"
        :model="addForm"
        label-width="80px"
        class="demo-ruleForm"
      >
        <el-form-item label="活动区域">
          <el-select v-model="addForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="addForm.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col :span="1">-</el-col>
          <el-col :span="11">
            <el-time-picker
              placeholder="选择时间"
              v-model="addForm.date2"
              style="width: 100%"
            ></el-time-picker>
          </el-col>
        </el-form-item>

        <el-steps :space="200" :active="1" finish-status="success">
          <el-step title="已完成"></el-step>
          <el-step title="进行中"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>

        <el-form-item class="form-right">
          <el-button type="primary" @click="onSubmit">撤回</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'LaunchView',
  components: {},
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      value: '',
      searchVal: '',
      searchStatus: '',
      // 表格数据
      tableData: [
        {
          date: '2022年5月20日 14:09:23',
          name: '王小虎'
        },
        {
          date: '2022年5月20日 14:09:23',
          name: '王小虎'
        }
      ],
      dialogFormVisible: false,
      ruleForm: {
        name: '',
        region: ''
      },
      rules: {},
      formLabelWidth: '130px',
      // 选择日期
      value1: '',
      // 选择时间
      value2: '',
      // 新增申请弹框状态
      addDialog: false,
      addForm: {
        name: ''
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
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
      this.dialogFormVisible = false
      this.$refs[formName].resetFields()
    },
    // 新增申请

    // 撤回
    recall() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  }
}
</script>
<style scoped lang="scss">
.demo-ruleForm {
  overflow: hidden;
  .form-right {
    float: right;
    .el-button:nth-child(1) {
      background-color: #b886f8;
      color: #fff;
    }
  }
}
.appStep {
  width: 100%;
  display: flex;
}
.el-dialog {
  .el-input {
    width: 50%;
  }
}
.el-steps {
  margin-left: 20%;
}
.top {
  width: 100%;
  display: flex;
  p {
    display: flex;
    align-items: center;
    text-align: center;
    span {
      display: inline-block;
      width: 120px;
    }
  }
}
.btn-box {
  margin: 20px;
}
.page-box {
  width: 100%;
  .el-pagination {
    float: right;
  }
}
.el-table {
  margin: 20px 0;
}
.addBtn,
.sub-btn {
  background-color: #b886f8;
  color: white;
}
.edit-btn {
  background-color: #f4c438;
  color: white;
}
.del-btn {
  background-color: #f26161;
  color: white;
}
.sub-btn {
  background-color: #b886f8;
  color: white;
}
</style>
