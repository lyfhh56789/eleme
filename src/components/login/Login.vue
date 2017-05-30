<template>
    <div class="login">
      <e-header title="登录" :un-use-login-method="unUseLoginMethod" @changeLoginMethod="loginMethodChanged"></e-header>
      <div class="App-2KuIB">
        <template v-if="currentLoginMethodType === 'sms'">
          <form class="MessageLogin-2Z-d6">
            <section class="MessageLogin-FsPlX">
              <input :value="phoneNumber" @input="checkPhoneNumber($event.target.value)" type="tel" maxlength="11" placeholder="手机号">
              <button @click="getCode" :disabled="!phoneNumberIsValidate || getCodeWaitSec !== 30" class="CountButton-3e-kd">{{ getCodeWaitSec !== 30 ? '已发送' + getCodeWaitSec + 'S' : '获取验证码' }}</button>
            </section>
            <section class="MessageLogin-FsPlX">
              <input v-model="code" type="tel" maxlength="8" placeholder="验证码">
            </section>
          </form>
        </template>
        <template v-else>
          <form class="PasswordLogin-1aKYa">
            <section class="PasswordLogin-2RT6e"><input v-model="username" type="text" placeholder="手机/邮箱/用户名"></section>
            <section class="PasswordLogin-2RT6e">
              <input v-if="hidePwd" v-model="password" placeholder="密码" type="password">
              <input v-else v-model="password" placeholder="密码" type="text">
              <div @click="hidePwd = !hidePwd" class="SwitchButton-2b6RO" :class="{'SwitchButton-3BmOw': hidePwd, 'SwitchButton-3wLB9': !hidePwd}">
                <div class="SwitchButton-1rBfm"></div>
                <span v-show="!hidePwd" class="SwitchButton-Ulw-C">abc</span>
                <span v-show="hidePwd" class="SwitchButton-6-7rY">···</span>
              </div>
            </section>
          </form>
        </template>
        <section v-if="currentLoginMethodType === 'sms'" class="MessageLogin-15xD9">温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意<a href="//h5.ele.me/service/agreement/" target="_blank">《用户服务协议》</a></section>
        <button @click="toLogin" :class="{'PasswordLogin-t5tCE': currentLoginMethodType === 'pwd'}" class="SubmitButton-2wG4T">登录</button>
      </div>
      <div class="App-3T916">
        <router-link :to="{name: 'about'}">
          <span>关于我</span>
        </router-link>
      </div>
    </div>
</template>
<style scoped>
  .App-2KuIB {
    max-width: 12rem;
    margin: 0 auto;
    flex-grow: 1;
    margin-top: .4rem;
  }
  .MessageLogin-2Z-d6 {
    border-top: 1px solid #ddd;
  }
  .MessageLogin-FsPlX {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .426667rem;
    height: 1.2rem;
    border-bottom: 1px solid #ddd;
    background: #fff;
    font-size: .4rem;
  }
  button, input {
    outline: none;
    border: none;
    font-size: inherit;
    font-family: inherit;
  }
  .MessageLogin-FsPlX input {
    flex-grow: 1;
    padding: .133333rem 0;
    height: .8rem;
    color: #333;
    line-height: .533333rem;
  }
  .MessageLogin-FsPlX input::-webkit-input-placeholder {
    color: #ccc
  }
  .MessageLogin-FsPlX input:-ms-input-placeholder {
    color: #ccc
  }
  .MessageLogin-FsPlX input::placeholder {
    color: #ccc
  }
  .CountButton-3e-kd {
    padding: 0;
    width: 2.666667rem;
    height: .8rem;
    border-radius: .08rem;
    background: #0097ff;
    color: #fff;
    text-align: center;
    font-size: .373333rem;
    line-height: .8rem;
  }
  .CountButton-3e-kd[disabled] {
    background: #ccc;
  }
  .MessageLogin-15xD9 {
    margin: .24rem auto;
    width: 9.2rem;
    color: #999;
    font-size: .32rem;
    line-height: .426667rem;
  }
  .MessageLogin-15xD9 a {
    color: #3b95e9;
  }
  .SubmitButton-2wG4T {
    display: block;
    margin: 0 auto;
    padding: 0;
    width: 9.2rem;
    height: 1.173333rem;
    border-radius: .053333rem;
    background: #4cd964;
    color: #fff;
    text-align: center;
    font-size: .426667rem;
    line-height: 1.173333rem;
  }
  .App-3T916 {
    display: flex;
    justify-content: center;
    margin: .533333rem auto;
  }
  .App-3T916 span {
    padding: 0 .133333rem;
    color: #999;
    font-size: .32rem;
    line-height: .586667rem;
  }
  /*  密码登录form  */
  .PasswordLogin-1aKYa {
    border-top: 1px solid #ddd;
  }
  .PasswordLogin-2RT6e {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .426667rem;
    height: 1.2rem;
    border-bottom: 1px solid #ddd;
    background: #fff;
    font-size: .4rem;
  }
  .PasswordLogin-2RT6e input {
    flex-grow: 1;
    padding: .133333rem 0;
    height: .8rem;
    color: #333;
    line-height: .533333rem;
  }
  .PasswordLogin-t5tCE {
    margin: .4rem auto;
  }
  .SwitchButton-2b6RO {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 .08rem;
    width: 1rem;
    height: .4rem;
    border: 1px solid #ddd;
    border-radius: .2rem;
    -webkit-transition: background-color .3s,border-color .3s;
    transition: background-color .3s,border-color .3s;
  }
  .SwitchButton-3BmOw {
    justify-content: flex-end;
  }
  .SwitchButton-3wLB9 {
    box-sizing: border-box;
    justify-content: flex-start;
    border-color: #3190e8;
    background: #3190e8;
  }
  .SwitchButton-1rBfm {
    position: absolute;
    top: -.026667rem;
    left: -.026667rem;
    width: .453333rem;
    height: .453333rem;
    border: 1px solid #ddd;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0.026667rem 0.053333rem 0 rgba(0,0,0,.1);
    transition: transform .3s,-webkit-transform .3s;
  }
  .SwitchButton-3wLB9 .SwitchButton-1rBfm {
    -webkit-transform: translate3d(.626667rem,0,0);
    transform: translate3d(.626667rem,0,0);
  }
  .SwitchButton-Ulw-C {
    font-size: .266667rem;
    color: #fff;
  }
  .SwitchButton-6-7rY {
    font-size: .373333rem;
    color: #333;
  }
