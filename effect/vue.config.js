const { defineConfig } = require('@vue/cli-service')
console.log(process.env)
let port = 8888
// console.log(process.env);
module.exports = defineConfig({
  //第三方依赖是否需要转移，避免出现第三方的转移
  transpileDependencies: true, //是否在开发环境下通过 eslin-loader 在每次保存时 lint 代码。
  lintOnSave: false, //代理端口配置
  devServer: {
    //代理的地址
    port,
    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target:
          process.env.VUE_APP_MOCK_ENABLE === true
            ? `http://localhost:9999`
            : process.env.VUE_APP_CONSOLE_URL,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
})
