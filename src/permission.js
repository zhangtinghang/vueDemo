import router from './router'


router.beforeEach((to, from, next) => {
  console.log('-----路由导航------', to, from)
  next()
})

router.afterEach(() => {
})
