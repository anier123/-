import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'
import Science from '../views/Science.vue'
import Numerical from '../views/Numerical.vue'
import Cate from '../views/Cate.vue'
import Natural from '../views/Natural.vue'
import Humanity from '../views/Humanity.vue'
import Health from '../views/Health.vue'
import Live from '../views/Live.vue'
import Funny from '../views/Funny.vue'
import Detail from '../views/Detail.vue'
import DetaNum from '../views/DetaNum.vue'
import DetaNat from '../views/DetaNat.vue'
import DetaLiv from '../views/DetaLiv.vue'
import DetaHum from '../views/DetaHum.vue'
import DetaHea from '../views/DetaHea.vue'
import DetaFun from '../views/DetaFun.vue'
import DetaCat from '../views/DetaCat.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
	meta:{
		taarber:true,
		taarberr:true
	}
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
	meta:{
		taarber:true,
		taarber:true
	}
  },
  {
    path: '/detacat/:id',
    name: 'detacat',
    component: DetaCat,
  	meta:{
  		taarber:true,
		taarber:true
  	}
  },
  {
    path: '/detafun/:id',
    name: 'detafun',
    component: DetaFun,
  	meta:{
  		taarber:true,
		taarber:true
  	}
  },
  {
    path: '/detahum/:id',
    name: 'detahum',
    component: DetaHum,
  	meta:{
  		taarber:true,
		taarber:true
  	}
  },
  {
    path: '/detahea/:id',
    name: 'detahea',
    component: DetaHea,
  	meta:{
  		taarber:true,
		taarber:true
  	}
  },
  {
    path: '/detaliv/:id',
    name: 'detaliv',
    component: DetaLiv,
  	meta:{
  		taarber:true,
		taarber:true
  	}
  },
  {
    path: '/detanat/:id',
    name: 'detanat',
    component: DetaNat,
  	meta:{
  		taarber:true,
		taarber:true
  	}
  },
  {
    path: '/detaNum/:id',
    name: 'detaNum',
    component: DetaNum,
  	meta:{
  		taarber:true,
		taarber:true
  	}
  },
  {
    path: '/science',
    name: 'science',
    component: Science,
	meta:{
		taarber:true,
		taarberr:true,
		auth:true
	}
  },
  {
    path: '/numerical',
    name: 'numerical',
    component: Numerical,
	meta:{
		taarber:true,
		taarberr:true,
		auth:true
	}
  },
  {
    path: '/cate',
    name: 'cate',
    component: Cate,
	meta:{
		taarber:true,
		taarberr:true,
		auth:true
	}
  },
  {
    path: '/natural',
    name: 'natural',
    component: Natural,
	meta:{
		taarber:true,
		taarberr:true,
		auth:true
	}
  },
  {
    path: '/humanity',
    name: 'humanity',
    component: Humanity,
	meta:{
		taarber:true,
		taarberr:true,
		auth:true
	}
  },
  {
    path: '/health',
    name: 'health',
    component: Health,
	meta:{
		taarber:true,
		taarberr:true,
		auth:true
	}
  },
  {
    path: '/live',
    name: 'live',
    component: Live,
	meta:{
		taarber:true,
		taarberr:true,
		auth:true
	}
  },
  {
    path: '/funny',
    name: 'funny',
    component: Funny,
	meta:{
		taarber:true,
		taarberr:true,
		auth:true
	}
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach( function(t,f,n){
	if(t.meta.auth){
		if( localStorage.getItem("islog")){
			n();
		}
		else{
			n('/mine?t='+t.path)
		}
		
	}
	else{
		n();
	}
		
})

export default router
