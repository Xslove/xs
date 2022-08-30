<template>
  <div class="box">
    <div class="minbox">
      <!-- 登录 -->
      <div class="centerbox">
        <p>OA系统登陆</p>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <el-form-item prop="name">
            <el-input
              v-model="ruleForm.name"
              class="inp"
              placeholder="请输入用户名"
              prefix-icon="el-icon-user-solid"
            ></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input
              v-model="ruleForm.pwd"
              class="inp"
              show-password
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
            ></el-input
            ><br />

            <span class="wang" @click="forget">忘记密码?</span>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="input"
              placeholder="验证码"
              class="checking"
            ></el-input>
            <span class="checkimg">验证码图片</span>
          </el-form-item>
          <el-form-item>
            <el-button class="check" @click="enroll">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 修改密码弹框 -->
    <el-dialog title="修改密码" :visible.sync="dialogVisible">
      <el-form ref="form" :model="form" label-width="80px" :rules="modify">
        <el-form-item label="用户名:" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="新密码:" prop="pwd">
          <el-input v-model="form.pwd"></el-input>
        </el-form-item>
        <el-form-item label="再次输入" prop="pwds">
          <el-input v-model="form.pwds"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false" class="btn"
          >确 定</el-button
        >
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      // 修改密码
      form: {
        name: '',
        pwd: '',
        pwds: ''
      },
      dialogVisible: false, //弹框状态
      // 登录
      ruleForm: {
        name: '',
        pwd: ''
      },
      input: '',
      // 登录校验
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      // 修改密码校验
      modify: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        pwds: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  //过滤器
  filters: {},
  created() {},
  //计算属性
  computed: {},
  mounted() {},
  methods: {
    // 忘记密码
    forget() {
      this.dialogVisible = true
    },
    // 登录按钮
    enroll() {
      this.$router.push('/about')
    }
  }
}
</script>
<style scoped lang="scss">
.box {
  width: 100%;
  height: 100%;
  .minbox {
    width: 100%;
    height: 100vh;
    background: url('../../public/login.png') no-repeat;
    background-size: 100% 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    .centerbox {
      width: 450px;
      height: 380px;
      background-color: #fff;
      border-radius: 30px;
      position: relative;
      p {
        font-size: 24px;
        margin: 20px 0;
      }
      .inp {
        width: 80%;
      }
      .checking {
        width: 50%;
      }
      .checkimg {
        width: 100px;
        height: 40px;
        border-radius: 15px;
        display: inline-block;
        border: 1px solid #dcdfe6;
        margin-left: 20px;
        color: #dcdfe6;
        line-height: 40px;
      }
      .check {
        width: 60%;
        background-color: #d9bffb;
        height: 55px;
        color: #fff;
      }
      .wang {
        float: right;
        margin-right: 60px;
        color: #ffde92;
        // margin-top: 20px;
      }
    }
  }
}
.btn {
  background-color: #d9bffb;
}
</style>
