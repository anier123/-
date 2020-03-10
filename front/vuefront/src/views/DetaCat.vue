<template>
	<div class="detail" style="position: absolute; top: 40px; right: 0px; left: 0px; bottom: 0px; overflow-y: auto;">
		<div class="texts" v-if="teast">
				<h2>{{teast.title}}</h2>
				<div class="header" style="margin-left: 20px; width: 180px;">
					<van-icon name="friends-o" />
					<span style="font-size: 14px; color: rgb(179, 179, 179); margin-left: 0px;">{{teast.user}}</span>
				</div>
				<div style="width: 100%;">
					<div v-html="teast.body"></div>
				</div>
		</div>
		<div class="bottom" v-if="teast">
			<div class="icon" style="width: 100px;" @click="number1">
				<van-icon name="good-job-o" size="20"/>
				<span style="font-size: 14px; color: rgb(184, 204, 204); margin-left: 5px;">{{teast.click_on}}点赞</span>
			</div>
			<div class="imgs">
				<img src="img/weibo.png" alt="" style="width: 25px; height: 20px;">
			</div>
		</div>
		<div class="comment">
			<input type="text" placeholder="请发表评论" style="outline: none;">
		</div>
		<div class="pagination" v-if="teast">
			<!-- .result -->
			<div class="tiname" v-for="(item,index) in pagina" :key="index">
				<div v-if="item.article == teast.title">
				<div class="imgss" style="width: 58px; height: 58px;">
					<img :src="'http://127.0.0.1:8000/media/'+ item.user_img" alt="" style="width: 58px; height: 58px; border-radius: 100%;">
				</div>
				<div class="texta">
					<span style="font-size: 16px; ">{{item.user}}</span>
					<p style="font-size: 14px; margin-top: 0; margin-left: 10px;">{{item.date_time}}</p>
				</div>
				<div class="txt">
					<p style="font-size: 14px; margin-left: 60px; margin-top: -2px;">{{item.content}}</p>
				</div>
				<div class="iconc" @click="number(item.id)">
					<div style="width: 100px; height: 20px; margin-left: 5px;">
						<van-icon name="good-job-o" size="18"/>
						<span style="font-size: 14px; color: rgb(184, 204, 204); margin-left: 5px;">{{item.click_on}}点赞</span>
					</div>
					
				</div>
				<van-divider />
			</div>
			<!-- {{pagina}} -->
			</div>
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
	import {pinglun} from '../datas.js'
	import {magess} from '../datas.js'
	export default {
		data(){
			return{
				teast:null,
				// pathId:"",
				masgText:"",
				pagina:null,
				imgess:null,
				htmlCon:"",
			}
			
		},
		created(){
			// this.pagina = pinglun;
			this.imgess = magess;
			this.requestArticleDetail();
			this.requestCommentList();
			
		},
	    methods: {
			requestArticleDetail(){
				this.$api.getArticleDetail({
					id:this.$route.params.id
				}).then(res=>{
					console.log("成功了", res)
					if(res.status == 200){
						this.teast = res.data
					}
				}).catch(err=>{
					console.log("失败了", err)
				})
			},
			requestCommentList(){
				this.$api.getCommentList().then(res=>{
					console.log("获取评论成功", res)
					if(res.status == 200){
						this.pagina = res.data
					}
				}).catch(err=>{
					console.log("获取失败", err)
				})
			},
			onClickLeft() {
				this.$router.go(-1)
				this.$toast('返回');
			},
			number(id){
				console.log("333333", id)
				this.pagina[id - 1].click_on ++
				// this.teast.arcomment.click_on ++
				console.log("点击了", this.pagina.click_on)
				this.$api.getCommentClick({
					id:this.pagina[id - 1].id,
					click_on:this.pagina[id - 1].click_on
				}).then(res=>{
					console.log("点赞修改成功", res)
				}).catch(err=>{
					console.log("失败了", err)
				})
				
			},
			number1(){
				this.teast.click_on ++
				this.$api.getArticleClick({
					id:this.teast.id,
					click_on:this.teast.click_on
				}).then(res=>{
					console.log("修改成功", res)
					// this.teast.click_on ++
				}).catch(err=>{
					console.log("失败了",err)
				})
			}
	  },
	  // filters:{
	  // 	dataFormat(date){
	  // 		date = new Date(data)
	  // 		return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDay()}`
	  // 	}
	  // }
	}
</script>

<style>
</style>