<template>
  <div class="home">
	  <!-- <div style="position: fixed; top: 0px; z-index: 100px; width: 100%; height: 88px; background-color: white;"><HeadWord></HeadWord></div> -->
	  <div class="mne" style="position: absolute; top: 90px; right: 0px; left: 0px; bottom: 0px; overflow-y: auto;">
		 <div class="lun">
		 		  <van-swipe :autoplay="3000" indicator-color="white">
		 		    <van-swipe-item v-for="(item,index) in lunList" :key="index">
		 				<img :src="item.img" alt="" style="width: 100%; height: 221px;">
		 			</van-swipe-item>
		 		  </van-swipe>
		 </div>
		 <div class="text" style="width: 100%; position: relative;" v-if="food">
		 		  <div class="foods" v-for="(item,index) in food" :key="index" style="width: 375px; box-shadow: 5px 5px 5px rgb(179, 179, 179);">
					  <router-link :to="'/detacat/'+item.id">
						  <div class="test2" style="width: 343px; margin-left: 20px;">
							  <div style="width: 343px; height: 46px; text-align: left;">
								  <h4 style="color: black;">{{item.title}}</h4>
							  </div>
							  <div style="width: 237px; height: 38px; overflow:hidden; text-align: left;">
								  <span style="font-size: 14px; color: black;" >{{item.title}}</span>
								  
								  <!-- item.summary -->
							  </div>
							  <div style="margin-left: 220px; margin-top: -32px;">
								  <img :src="item.img_map" alt="" style="width: 98px; height: 68px;">
								  
								  <!-- imaiges[index].img -->
							  </div>
							  <div style="text-align: left; margin-top: -25px;">
								  <div>
									  <van-icon name="friends-o" color="black"/>
									  <span style="font-size: 12px; margin: 5px; color: rgb(179, 179, 179);"> {{item.user}}</span>
									  <!-- {{item.author.nickname}} -->
								  </div>  
							  </div>
							  <van-divider />
						  </div>
					  </router-link>
		 		  </div>
		 </div>
		 <div class="zhi" style="height: 160px;">
		 		  <img src="img/zihui.jpg" alt="" style="height: 160px; width: 100%;">
		 </div>
		 <div class="butei" style="width: 375px; height: 375px;">
		 		  <div style="width: 100%; height: 272px; padding: 24px 0px 44px; margin: -1px 0px 0px;">
		 			  <van-swipe :autoplay="3000" indicator-color="white" :width="375" :height="296">
		 			    <van-swipe-item>
		 					<div class="meili">
		 						<img src="img/butei1.jpg" alt="" style="border-radius: 100px; width: 75px; height: 75px; position: absolute; left: 0px;">
		 						<div style="margin-top: 10px;">
		 							<h2 style="margin: 0px 0px 0px 0px;">{{beauty.result[0].author.nickname}}</h2>
		 							<p style="font-size: 13px; margin: 10px 0px; color: rgb(179, 179, 179);">{{beauty.result[0].author.title}}</p>
		 						</div>
		 					</div>
		 					<div class="meili1" style="margin: 20px 0px 0px;">
		 						<img src="img/butei2.jpg" alt="" style="width: 83px; height: 58px; position: absolute; left: 0px; margin: 10px 0px;">
		 						<div style="width: 236px; height: 42px; position: absolute; left: 100px; margin-top: 10px;">
		 							<h4 style="margin: 0px 0px 0px 0px;">{{beauty.result[0].articles[0].title}}</h4>
		 						</div>
		 					</div>
		 					<div class="meili2" style="position: absolute;top: 155px;">
		 						<img src="img/butei3.jpg" alt="" style="width: 83px; height: 58px; position: absolute; left: 0px; margin: 10px 0px;">
		 						<div style="width: 236px; height: 42px; position: absolute; left: 100px; margin-top: 10px;">
		 							<h4 style="margin: 0px 0px 0px 0px;">{{beauty.result[0].articles[1].title}}</h4>
		 						</div>
		 					</div>
		 					<div class="meili2" style="position: absolute;top: 225px;">
		 						<img src="img/butei4.jpg" alt="" style="width: 83px; height: 58px; position: absolute; left: 0px; margin: 10px 0px;">
		 						<div style="width: 236px; height: 42px; position: absolute; left: 100px; margin-top: 10px;">
		 							<h4 style="margin: 0px 0px 0px 0px;">{{beauty.result[0].articles[2].title}}</h4>
		 						</div>
		 					</div>
		 			  	</van-swipe-item>
		 			    <van-swipe-item>
		 					<div class="meili">
		 						<img src="img/fang1.jpg" alt="" style="border-radius: 100px; width: 75px; height: 75px; position: absolute; left: 0px;">
		 						<div style="margin-top: 10px;">
		 							<h2 style="margin: 0px 0px 0px 0px;">{{beauty.result[1].author.nickname}}</h2>
		 							<p style="font-size: 13px; margin: 10px 0px; color: rgb(179, 179, 179);">{{beauty.result[0].author.title}}</p>
		 						</div>
		 					</div>
		 					<div class="meili1" style="margin: 20px 0px 0px;">
		 						<img src="img/fang2.jpg" alt="" style="width: 83px; height: 58px; position: absolute; left: 0px; margin: 10px 0px;">
		 						<div style="width: 236px; height: 42px; position: absolute; left: 100px; margin-top: 10px;">
		 							<h4 style="margin: 0px 0px 0px 0px;">{{beauty.result[1].articles[0].title}}</h4>
		 						</div>
		 					</div>
		 					<div class="meili2" style="position: absolute;top: 155px;">
		 						<img src="img/fang3.jpg" alt="" style="width: 83px; height: 58px; position: absolute; left: 0px; margin: 10px 0px;">
		 						<div style="width: 236px; height: 42px; position: absolute; left: 100px; margin-top: 10px;">
		 							<h4 style="margin: 0px 0px 0px 0px;">{{beauty.result[1].articles[1].title}}</h4>
		 						</div>
		 					</div>
		 					<div class="meili2" style="position: absolute;top: 225px;">
		 						<img src="img/fang4.jpg" alt="" style="width: 83px; height: 58px; position: absolute; left: 0px; margin: 10px 0px;">
		 						<div style="width: 236px; height: 42px; position: absolute; left: 100px; margin-top: 10px;">
		 							<h4 style="margin: 0px 0px 0px 0px;">{{beauty.result[1].articles[2].title}}</h4>
		 						</div>
		 					</div>
		 				</van-swipe-item>
		 			    <van-swipe-item>
		 					<div class="meili">
		 						<img src="img/jia1.jpg" alt="" style="border-radius: 100px; width: 75px; height: 75px; position: absolute; left: 0px;">
		 						<div style="margin-top: 10px;">
		 							<h2 style="margin: 0px 0px 0px 0px;">{{beauty.result[2].author.nickname}}</h2>
		 							<p style="font-size: 13px; margin: 10px 0px; color: rgb(179, 179, 179);">{{beauty.result[0].author.title}}</p>
		 						</div>
		 					</div>
		 					<div class="meili1" style="margin: 20px 0px 0px;">
		 						<img src="img/jia2.jpg" alt="" style="width: 83px; height: 58px; position: absolute; left: 0px; margin: 10px 0px;">
		 						<div style="width: 236px; height: 42px; position: absolute; left: 100px; margin-top: 10px;">
		 							<h4 style="margin: 0px 0px 0px 0px;">{{beauty.result[2].articles[0].title}}</h4>
		 						</div>
		 					</div>
		 					<div class="meili2" style="position: absolute;top: 155px;">
		 						<img src="img/jia3.jpg" alt="" style="width: 83px; height: 58px; position: absolute; left: 0px; margin: 10px 0px;">
		 						<div style="width: 236px; height: 42px; position: absolute; left: 100px; margin-top: 10px;">
		 							<h4 style="margin: 0px 0px 0px 0px;">{{beauty.result[2].articles[1].title}}</h4>
		 						</div>
		 					</div>
		 					<div class="meili2" style="position: absolute;top: 225px;">
		 						<img src="img/jia4.jpg" alt="" style="width: 83px; height: 58px; position: absolute; left: 0px; margin: 10px 0px;">
		 						<div style="width: 236px; height: 42px; position: absolute; left: 100px; margin-top: 10px;">
		 							<h4 style="margin: 0px 0px 0px 0px;">{{beauty.result[2].articles[2].title}}</h4>
		 						</div>
		 					</div>
		 				</van-swipe-item>
		 			  </van-swipe>
		 		  </div>
		 		  
		 </div> 
	</div>
  </div>
  
</template>
<style>

</style>
<script>
// @ is an alias to /src
// import HeadWord from '@/components/HeadWord.vue'
import {butei,cates} from '../data.js'
import {miages} from '../datas.js'


export default {
  name: 'home',
  components: {
	  // HeadWord
  },
  data(){
	  return {
		  lunList:null,
		  beauty:null,
		  food:null,
		  imaiges:null,
	  }
  },
  created(){
	  // this.lunList = imgs;
	  this.beauty = butei;
	  // this.food = cates;
	  this.imaiges = miages;
	  this.requestImg();
	  this.requestArticleList();
  },
  methods:{
	  requestImg(){
		  this.$api.getImgList().then(res=>{
			  console.log("获取到列表", res)
			  if(res.status == 200){  
			  	  this.lunList = res.data
			  }
		  }).catch(err=>{
			  console.log("出错了", err)
		  })
	  },
	  requestArticleList(){
		  this.$api.getArticleList().then(res=>{
			  console.log("获取到文章",res)
			  if(res.status == 200){
				  this.food = res.data
			  }
		  }).catch(err=>{
			  console.log("出错了", err)
		  })
	  }
  }
}
</script>
