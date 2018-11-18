<template>
  <div class="demo_container">
    <mu-container>
      <div class="demo_nav_item" v-if="active === 0">
        <ImgList></ImgList>
      </div>
      <div class="demo_nav_item" v-if="active === 1">
        <LoadMore></LoadMore>
      </div>
      <div class="demo_nav_item" v-if="active === 2">
        <MySelf></MySelf>
      </div>
      <mu-bottom-nav :value.sync="active">
        <mu-bottom-nav-item :title="home" icon="restore"></mu-bottom-nav-item>
        <mu-bottom-nav-item :title="list" icon="favorite"></mu-bottom-nav-item>
        <mu-bottom-nav-item :title="my" icon="location_on"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>

<script>
import ImgList from '@/components/imgList'
import LoadMore from '@/components/loadMore'
import MySelf from '@/components/mySelf'
export default {
  name: 'home',
  data () {
    return {
      active: 0,
    }
  },
  components:{
    ImgList,
    LoadMore,
    MySelf
  },
  computed:{
    home:function(){
      return this.$t('home');
    },
    list:function(){
      return this.$t('list');
    },
    my:function(){
      return this.$t('me');
    }
  }
}
</script>
<style lang="scss" scoped>
.demo_container{
  height:100%;
  width: 100%;
}
.container{
  height: 100%;
  padding: 0;
}
.demo_nav_item{
  padding-bottom: 56px;
}
.mu-bottom-nav{
  position: fixed;
  bottom: 0;
  z-index: 999;
  width: 100%;
}
</style>


