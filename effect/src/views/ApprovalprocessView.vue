<template>
  <div>
    <!-- 添加按钮 -->
    <div class="top">
      <el-button
        class="addBtn"
        icon="el-icon-plus"
        @click="dialogFormVisible = true"
        >添加审批流程</el-button
      >
    </div>
    <!-- 审批流程表 -->
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column label="id" type="index"> </el-table-column>
      <el-table-column prop="name" label="流程名称"> </el-table-column>
      <el-table-column prop="name" label="状态">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.status == 0">启用</el-tag>
          <el-tag type="danger" v-else>禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="最后修改人"> </el-table-column>
      <el-table-column prop="date" label="最后修改时间"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            class="edit-btn"
            icon="el-icon-edit"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            class="del-btn"
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="page-box">
      <el-pagination background layout="prev, pager, next" :total="100">
      </el-pagination>
    </div>

    <!-- 审批流程对话框 -->

    <el-dialog title="审批流程" :visible.sync="dialogFormVisible" width="45%">
      <el-form :model="form">
        <el-form-item label="流程类型">
          <el-select v-model="form.region" placeholder="请假流程">
            <el-option label="请假流程" value="shanghai"></el-option>
            <el-option label="换车流程" value="beijing"></el-option>
            <el-option label="出差流程" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio v-model="radio" label="1">启用</el-radio>
          <el-radio v-model="radio" label="2">禁用</el-radio>
        </el-form-item>
        <el-form-item label="流程说明">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item class="flow-box">
          <p>流程审批</p>
          <div class="box">
            <span>第一级审批</span>
            <el-select v-model="value1" placeholder="当前部门负责人">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="box">
            <span>第二级审批</span>
            <el-select v-model="value2" placeholder="当前部门负责人">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="box">
            <span>第三级审批</span>
            <el-select v-model="value3" placeholder="当前部门负责人">
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <el-button class="addBtn" icon="el-icon-plus">添加审批层级</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button
          class="sub-btn"
          type="primary"
          @click="dialogFormVisible = false"
          >立即创建</el-button
        >
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ApprovalprocessView',
  components: {},
  data() {
    return {
      // 表格数据
      tableData: [
        {
          date: '2022年5月20日 14:09:23',
          name: '王小虎',
          status: 0
        },
        {
          date: '2022年5月20日 14:09:23',
          name: '王小虎',
          status: 1
        }
      ],
      // 审批流程对话框数据
      dialogFormVisible: false, //添加审批流程对话框状态
      form: {
        name: '',
        region: '',
        date1: '',
        date2: ''
      },
      formLabelWidth: '120px',
      radio: '1',

      // 一级审批
      value1: '',
      options1: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      // 二级审批
      value2: '',
      options2: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      // 三级审批
      value3: '',
      options3: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 编辑
    handleEdit(index, row) {
      console.log(index, row)
    },
    // 删除
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>
<style scoped lang="scss">
.box {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 15px 0;
  span {
    margin-right: 15px;
  }
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
  background-color: #7aabf6;
  color: white;
}
.del-btn {
  background-color: #f26161;
  color: white;
}
</style>
