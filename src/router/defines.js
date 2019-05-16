
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
    },
    {
      path:'map',
      name:'map',
      icon: 'map',
      label: 'map',
      component:()=>import('../view/map')
    },
    {
      path:'table',
      name:'table',
      icon: 'table',
      label: 'Table',
      component:()=>import('../view/table')
    },
    {
      path:'graph',
      name:'graph',
      icon: 'graph',
      label: 'Graph',
      component:()=>import('../view/graph'),
      children:[
        {
          path:'lianxian',
          name:'连线',
          icon: 'lianxian',
          label: 'lianxian',
          component:()=>import('../view/graph/lianxian')
        },
        {
          path:'zIndex',
          name:'连线',
          icon: 'zIndex',
          label: 'zIndex',
          component:()=>import('../view/graph/zIndex')
        },
      ]
    }
  ]
}

export const routers= [
  appRouter
]
