<template>
  <div class="Menu-box">
    <el-row :gutter="20">
      <el-col :span="1.5">菜单名称</el-col>
      <el-col :span="5"
        ><el-input v-model="userName" placeholder="请输入姓名"></el-input
      ></el-col>
      <el-col :span="2"
        ><el-button icon="el-icon-search">查询</el-button></el-col
      >
      <el-col :span="2"
        ><el-button icon="el-icon-refresh-right">重制</el-button></el-col
      >
      <el-col :span="2"
        ><el-button
          icon="el-icon-circle-plus-outline"
          class="addMenuBtn"
          @click="dialogFormVisible = true"
          >新增菜单</el-button
        ></el-col
      >
    </el-row>
    <div class="table-box">
      <!-- 表格 -->
      <el-table
        :data="tableData"
        style="width: 100%"
        border
        :header-cell-style="{ 'text-align': 'center' }"
        :cell-style="{ 'text-align': 'center' }"
      >
        <el-table-column label="菜单名称" prop="mname" width="180">
        </el-table-column>
        <el-table-column label="菜单路径" prop="murl"> </el-table-column>
        <el-table-column label="排序" prop="tier" width="80"> </el-table-column>
        <el-table-column label="菜单图标" prop="ask_off"> </el-table-column>
        <el-table-column label="菜单类型">
          <template slot-scope="scope">
            {{ scope.row.type == 0 ? '目录' : '菜单' }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="page"
        :page-size="pagesize"
        layout="total, prev, pager, next"
        :total="tableData.length"
      >
      </el-pagination>
    </div>
    <el-dialog title="新增菜单" :visible.sync="dialogFormVisible">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="菜单类型" prop="type">
          <el-radio-group v-model="ruleForm.type">
            <el-radio label="菜单"></el-radio>
            <el-radio label="目录"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="菜单名称" prop="mname">
          <el-input v-model="ruleForm.mname"></el-input>
        </el-form-item>
        <el-form-item label="菜单路径" prop="murl">
          <el-input v-model="ruleForm.murl"></el-input>
        </el-form-item>
        <el-form-item label="菜单图标" prop="ask_off">
          <el-input v-model="ruleForm.ask_off"></el-input>
        </el-form-item>
        <el-form-item label="上级菜单">
          <el-tree
            :data="data"
            :props="defaultProps"
            @node-click="handleNodeClick"
          ></el-tree>
        </el-form-item>
        <el-form-item label="排序" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input
            type="textarea"
            v-model="ruleForm.remark"
            placeholder="说明......"
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
  name: 'MenuView',
  components: {},
  data() {
    return {
      ruleForm: {
        mname: '', // 菜单名称
        murl: '', // 菜单路径
        tier: '', // 排序
        ask_off: '', // 菜单图标
        type: '', // 菜单类型
        remark: '' // 备注
      },
      rules: {},
      dialogFormVisible: false, // 弹框状态
      userName: '', // 搜索数据
      tableData: [
        {
          id: 1,
          mname: '首页',
          murl: '/',
          tier: 1,
          ask_off: 'http://127.0.0.1/state/img/权限.icon',
          type: 0,
          son: []
        },
        {
          id: 2,
          mname: '基础配置',
          murl: '/jichu',
          tier: 2,
          ask_off: 'http://127.0.0.1/state/img/权限.icon',
          type: 0,
          son: [
            {
              id: 3,
              mname: '角色管理',
              murl: '/role',
              tier: 1,
              ask_off: 'http://127.0.0.1/state/img/权限.icon',
              type: 1
            },
            {
              id: 4,
              mname: '用户管理',
              murl: '/user',
              tier: 2,
              ask_off: 'http://127.0.0.1/state/img/权限.icon',
              type: 1
            }
          ]
        }
      ],
      page: 1, // 当前页
      pagesize: 2, // 每页数量
      // 树型数据
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 每页数量
    handleSizeChange(val) {
      this.pagesize = val
    },
    // 当前页
    handleCurrentChange(val) {
      this.page = val
    },
    // 编辑
    handleEdit() {},
    // 删除
    handleDelete() {},
    // 树型单击
    handleNodeClick() {},
    // 新增
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
      this.dialogFormVisible = false
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
.el-dialog {
  .el-input {
    width: 40%;
  }
}
.table-box {
  margin: 50px 0;
}
.block {
  .el-pagination {
    float: right;
  }
}
.el-row {
  display: flex;
  align-items: center;
  .addMenuBtn {
    background-color: #c2c2fb;
    color: #fff;
  }
}
</style>
