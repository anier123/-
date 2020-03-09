<template>
	<div class="natural">
		<div style="position: absolute; top: 90px; right: 0px; left: 0px; bottom: 0px; overflow-y: auto;">
			<div class="naturall" v-for="(item,index) in naturall" :key="index" style="width: 375px; box-shadow: 5px 5px 5px rgb(179, 179, 179);">
				<router-link :to="'/detanat/'+item.id">
				  <div class="test2" style="width: 343px; margin-left: 20px;">
					  <div style="width: 343px; height: 46px; text-align: left;">
						  <h4 style="color: black;">{{item.title}}</h4>
					  </div>
					  <div style="width: 237px; height: 38px; overflow:hidden; text-align: left;">
						  <span style="font-size: 14px; color: black;">{{item.summary}}</span>
					  </div>
					  <div style="margin-left: 220px; margin-top: -32px;">
						  <img :src="imaiges[index].img" alt="" style="width: 98px; height: 68px;">
					  </div>
					  <div style="text-align: left; margin-top: -25px;">
						  <div>
							  <van-icon name="friends-o" color="black"/>
							  <span style="font-size: 12px; margin: 5px; color: rgb(179, 179, 179);">{{item.author.nickname}}</span>
						  </div>  
					  </div>
					  <van-divider />
				  </div>
			  </router-link>
			  
			</div>
		</div>
		
	</div>
</template>

<script>
	import {naturals} from '../data.js'
	import {miages} from '../datas.js'
	export default {
		data(){
			return {
				naturall:null,
				imaiges:null
			}
		},
		created(){
			this.naturall = naturals;
			this.imaiges = miages;
		}
	}
</script>

<style>
</style>
