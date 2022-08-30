<template>
  <div class="box">
    <p>
      <img src="../../public/v2_rgsxtp.png" alt="" class="img" />
      <span v-if="!isCollapse">OA管理系</span>
    </p>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#7aabf6"
      text-color="#fff"
      active-text-color="#fff"
      :collapse="isCollapse"
      unique-opened
      router
    >
      <el-menu-item index="/homepage">
        <i class="el-icon-setting"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>基础配置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/user">用户管理</el-menu-item>
          <el-menu-item index="/role">角色管理</el-menu-item>
          <el-menu-item index="/power">权限管理</el-menu-item>
          <el-menu-item index="/menu">菜单管理</el-menu-item>
          <el-menu-item index="/BasicPage">职级管理</el-menu-item>
          <el-menu-item index="/administration">岗位管理</el-menu-item>
          <el-menu-item index="/Operationlog">操作日志</el-menu-item>
          <el-menu-item index="/Loginlog">登录日志</el-menu-item>
          <!-- <el-menu-item index="1-1">字典日志</el-menu-item> -->
          <!-- <el-menu-item index="1-1">部门日志</el-menu-item> -->
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>配置工作流</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/approvalprocess">配置审批流程</el-menu-item>
          <el-menu-item index="/approvaltype">配置审批类型</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>材料管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/Material">材料管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>企业通讯</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/mail">邮箱处理</el-menu-item>
          <el-menu-item index="/Payrollentry">工资条录入</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">合同管理</span>
      </el-menu-item> -->
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>OA审批</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/waitItem">待办事项</el-menu-item>
          <el-menu-item index="/Completeditems">已办事项</el-menu-item>
          <el-menu-item index="/launch">我发起的</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ['isCollapse'],
  name: 'Sidebar',
  components: {},
  data() {
    return {}
  },
  //过滤器
  filters: {},
  created() {},
  //计算属性
  computed: {},
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped lang="scss">
.el-menu-vertical-demo {
  height: 100vmax;
}
.box {
  background-color: #7aabf6;
  p {
    display: flex;
    font-size: 20px;
    color: #fff;
    line-height: 60px;
    .img {
      width: 50px;
      height: 50px;
      margin: 10px;
    }
  }
}
</style>
