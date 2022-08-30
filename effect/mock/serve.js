const express = require('express') //引入express
const Mock = require('mockjs') //引入mock
const login = require('./common/login')
const loginsearch = require('./common/loginsearch')
const app = express() //实例化express
// 登录接口
app.use('/user/login', function (req, res) {
  res.json(
    Mock.mock({
      status: 200,
      msg: '登录成功',
      login
    })
  )
})
app.use('/home/loginsearch', function (req, res) {
  res.json(
    Mock.mock({
      status: 200,
      msg: '登录成功',
      loginsearch
    })
  )
})
// 实例化监听接口
app.listen(9999, () => {
  console.log('监听接口', '9999')
})
