<template>
  <div>
    <div class="signup-block">
      <div class="signup-title-block">
        <div class="signup-title-line">
          <span class="signup-title">注册</span>
        </div>
      </div>
      <div class="signup-container-block">
        <div class="signup-container flex-column">
          <el-form :model="user" ref="userForm" :rules="userRules">
            <div class="input-item-block">
              <el-form-item prop="name">
                <el-input class="input-style" placeholder="昵称" v-model="user.name"></el-input>
              </el-form-item>
            </div>
            <div class="input-item-block">
              <el-form-item prop="userName">
                <el-input class="input-style" placeholder="用户名" v-model="user.userName"></el-input>
              </el-form-item>
            </div>
            <div class="input-item-block">
              <el-form-item prop="password">
                <el-input class="input-style" type="password" placeholder="密码" v-model="user.password"></el-input>
              </el-form-item>
            </div>
            <div class="input-item-block">
              <el-form-item prop="verifyPassword">
                <el-input class="input-style" type="password" placeholder="重复密码" v-model="user.verifyPassword"></el-input>
              </el-form-item>
            </div>
            <div class="input-item-block">
              <el-form-item prop="phone">
                <el-input class="input-style" placeholder="手机" v-model="user.phone"></el-input>
              </el-form-item>
            </div>
            <div class="input-item-block">
              <el-form-item prop="email">
                <el-input class="input-style" type="email" placeholder="邮箱" v-model="user.email"></el-input>
              </el-form-item>
            </div>
            <div class="input-item-block">
              <button class="signup-button" @click.prevent="submit('userForm')">立即创建</button>
            </div>
            <div class="to-login-block">
              <router-link to="/login">已有账号,直接登录></router-link>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    var validateEmail = (rule, value, callback) => {
      if (value !== '') {
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if (!reg.test(value)) {
          return callback(new Error('请输入有效的邮箱'))
        }
      }
      callback()
    }
    var validatePhone = (rule, value, callback) => {
      if (value !== '') {
        var reg = /^1[3456789]\d{9}$/
        if (!reg.test(value)) {
          return callback(new Error('请输入有效的手机号码'))
        }
      }
      callback()
    }
    return {
      user: {
        name: null,
        email: null,
        phone: null,
        password: null,
        userName: null,
        verifyPassword: null

      },
      userRules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        verifyPassword: [
          { required: true, message: '请重复输入密码', trigger: 'blur' }
        ],
        phone: [
          {validator: validatePhone, trigger: 'blur'}
        ],
        email: [
          {validator: validateEmail, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submit: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.user.password === this.user.verifyPassword) {
            this.addUser()
          } else {
            this.$message.warning('两次输入的密码不一致')
          }
        }
      })
    },
    addUser: function () {
      this.$axios.post('/df/user/add', this.user)
        .then(res => {
          if (res.data.code === 200) {
            this.$router.push({path: '/login'})
          }
        })
        .catch(err => {
          this.$message.error(err)
        })
    }
  }
}
</script>

<style>
  .signup-block {
    padding-top: 50px;
    padding-bottom: 100px;
    background: #ffeeee40;
  }

  .signup-title-line {
    width: 980px;
    height: 28px;
    margin: 0 auto;
    border-bottom: 1px solid #ddd;
    margin-bottom: 28px;
    text-align: center;
  }

  .signup-title {
    height: 56px;
    line-height: 56px;
    margin: 0 auto;
    padding: 0 20px;
    font-size: 40px;
    background: #fff;
    text-align: center;
  }

  .input-item-block {
    margin:0 auto;
    margin-top: 30px;
    width: 420px;
  }

  .signup-button {
    width: 420px;
    height: 40px;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }

  .signup-button:hover {
    background: #33b4de;
    border-color: #33b4de;
    color: #fff;
  }

  .to-login-block {
    margin:0 auto;
    width: 420px;
    text-align: right;
    margin-top: 5px;
  }

  .input-style input {
    height: 40px!important;
  }

  .to-login-block a {
    cursor: pointer;
    font-size: 12px;
    color: #00a1d6;
    border: none;
    text-decoration: none;
  }
</style>
