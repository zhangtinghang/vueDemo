<template>
  <div class="login">
    <mu-container>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item label="用户名" prop="username" :rules="usernameRules">
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password" :rules="passwordRules">
            <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="primary" @click="submit">提交</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-container>
  </div>
</template>
<script>
// import validator from '@/utils/validator'

export default {
  data(){
    return {
      usernameRules: [
        { validate: (val) => !!val, message: '必须填写用户名'},
        { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
      ],
      passwordRules: [
        { validate: (val) => !!val, message: '必须填写密码'},
        { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
      ],
      validateForm: {
        username: '',
        password: ''
      }
    }
  },
  methods:{
    submit () {
      this.$refs.form.validate().then((result) => {
        console.log('form valid: ', result)
        if(result){
          this.$store.dispatch('loginByUsername', this.validateForm).then(() => {
            this.$router.push({ path: '/Home' })
          }).catch(() => {
            
          })
        }else{
          this.$toast.error('请检查填写信息！');
        }
      });
    },
    clear () {
      this.$refs.form.clear();
      this.validateForm = {
        username: '',
        password: ''
      };
    },
    changeLangEvent(){
       if ( this.$i18n.locale === 'zh' ){
         this.$i18n.locale = 'en'
       }else{
          this.$i18n.locale = 'zh'
       }
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    width: 100%;
    height: 100%;
    position: relative;
    background: rgba(131, 255, 255,.5);
    background: linear-gradient(180deg, rgba(131, 255, 255, .5) 0%, rgba(78, 165, 235, .5) 100%);
  }
  .container{
    position: relative;
    top: 50%;
    transform: translateY(-80%);
  }
</style>

