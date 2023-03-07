<template>
  <div class="login">
    <el-form
    label-width="100px"
      :model="userInfo"
      status-icon
      :rules="rules"
      ref="ruleForm"
    >
      <el-form-item  class="form" label="用户名" prop="username">
        <el-input
        class="username-inp"
          type="text"
          v-model="userInfo.username"
          placeholder="请输入用户名(任意即可)"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
        class="username-inp"
        v-model="userInfo.password"
          placeholder="请输入密码(token)"
          type="password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button type="primary" @click="back">返回</el-button>
    </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
        userInfo:{
            username:'',
            password:''
        },
      rules: {
        username: [{ required:true,message:'请输入用户名', trigger: "blur" }],
        password: [{ required:true,message:'请输入密码', trigger: "blur" }],
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
   console.log('要去登录发送请求');
   this.$router.push('/')
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    back(){
        this.$router.push('/')
    }
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100vh;
  background-color: #e1e1e1;
  overflow: hidden;
  .el-form{
    padding: 0 auto;
    margin: 0 auto;
    min-width: 300px;
    max-width: 650px;
    background-color: #fff;
    padding-top: 40px;
    padding-bottom: 20px;
    margin-top: 20px;
    padding-left: 40px;
    padding-right: 40px;
  
  }
  .username-inp{
    width: 300px;
    height: 40px;
  }
}
// .form{
//     margin-top: 30px;
// padding-top: 20px;
// }
</style>