<template>
  <div>
    <!-- 职级岗位 -->
    <div class="rank">
      <p>
        <span>职级名换</span>
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
          >新增职级</el-button
        >
      </p>
      <!-- 表格数据 -->
      <div class="table">
        <template>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="index" label="id" align="center" width="100">
            </el-table-column>
            <el-table-column prop="rank" label="职级名称" align="center">
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
        <!-- 分页功能 -->
        <div class="paging">
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
        :title="isEdit ? '编辑职级' : '新增职级'"
        :visible.sync="dialogFormVisible"
      >
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="职级名称" prop="rank">
            <el-input v-model="ruleForm.rank"></el-input>
          </el-form-item>
          <!-- 三级联动 -->
          <el-form-item label="关联直系">
            <el-tree
              :data="data"
              :prop="defaultProps"
              @node-click="handleNodeClick"
            ></el-tree>
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
            @click="dialogFormVisible = false"
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
  name: 'BasicPage',
  components: {},
  data() {
    return {
      // 树形
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
      },
      isEdit: false, //判断是否编辑状态
      user: '', //用户
      tableData: [
        {
          rank: '中级讲师',
          remarks: '市优秀讲师'
        },
        {
          rank: '高级级讲师',
          remarks: '剩优秀讲师'
        }
      ],
      dialogFormVisible: false, //弹框
      ruleForm: {
        rank: '', //职位
        remarks: '' //备注
      },
      rules: {
        rank: [
          { required: true, message: '请输入职级名称', trigger: 'blur' },
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
      this.isEdit = true
      this.dialogFormVisible = true
      this.ruleForm.rank = row.rank
      this.ruleForm.remarks = row.remarks
      console.log(index, row)
    },
    // 删除
    handleDelete(index, row) {
      console.log(index, row)
    },
    // 新增职级
    added() {
      console.log(1)
      this.isEdit = false
      this.dialogFormVisible = true
    },
    // 树形
    handleNodeClick(data) {
      console.log(data)
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
.rank {
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
