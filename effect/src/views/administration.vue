<template>
  <div>
    <!-- 岗位管理 -->
    <div class="post">
      <p>
        <span>岗位名换</span>
        <el-input
          v-model="user"
          placeholder="请输入姓名"
          size="mini"
          class="inp"
        ></el-input>
        <el-button icon="el-icon-search" size="mini">查询</el-button>
        <el-button icon="el-icon-refresh-left" size="mini">重置</el-button>
        <el-button
          icon="el-icon-circle-plus-outline"
          @click="added"
          class="btn"
          size="mini"
          >新增岗位</el-button
        >
      </p>
      <!-- 表格数据 -->
      <div class="table">
        <template>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="index" label="id" align="center" width="100">
            </el-table-column>
            <el-table-column prop="technology" label="岗位名称" align="center">
            </el-table-column>
            <el-table-column prop="remarks" label="备注" align="center">
            </el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
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
        </template>
        <div class="paging">
          <!-- 分页  -->
          <el-pagination
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </div>
      </div>
      <!-- 新增弹框 -->
      <el-dialog
        :title="isEdit ? '编辑岗位' : '新增岗位'"
        :visible.sync="dialogFormVisible"
      >
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="岗位名称" prop="technology">
            <el-input v-model="ruleForm.technology"></el-input>
          </el-form-item>
          <el-form-item label="备注" prop="remarks">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="说明"
              v-model="ruleForm.remarks"
            >
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button
            type="primary"
            style="background: #b886f8"
            @click="determine"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Administration',
  components: {},
  data() {
    return {
      user: '', //用户
      isEdit: false, //判断是否编辑状态
      tableData: [
        {
          technology: '技术岗',
          remarks: '市技术专家称号' //备注
        },
        {
          technology: '销售岗',
          remarks: '销售冠军' //备注
        }
      ],
      dialogFormVisible: false, //弹框
      ruleForm: {
        technology: '', //职位
        remarks: '' //备注
      },
      rules: {
        technology: [
          { required: true, message: '请输入岗位名称', trigger: 'blur' },
          { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
        ],
        remarks: [
          { required: true, message: '请输入备注', trigger: 'blur' },
          { min: 1, max: 999, message: '不能为空', trigger: 'blur' }
        ]
      },
      currentPage: 1 //分页第一页
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 编辑
    handleEdit(index, row) {
      console.log(index, row)
      this.isEdit = true
      this.ruleForm.technology = row.technology
      this.ruleForm.remarks = row.remarks
      this.dialogFormVisible = true
    },
    // 删除
    handleDelete(index, row) {
      console.log(index, row)
    },
    // 新增岗位
    added() {
      console.log(1)
      this.isEdit = false
      this.dialogFormVisible = true
    },
    // 确定添加
    determine() {
      this.tableData.push(this.ruleForm)
      this.dialogFormVisible = false
    },
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
.paging {
  float: right;
  margin: 20px 0 0 0;
}
.post {
  padding: 20px;
  .inp {
    width: 240px;
    margin: 0 10px;
  }
  .btn {
    background-color: #c2c2fb;
    color: #fff;
  }
  .table {
    margin-top: 50px;
  }
}
</style>