</style>
<script>
  import EHeader from '../common/EHeader.vue'

  export default{
    data () {
      return {
        loginMethods: {
          pwd: {
            type: 'pwd',
            name: '密码登录'
          },
          sms: {
            type: 'sms',
            name: '短信登录'
          }
        },
        currentLoginMethodType: 'sms', // 当前登录类型
        unUseLoginMethod: '密码登录',
        phoneNumber: '', // 手机号码
        code: '', // 验证码
        canGetCode: true, // 是否满足获取验证码的条件
        getCodeWaitSec: 30, // 是否满足获取验证码的条件
        timer: null,
        username: '', // 手机号码/邮箱/用户名
        password: '', // 登录密码
        phoneNumberIsValidate: false, // 输入的手机号码有效
        hidePwd: true
      }
    },
    methods: {
      loginMethodChanged () { // 更换登录方式
        this.unUseLoginMethod = this.loginMethods[this.currentLoginMethodType].name
        if (this.currentLoginMethodType === 'sms') {
          this.currentLoginMethodType = 'pwd'
          this.phoneNumber = ''
          this.phoneNumberIsValidate = false
          this.code = ''
          if (this.timer) {
            clearInterval(this.timer)
            this.timer = null
            this.getCodeWaitSec = 30
          }
        } else {
          this.currentLoginMethodType = 'sms'
          this.username = ''
          this.password = ''
        }
      },
      checkPhoneNumber (value) {
        if (value.length === 11) {
          let reg = /^1[3|4|5|8][0-9]\d{8}$/g // 校验是否为手机号码
          let isValidate = reg.test(value)
          isValidate ? this.phoneNumberIsValidate = true : this.phoneNumberIsValidate = false
        } else {
          this.phoneNumberIsValidate = false
        }
        this.phoneNumber = value
      },
      getCode () {
        if (this.timer) return
        this.timer = setInterval(() => {
          this.getCodeWaitSec--
          if (this.getCodeWaitSec === 0) {
            clearInterval(this.timer)
            this.getCodeWaitSec = 30
            this.timer = null
          }
        }, 1000)
      },
      toLogin () {
        // 两种登录方式进行不同的校验
        if (this.currentLoginMethodType === 'sms') {
          if (!this.phoneNumberIsValidate) {
            window.alert('请填写正确的手机号')
            return
          }
          if (!this.code) {
            window.alert('请填写验证码')
            return
          }
        } else if (this.currentLoginMethodType === 'pwd') {
          if (!this.username) {
            window.alert('请输入用户名')
            return
          }
          if (!this.password) {
            window.alert('请输入密码')
            return
          }
        }
        window.alert('完成验证')
      }
    },
    created () {
    },
    components: {
      EHeader
    }
  }
</script>
