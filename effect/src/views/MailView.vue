<template>
  <div>
    <!-- 切换 -->
    <ul class="title">
      <li @click="flag = true" :class="{ active: flag }">发送箱</li>
      <li @click="flag = false" :class="{ active: !flag }">收件箱</li>
    </ul>
    <!-- 发送箱  -->
    <div class="Sending-box" v-show="flag">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="发件地址">
          <el-input v-model="form.address"></el-input>
          <el-button class="cclist" size="mini">抄送人</el-button>
        </el-form-item>
        <el-form-item label="抄送人">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="发件标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="发件内容">
          <el-input v-model="form.title" type="textarea"></el-input>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button
              size="small"
              style="background-color: #a4adb3; color: #fff"
              >点击上传</el-button
            >
          </el-upload>
        </el-form-item>
        <el-form-item style="float: right">
          <el-button
            style="background-color: #b886f8; color: #fff; margin-right: 20px"
            @click="onSubmit"
            >发送</el-button
          >
          <el-button type="primary">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 收件箱 -->
    <div class="Inbox" v-show="!flag">
      <div class="content">
        <ul>
          <li>xxx邮件</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="text">
          <p class="title">标题:请假申请</p>
          <div>
            <p>内容:或者文件之类的</p>
            <p>如果是文件:下载</p>
          </div>
        </div>
      </div>
      <!-- 取消 -->
      <el-button style="margin: 50px 0 0 800px" type="primary">取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MailView',
  components: {},
  data() {
    return {
      flag: true, //切换状态
      fileList: [], //添加文件数组
      form: {
        address: '', //地址
        name: '', //名字
        title: '', //标题
        content: '' //内容
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 上传文件
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      )
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    // 发送
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
<style scoped lang="scss">
.Inbox {
  margin: 50px 0;
  .content {
    display: flex;
    ul {
      width: 250px;
      li {
        border: 1px solid #ccc;
        height: 50px;
        line-height: 50px;
        text-align: center;
      }
    }
    .text {
      .title {
        width: 800px;
        border: 1px solid #ccc;
        height: 50px;
        line-height: 50px;
        padding-left: 30px;
      }
      div {
        width: 800px;
        height: 400px;
        border: 1px solid #ccc;
        p {
          text-align: center;
          margin: 40px 0;
        }
      }
    }
  }
}
.active {
  background-color: #efefef;
}
.cclist {
  position: absolute;
  right: -80px;
  margin-top: 6px;
}
.Sending-box {
  width: 800px;
  padding: 40px;
}
.title {
  display: flex;
  li {
    width: 180px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #ccc;
  }
}
</style>
