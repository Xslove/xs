<template>
  <div>
    <!-- 搜索部分 -->
    <p class="search-p">
      角色名称：<el-input
        class="input"
        v-model="name"
        placeholder="请输入姓名"
      ></el-input>
      <!-- 按钮部分 -->
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
      <el-table-column prop="id" label="id" width="180"> </el-table-column>
      <el-table-column prop="name" label="角色名称" width="280">
      </el-table-column>
      <el-table-column prop="tel" label="备注" width="280"> </el-table-column>
      <el-table-column label="操作">
        <!-- 按钮  -->
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
            style="margin-left: 50px"
            >删除</el-button
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
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        style="overflow: hidden"
      >
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="角色权限" prop="jurisdiction">
          <el-cascader
            placeholder="管理员角色"
            :options="options"
            :props="props"
            collapse-tags
            clearable
            v-model="ruleForm.jurisdiction"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="备注" prop="tel">
          <el-input type="textarea" v-model="ruleForm.tel"></el-input>
        </el-form-item>
        <el-form-item style="float: right">
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
  name: 'RoleView',
  components: {},
  data() {
    return {
      // 多选
      props: { multiple: true },
      options: [
        {
          value: 1,
          label: '东南',
          children: [
            {
              value: 2,
              label: '上海',
              children: [
                { value: 3, label: '普陀' },
                { value: 4, label: '黄埔' },
                { value: 5, label: '徐汇' }
              ]
            },
            {
              value: 7,
              label: '江苏',
              children: [
                { value: 8, label: '南京' },
                { value: 9, label: '苏州' },
                { value: 10, label: '无锡' }
              ]
            },
            {
              value: 12,
              label: '浙江',
              children: [
                { value: 13, label: '杭州' },
                { value: 14, label: '宁波' },
                { value: 15, label: '嘉兴' }
              ]
            }
          ]
        },
        {
          value: 17,
          label: '西北',
          children: [
            {
              value: 18,
              label: '陕西',
              children: [
                { value: 19, label: '西安' },
                { value: 20, label: '延安' }
              ]
            },
            {
              value: 21,
              label: '新疆维吾尔族自治区',
              children: [
                { value: 22, label: '乌鲁木齐' },
                { value: 23, label: '克拉玛依' }
              ]
            }
          ]
        }
      ],
      name: '',
      tel: '',
      // 当前页
      page: 1,
      // 表格数据
      tableData: [
        {
          id: 1, //id
          name: '王小虎', //角色名称
          tel: 18530722632 //备注
        }
      ],
      // 对话框状态
      dialogVisible: false,
      // 表单数据
      ruleForm: {
        name: '', //角色名称
        tel: null, //备注
        jurisdiction: '' //角色权限
      },
      // 校验
      rules: {
        // 角色名称
        name: [
          { required: true, message: '请输入角色名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        tel: [{ required: true, message: '请输入备注', trigger: 'blur' }], //备注
        jurisdiction: [
          { required: true, message: '请输入角色权限', trigger: 'blur' }
        ] //角色权限
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 提交
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
  margin-bottom: 40px;
  .input {
    width: 250px;
    margin-right: 40px;
  }
  .adduser {
    background-color: #c2c2fb;
    color: #fff;
  }
}
</style>
