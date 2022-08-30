<template>
  <div>
    <!-- 搜索部分 -->
    <p class="search-p">
      姓名：<el-input
        class="input"
        v-model="name"
        placeholder="请输入姓名"
      ></el-input>
      所属部门：<el-input
        class="input"
        v-model="department"
        placeholder="请输入部门"
      ></el-input>
      手机号：<el-input
        class="input"
        v-model="tel"
        placeholder="请输入手机号"
      ></el-input>
    </p>
    <!-- 按钮部分 -->
    <p class="button-p">
      <el-button icon="el-icon-search">查询</el-button>
      <el-button icon="el-icon-refresh-right">重置</el-button>
      <el-button
        class="adduser"
        icon="el-icon-circle-plus-outline"
        @click="dialogVisible = true"
        >新增用户</el-button
      >
    </p>
    <!-- 表格部分 -->
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      stripe
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column prop="id" label="id" width="80"> </el-table-column>
      <el-table-column prop="name" label="用户名称" width="150">
      </el-table-column>
      <el-table-column prop="account" label="账号" width="150">
      </el-table-column>
      <el-table-column prop="tel" label="手机号" width="150"> </el-table-column>
      <el-table-column prop="role" label="所属角色" width="150">
      </el-table-column>
      <el-table-column prop="rank" label="所属职级" width="150">
      </el-table-column>
      <el-table-column prop="department" label="所属部门" width="150">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
            icon="el-icon-edit"
            style="color: #fff; background-color: #7aabf6"
            >修改</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            icon="el-icon-delete"
            >删除</el-button
          >
          <el-button
            size="mini"
            @click="handleDetails(scope.$index, scope.row)"
            icon="el-icon-s-tools"
            >详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页部分 -->
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
    <!-- 对话框部分 -->
    <el-dialog title="新增用户" :visible.sync="dialogVisible" width="30%">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        style="overflow: hidden"
      >
        <el-form-item label="用户名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="账号" prop="account">
          <el-input v-model="ruleForm.account"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="tel">
          <el-input v-model="ruleForm.tel"></el-input>
        </el-form-item>
        <el-form-item label="角色名称" prop="role">
          <el-select v-model="ruleForm.role" placeholder="管理员角色">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属岗位" prop="post">
          <el-select v-model="ruleForm.post" placeholder="销售岗">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属职级" prop="rank">
          <el-select v-model="ruleForm.rank" placeholder="1">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属部门" prop="department">
          <el-select v-model="ruleForm.department" placeholder="1">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="float: right">
          <!-- 按钮  -->
          <el-button class="confirm" @click="submitForm('ruleForm')"
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
  name: 'UserView',
  components: {},
  data() {
    return {
      // 搜索
      name: '',
      tel: '',
      department: '',
      // 当前页
      page: 1,
      // 表格数据
      tableData: [
        {
          id: 1, //id
          name: '王小虎', //用户名
          account: 'admin', //账号
          tel: 18530722632, //手机号
          role: '管理员', //角色名称
          rank: '经理', //职级
          department: '人事' //部门
        }
      ],
      // 对话框状态
      dialogVisible: false,
      // 表单数据
      ruleForm: {
        name: '', //用户名
        account: '', //账号
        tel: null, //手机号
        role: '', //角色名称
        post: '', //岗位
        rank: '', //职级
        department: '' //部门
      },
      // 校验
      rules: {
        // 用户名
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }], // 账号
        tel: [{ required: true, message: '请输入手机号', trigger: 'blur' }], // 手机号
        role: [{ required: true, message: '请输入角色名称', trigger: 'blur' }], //角色名称
        post: [{ required: true, message: '请输入岗位', trigger: 'blur' }], //岗位
        rank: [{ required: true, message: '请输入职级', trigger: 'blur' }], //职级
        department: [{ required: true, message: '请输入部门', trigger: 'blur' }] //部门
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 确定
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
    // 取消
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.dialogVisible = false
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    // 修改
    handleEdit(index, row) {
      console.log(index, row)
      this.dialogVisible = true
    },
    // 删除
    handleDelete(index, row) {
      console.log(index, row)
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
    },
    // 详情
    handleDetails(index, row) {
      console.log(index, row)
      this.dialogVisible = true
    }
  }
}
</script>
<style scoped lang="scss">
.confirm {
  // margin-left: 165px;
  background-color: #b886f8;
  color: white;
}
.search-p {
  .input {
    width: 250px;
    margin-right: 40px;
  }
}
.button-p {
  margin: 20px 0;
  .adduser {
    background-color: #c2c2fb;
    float: right;
    color: #fff;
  }
}
</style>
