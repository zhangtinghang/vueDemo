import router from './router'
import { getUser } from './utils/auth'



router.beforeEach((to, from, next) => {
  console.log('-----路由导航------', to, from)
  //判断当前路由状态
  if(getUser()){
    next()
  }else{
    if(to.path == "/"){
      next();
    }else{
      next({ path: '/' }) // 否则全部重定向到登录页
    }
      
  }
})

router.afterEach(() => {
})
