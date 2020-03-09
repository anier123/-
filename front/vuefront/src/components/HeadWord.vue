<template>
	<div class="headword">
		<div class="van">
		  <div class="icon">
			  <van-icon name="coupon-o" size="25px" @click="showPopup"/>
			  <van-popup v-model="show" position="top" :style="{ height: '20%' }">
				  <div style="width: 100%; ">
					  <p>首页</p>
					  <router-link to="/mine"><p>登录/注册</p></router-link>
					  </div>
			  </van-popup>  
		  </div>
		  <div class="img"><img src="img/logo.png" alt=""></div>
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
		<div class="tabs">
				  <van-tabs v-model="active">
					 <van-tab title="推荐"></van-tab>
				    <van-tab :title="item.name" v-for="(item,index) in titleList" :key="index"></van-tab>
				  </van-tabs>
		</div>
	</div>
</template>

<script>
	import {datas} from '../data.js'
	export default{
		data(){
			return{
				titleList:null,
				active: 2,
				show: false,
				message:false,
				value:""
			}	
		},
		created(){
			this.titleList = datas;
		},
		methods:{
			showPopup() {
			      this.show = true;
			    },
			showPopup1(){
				this.message = true;
			}
		}
	}
	
</script>

<style scoped="scoped" lang="less">
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

</style>
