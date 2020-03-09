<template>
	<div class="detail" style="position: absolute; top: 40px; right: 0px; left: 0px; bottom: 0px; overflow-y: auto;">
		<div class="texts" v-for="(item,index) in teast" :key="index">
			<div class="tasks" v-if="item.id== pathId">
				<h2>{{item.title}}</h2>
				<div class="header" style="margin-left: 20px; width: 180px;">
					<van-icon name="friends-o" />
					<span style="font-size: 14px; color: rgb(179, 179, 179); margin-left: 0px;">{{item.author.nickname}}</span>
				</div>
				<div style="width: 100%;">
					<div v-html="masgText"></div>
				</div>
				
			</div>
			
		</div>
	    <div class="bottom">
	    	<div class="icon" style="width: 100px;" @click="number1">
	    		<van-icon name="good-job-o" size="20"/>
	    		<span style="font-size: 14px; color: rgb(184, 204, 204); margin-left: 5px;">{{num1}}点赞</span>
	    	</div>
	    	<div class="imgs">
	    		<img src="img/weibo.png" alt="" style="width: 25px; height: 20px;">
	    	</div>
	    </div>
	    <div class="comment">
	    	<input type="text" placeholder="请发表评论" style="outline: none;">
	    </div>
	    <div class="pagination">
	    	<div class="tiname" v-for="(item,index) in pagina.result" :key="index">
	    		<div class="imgss" style="width: 58px; height: 58px;">
	    			<img :src="imgess[index].img" alt="" style="width: 58px; height: 58px; border-radius: 100%;">
	    		</div>
	    		<div class="texta">
	    			<span style="font-size: 16px; ">{{item.author.nickname}}</span>
	    			<p style="font-size: 14px; margin-top: 0; margin-left: 10px;">{{item.date_created}}</p>
	    		</div>
	    		<div class="txt">
	    			<p style="font-size: 14px; margin-left: 60px; margin-top: -2px;">{{item.content}}</p>
	    		</div>
	    		<div class="iconc" @click="number">
	    			<div style="width: 100px; height: 20px; margin-left: 5px;">
	    				<van-icon name="good-job-o" size="18"/>
	    				<span style="font-size: 14px; color: rgb(184, 204, 204); margin-left: 5px;">{{num}}点赞</span>
	    			</div>
	    			
	    		</div>
	    		<van-divider />
	    	</div>
	    	<!-- {{pagina}} -->
	    </div>
	</div>
</template>
<style lang="less">
	.texts{
		p{
			margin: 15px 0px;
		}
		h2{
			margin: 30px 0px;
		}
		img{
			width: 100%;
		}
	}
</style>
<style scoped="scoped" lang="less">
	.pagination{
		width:343px;
		height:160px;
		margin: 10px;
		.tiname{
			position: relative;
			.texta{
				position: absolute;
				left: 60px;
				top: 5px;
				span{
					float: left;
					margin-left: 10px;
				}
				p{
					float: left;
				}
				
			}
			.iconc{
				width: 100px;
				height: 20px;
				margin-left: 60px;
				van-icon{
					float: left;
				}
			}
		}
	}
	.bottom{
		width: 100%;
		height: 66px;
		background-color: rgb(242, 246, 247);
		margin-top: 20px;
		position: relative;
		.icon{
			width: 68px;
			height: 24px;
			position: absolute;
			top: 20px;
			left: 10px;
			// margin-top: 10px;
			// margin-left: 10px;
		}
		.imgs{
			width: 114px;
			height: 34px;
			position: absolute;
			top: 20px;
			right: 20px;
			img{
				float: right;
			}
		}
	}
	.comment{
		width: 100%;
		height: 122px;
		background-color: rgb(242, 246, 247);
		position: relative;
		input{
			width: 343px;
			height: 90px;
		}
	}
	
</style>
<script>
	import {naturals} from '../data.js'
	import {pinglun} from '../datas.js'
	import {magess} from '../datas.js'
	export default {
		data(){
			return{
				teast:null,
				pathId:"",
				masgText:"",
				pagina:null,
				imgess:null,
				htmlCon:"",
				num1:"",
				num:""
				
			}
			
		},
		created(){
			this.teast = naturals;
			this.pagina = pinglun;
			this.imgess = magess;
			this.pathId = this.$route.params.id
			this.teast.forEach(item=>{
				if(item.id== this.pathId){
					this.masgText = item.content
				}
			})
			// this.masgText = this.teast[0].content
			// console.log(this.teast)
		},
	    methods: {
	      onClickLeft() {
			this.$router.go(-1)
	        this.$toast('返回');
	    },
		number(){
			this.num++
			
		},
		number1(){
			this.num1++
		}
	  }
	}
</script>


