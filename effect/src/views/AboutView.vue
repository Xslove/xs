<template>
  <div>
    <el-container>
      <el-aside :width="isCollapse ? '60px' : '200px'">
        <Sidebar :isCollapse="isCollapse"></Sidebar>
      </el-aside>
      <el-container>
        <el-header>
          <Head :isCollapse="isCollapse" @to="to"></Head>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Head from '../components/MyHeader.vue'
import Sidebar from '../components/Sidebar.vue'
export default {
  name: 'AboutView',
  components: {
    Sidebar,
    Head
  },
  data() {
    return {
      isCollapse: false
    }
  },
  //过滤器
  filters: {},
  created() {},
  //计算属性
  computed: {},
  mounted() {},
  methods: {
    to() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>
<style scoped lang="scss">
.el-header {
  border-bottom: 2px solid #bbbbbb;
}
</style>
