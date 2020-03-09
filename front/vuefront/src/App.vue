<template>
  <div id="app">
	  <div v-show="$route.meta.taarber">
			  <div class="van">
				  <div class="icon">
					  <van-icon name="coupon-o" size="25px" @click="showPopup"/>
					  <van-popup v-model="show" closeable close-icon-position="top-left" position="top" :style="{ height: '20%' }">
						  <div style="width: 100%; ">
							  <router-link to="/"><p>首页</p></router-link>
							  <router-link to="/mine"><p>登录/注册</p></router-link>
							  </div>
					  </van-popup>  
				  </div>
				  <div class="img">
					  <router-link to="/">
						  <img src="img/logo.png" alt="">
					  </router-link>
				  </div>
				  <div class="icon2">
					  <van-icon name="search" size="25px" @click="showPopup1"/>
					  <van-popup v-model="message" position="top" :style="{ height: '8%' }">
							<div style="width: 100%; ">
								<van-cell-group>
								  <van-field v-model="value" placeholder="请输入你感兴趣的"/>
								</van-cell-group>
							</div>
					  </van-popup>
				  </div> 
			  </div>
	  </div>
	  <div v-show="$route.meta.taarberr">
		  <div class="tabs" >
		  		  <!-- line-height="0px" -->
				 
					  <van-tabs v-model="active" @click="onClick" line-width="0px">
						 <!-- <router-link :to="titlePths[titleIndex].path"> -->
						<van-tab :title="item.name" v-for="(item,index) in titleList" :key="index" line-width="0"></van-tab>
						<!-- </router-link> -->
					  </van-tabs>
				  
		  			  
		  </div>
	  </div>
	  
	  
    <router-view/>
  </div>
</template>
<script>
	import {datas} from '@/data.js'
	import {paths} from '@/datas.js'
	export default{
		data(){
			return {
				titleList:null,
				titlePths:null,
				active: 2,
				show: false,
				message:false,
				value:"",
				truel:true,
				titleIndex:null
			}
		},
		created(){
			// this.titleList = datas;
			this.titlePths = paths;
			console.log(this.titleList);
			this.requestCategoryList();
		},
		methods:{
			requestCategoryList(){
				this.$api.getCategoryList().then(res=>{
					console.log("获取分类列表", res)
					if(res.status == 200){
						this.titleList = res.data
					}
				}).catch(err=>{
					console.log("失败了", err)
				})
			},
			showPopup() {
			      this.show = !this.show;
			    },
			showPopup1(){
				this.message = !this.message;
			},
			onClick(name, title) {
			      this.titleIndex = name;
				  this.$router.push(this.titlePths[this.titleIndex])
				  
			}
		}
	}
</script>
<style scoped="scoped" lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .van{
	  width: 100%;
	  height: 44px;
	  position: relative;
	  .icon{
		  
		  width: 20px;
		  height: 20px;
		  position: absolute;
		  left: 10px;
		  top: 10px;
	  }
	  .img{
		  width: 42px;
		  height: 28px;
		  line-height: 44px;
		  position: absolute;
		  top: 0;
		  left: 0;
		  right: 0;
		  bottom: 0;
		  margin: auto;
		  img{
			  width: 100%;
		  }
	  }
	  .icon2{
		  width: 20px;
		  height: 20px;
		  position: absolute;
		  right: 10px;
		  top: 10px;
	  }
	  
	  
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
