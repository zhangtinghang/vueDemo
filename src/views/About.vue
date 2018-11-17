<template>
  <div class="login">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>

    <!-- <h1>{{$t('name')}}This is an about page. </h1>
    <div @click="changeLangEvent">中文</div> -->
  </div>
</template>
<script>

export default {
  created() {
    this.getUserInfo();
  },
  methods:{
    getUserInfo(){
     //请求'/user/userinfo'接口
      this.axios.get('/user/userinfo')
      .then(({data})=>{
        //打印mock data
        console.log(data);
        if(data.error === 0){
          this.userInfo = data.data;
        }else{
          this.userInfo = {};
        }
      });
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
