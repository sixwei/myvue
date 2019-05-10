
// 进行路由的统一管理
export const appRouter = {
  path: '/',
  name: 'root',
  component:()=> import('../view'),
  redirect:'/home',
  meta:{
    menuShow: false
  },

  children:[
    {
      path:'home',
      name:'home',
      icon: 'home',
      label: '首页',
      component:()=>import('../view/home')
    }
  ]
}

export const routers= [
  appRouter
]
