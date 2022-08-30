<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
}
.el-input__inner {
  border-radius: 16px;
}
// 去除input框点击蓝色边框
.el-input__inner:focus {
  border-color: #d9bffb;
}
// 去除Button蓝色边框
.el-button:focus,
.el-button:hover {
  background-color: #d9bffb;
  border-color: #d9bffb;
}
.el-form-item__error {
  margin-left: 60px;
}
.el-form-item__content {
  line-height: 16px;
}
</style>
