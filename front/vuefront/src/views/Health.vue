<template>
	<div class="health">
		<div style="position: absolute; top: 90px; right: 0px; left: 0px; bottom: 0px; overflow-y: auto;">
			<div class="healthh" v-for="(item,index) in healthh" :key="index" style="width: 375px; box-shadow: 5px 5px 5px rgb(179, 179, 179);">
				<div v-if="item.category == name">
				<router-link :to="'/detacat/'+item.id">
				  <div class="test2" style="width: 343px; margin-left: 20px;">
					  <div style="width: 343px; height: 46px; text-align: left;">
						  <h4 style="color: black;">{{item.title}}</h4>
					  </div>
					  <div style="width: 237px; height: 38px; overflow:hidden; text-align: left;">
						  <span style="font-size: 14px; color: black;">{{item.title}}</span>
					  </div>
					  <div style="margin-left: 220px; margin-top: -32px;">
						  <img :src="item.img_map" alt="" style="width: 98px; height: 68px;">
					  </div>
					  <div style="text-align: left; margin-top: -25px;">
						  <div>
							  <van-icon name="friends-o" color="black"/>
							  <span style="font-size: 12px; margin: 5px; color: rgb(179, 179, 179);">{{item.user}}</span>
						  </div>  
					  </div>
					  <van-divider />
				  </div>
			  </router-link>
			  </div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				healthh:null,
				name:"健康"
			}
		},
		created(){
			this.requestArticleList();
		},
		methods:{
			requestArticleList(){
				this.$api.getArticleList().then(res=>{
					console.log("获取成功", res)
					if(res.status == 200 ){
						this.healthh = res.data
					}
					
				}).catch(err=>{
					console.log("失败了",err)
				})
			}
		}
	}
</script>

<style>
</style>
