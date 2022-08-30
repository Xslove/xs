<template>
  <div>
    <!-- 添加按钮 -->
    <div class="top">
      <el-button
        class="addBtn"
        icon="el-icon-plus"
        @click="dialogFormVisible = true"
        >添加类型</el-button
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
      <el-table-column prop="name" label="类型名称"> </el-table-column>
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

    <!-- 添加类型弹出框 -->
    <el-dialog
      title="添加流程类型"
      :visible.sync="dialogFormVisible"
      width="40%"
    >
      <el-form :model="form">
        <el-form-item label="类型名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="类型模板" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请假模板">
            <el-option label="用车模板" value="shanghai"></el-option>
            <el-option label="借款模板" value="beijing"></el-option>
            <el-option label="出差模板" value="beijing"></el-option>
            <el-option label="报销模板" value="beijing"></el-option>
            <el-option label="转正模板" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogFormVisible = false"
          class="sub-btn"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ApprovaltypeView',
  components: {},
  data() {
    return {
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
      // 添加类型弹出框数据
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
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
.sub-btn {
  background-color: #b886f8;
  color: white;
}
</style>
