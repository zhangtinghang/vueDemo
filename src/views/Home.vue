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
        <mu-bottom-nav-item title="Recents" icon="restore"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Favorites" icon="favorite"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Nearby" icon="location_on"></mu-bottom-nav-item>
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
      active: 0
    }
  },
  components:{
    ImgList,
    LoadMore,
    MySelf
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding: 0;
  padding-bottom:56px;
}
.mu-bottom-nav{
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
}
</style>


