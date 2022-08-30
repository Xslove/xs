import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    redirect: '/homepage',
    component: () => import('../views/AboutView.vue'),
    children: [
      {
        path: '/homepage',
        name: 'homepage',

        component: () => import('../views/homepage.vue')
      },
      // 登录日志
      {
        path: '/Loginlog',
        name: 'Loginlog',
        component: () => import('../views/Loginlog')
      },
      // 操作日志
      {
        path: '/Operationlog',
        name: 'Operationlog',
        component: () => import('../views/Operationlog.vue')
      },
      // 材料管理
      {
        path: '/Material',
        name: 'Material',
        component: () => import('../views/Material.vue')
      },
      // 工资条录入
      {
        path: '/Payrollentry',
        name: 'Payrollentry',
        component: () => import('../views/Payrollentry.vue')
      },
      {
        // 菜单管理
        path: '/menu',
        name: 'Menu',
        component: () => import('../views/MenuView.vue')
      },
      {
        // 部门管理
        path: '/branch',
        name: 'Branch',
        component: () => import('../views/branchView.vue')
      },
      {
        // 待办事项
        path: '/waitItem',
        name: 'WaitItem',
        component: () => import('../views/waitItemView.vue')
      },
      // 用户管理
      {
        path: '/user',
        name: 'User',
        component: () => import('../views/UserView.vue')
      },
      // 角色管理
      {
        path: '/role',
        name: 'Role',
        component: () => import('../views/RoleView.vue')
      },
      // 邮件处理
      {
        path: '/mail',
        name: 'Mail',
        component: () => import('../views/MailView.vue')
      },
      // 权限管理
      {
        path: '/power',
        name: 'Power',
        component: () => import('../views/PowerView.vue')
      },
      {
        // 职级岗位
        path: '/BasicPage',
        name: 'BasicPage',
        component: () => import('../views/BasicPage.vue')
      },
      {
        // 岗位管理
        path: '/administration',
        name: 'Administration',
        component: () => import('../views/administration.vue')
      },
      {
        // 已办事项
        path: '/Completeditems',
        name: 'Completeditems',
        component: () => import('../views/CompletedItems.vue')
      },
      // 配置审批流程
      {
        path: '/approvalprocess',
        name: 'Approvalprocess',
        component: () => import('../views/ApprovalprocessView.vue')
      },
      // 配置审批类型
      {
        path: '/approvaltype',
        name: 'Approvaltype',
        component: () => import('../views/ApprovaltypeView.vue')
      },
      // 我发起的
      {
        path: '/launch',
        name: 'Launch',
        component: () => import('../views/LaunchView.vue')
      }
    ]
  },
  {
    path: '/Sidebar',
    name: 'Sidebar',
    component: () => import('../components/Sidebar')
  }
]

const router = new VueRouter({
  routes
})

export default router
