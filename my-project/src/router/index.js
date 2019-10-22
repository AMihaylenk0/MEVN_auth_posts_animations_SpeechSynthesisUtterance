import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cssanimation from '@/components/Cssanimation'
import TextAnimation5 from '@/components/CssContainers/TextAnimation5'
import Cards from '@/components/CssContainers/Cards'
import anim1 from '@/components/CssContainers/anim1'
import TextAnimation2 from '@/components/CssContainers/TextAnimation2'
import TextAnimation3 from '@/components/CssContainers/TextAnimation3'
import TextAnimation4 from '@/components/CssContainers/TextAnimation4'
import Three from '@/components/CssContainers/Three'
import cube3d from '@/components/CssContainers/cube3d'
import rotation from '@/components/CssContainers/rotation'
import PopmotionJS from '@/components/CssContainers/PopmotionJS'
import Cards3D from '@/components/CssContainers/Cards3D'
import WPM from '@/components/CssContainers/WPM'
import CanvasColor from '@/components/CssContainers/CanvasColor'
import SpiralText from '@/components/CssContainers/SpiralText'
// Login
import login from '@/components/login'
import register from '@/components/register'
import dashboard from '@/components/dashboard'
// CRUD
import Posts from '@/components/CRUD/Posts'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cssanimations',
      name: 'Cssanimation',
      component: Cssanimation
    },
    {
      path: '/TextAnimation5',
      name: 'TextAnimation5',
      component: TextAnimation5
    },
    {
      path: '/Cards',
      name: 'Cards',
      component: Cards
    },
    {
      path: '/TextAnimation2',
      name: 'TextAnimation2',
      component: TextAnimation2
    },
    {
      path: '/anim1',
      name: 'anim1',
      component: anim1
    },
    {
      path: '/TextAnimation3',
      name: 'TextAnimation3',
      component: TextAnimation3
    },
    {
      path: '/TextAnimation4',
      name: 'TextAnimation4',
      component: TextAnimation4
    },
    {
      path: '/Three',
      name: 'Three',
      component: Three
    },
    {
      path: '/cube3d',
      name: 'cube3d',
      component: cube3d
    },
    {
      path: '/rotation',
      name: 'rotation',
      component: rotation
    },
    {
      path: '/PopmotionJS',
      name: 'PopmotionJS',
      component: PopmotionJS
    },
    {
      path: '/Cards3D',
      name: 'Cards3D',
      component: Cards3D
    },
    {
      path: '/WPM',
      name: 'WPM',
      component: WPM
    },
    {
      path: '/CanvasColor',
      name: 'CanvasColor',
      component: CanvasColor
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/Posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/SpiralText',
      name: 'SpiralText',
      component: SpiralText
    }
  ]

})
