<template>
  <div>
    <!-- 已办事项 -->
    <div class="done">
      <!-- 头部 -->
      <div class="top">
        <p>
          <span>审批类型</span>
          <el-select size="mini" v-model="value" placeholder="请选择">
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
          <el-input
            size="mini"
            v-model="name"
            placeholder="请输入账号"
          ></el-input>
        </p>
        <p>
          <span>审批状态</span>
          <el-input
            size="mini"
            v-model="state"
            placeholder="请输入状态"
          ></el-input>
        </p>
      </div>
      <!-- 按钮 -->
      <div class="btn">
        <el-button icon="el-icon-search" size="mini">查询</el-button>
        <el-button icon="el-icon-refresh-left" size="mini">重置</el-button>
      </div>
      <!-- 表格 -->
      <div class="table">
        <el-table border :data="tableData" stripe style="width: 100%">
          <el-table-column align="center" type="index" label="id" width="100">
          </el-table-column>
          <el-table-column align="center" prop="name" label="申请人">
          </el-table-column>
          <el-table-column align="center" prop="types" label="申请类型">
          </el-table-column>
          <el-table-column align="center" prop="date" label="申请时间">
          </el-table-column>
          <el-table-column align="center" prop="user" label="当时审批人">
          </el-table-column>
          <el-table-column align="center" prop="state" label="审批状态">
          </el-table-column>
          <el-table-column align="center" prop="department" label="所属部门">
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                icon="el-icon-refresh-left"
                class="edit"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="paging">
          <el-pagination background layout="prev, pager, next" :total="100">
          </el-pagination>
        </div>
      </div>
      <!-- 详情弹框 -->
      <!-- 审批详情弹出框 -->
      <el-dialog title="审批详情" :visible.sync="dialogFormVisible">
        <!-- 时间线 -->
        <el-steps class="date" :space="200" :active="1" finish-status="success">
          <el-step title="已完成"></el-step> <el-step title="进行中"></el-step>
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
          <el-form-item label="理由" prop="reason">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="ruleForm.reason"
            >
            </el-input>
          </el-form-item>
          <el-form-item class="right">
            <el-button
              type="primary"
              class="add"
              @click="submitForm('ruleForm')"
              >撤回</el-button
            >
            <el-button @click="resetForm('ruleForm')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'CompletedItems',
  components: {},
  data() {
    return {
      value: '',
      name: '', //申请人
      state: '', //状态
      options: [
        {
          value: '已通过',
          label: '已通过'
        },
        {
          value: '已驳回',
          label: '已驳回'
        },
        {
          value: '审批中',
          label: '审批中'
        },
        {
          value: '已撤销',
          label: '已撤销'
        }
      ],
      tableData: [
        {
          name: '李四', //申请人
          types: '请假', //审批类型
          date: '2002.03.10', //申请时间
          user: '小米', //当前审批人
          state: '已通过', //审批状态
          department: '人事部' //所属部门
        },
        {
          name: '李六',
          types: '请假',
          date: '2002.05.10',
          user: '小米',
          state: '已驳回',
          department: '采购部'
        }
      ],
      // 详情参数
      dialogFormVisible: false,
      ruleForm: {
        name: '',
        region: '',
        reason: '' //理由
      },
      rules: {},
      formLabelWidth: '130px', // 选择日期
      value1: '', // 选择时间
      value2: ''
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 编辑
    handleEdit(index, row) {
      console.log(index, row)
      this.dialogFormVisible = true
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
      this.dialogFormVisible = false
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped lang="scss">
.demo-ruleForm {
  overflow: hidden;
  .add {
    background-color: #b886f8;
    border: 0;
  }
  .right {
    float: right;
  }
}

// 时间线
.date {
  margin-left: 50px;
  margin-bottom: 20px;
}
.done {
  padding: 25px;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      display: flex;
      align-items: center;
      span {
        display: inline-block;
        width: 100px;
      }
    }
  }
  .btn {
    margin-top: 20px;
  }
  .table {
    margin-top: 20px;
    .edit {
      background-color: #f4c438;
      color: #fff;
    }
    .paging {
      float: right;
      margin-top: 20px;
    }
  }
}
</style>
