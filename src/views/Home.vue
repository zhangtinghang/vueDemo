<template>
  <div class="home">
    <HelloWorld message="Welcome to sap Vue.js App"/>
    <router-link to="about">关于</router-link>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
