<template>
	<div class="mine">
		<div v-if="userinfo">
			<div class="userinfo" v-if="userinfo">
				<p>用户信息</p>
				<p>用户名:{{userinfo.M_UserName}}</p>
				<p>登录时间:{{userinfo.M_JoinTime}}</p>
				<p>用户等级:{{userinfo.M_Honor}}</p>
				<br>
				<br>
				<van-button type="primary" size="large" @click="logout">注销</van-button>
			</div>
		</div>
		<div v-else>
			<div v-show="loging">
				<van-nav-bar
				  title="登录"
				  left-text="返回"
				  left-arrow
				  @click-left="onClickLeft1"
				/>
				<div class="login">
					<img src="img/login.png" alt="" style="width: 122px; height: 33px;">
					<van-cell-group>
					  <van-field
					    v-model="loginusername"
					    required
					    clearable
					    right-icon="question-o"
					    placeholder="请输入用户名"
					    @click-right-icon="$toast('question')"
					  />
					<br>
					  <van-field
					    v-model="password"
					    type="password"
					    placeholder="请输入密码"
					    required
					  />
					</van-cell-group>
					
					<p style="font-size: 8px; float: left; color: #999999;">忘记密码？</p>
					<br>
					<van-button type="primary" size="large" @click="loginn">登录</van-button>
					<p style="font-size: 12px; color: #999999;" @click="ppp">没有账号？</p>
					<p style="font-size: 12px; color: #999999;">第三方账号登录</p>
					<div class="imags">
						<img src="img/qie.png" alt="" style="width: 45px; height: 45px;">
						<img src="img/weibo.png" alt="" style="width: 45px; height: 45px;">
						<img src="img/dou.png" alt="" style="width: 45px; height: 45px;">
					</div>
				</div>
			</div>
			
			<div v-show="register">
				<van-nav-bar
				  title="注册"
				  left-text="返回"
				  left-arrow
				  @click-left="onClickLeft"
				/>
				<div class="register">
					<img src="img/login.png" alt="" style="width: 122px; height: 33px;">
					<van-cell-group>
					  <van-field
					    v-model="username"
					    required
					    clearable
					    right-icon="question-o"
					    placeholder="请输入用户名"
					    @click-right-icon="$toast('question')"
					  />
					<br>
					  <van-field
					    v-model="password1"
					    type="password"
					    placeholder="请输入密码"
					    required
					  />
					  <br>
					    <van-field
					      v-model="password2"
					      type="password"
					      placeholder="请再次输入密码"
					      required
					    />
						<!-- <van-field
						  v-model="email"
						  type="email"
						  placeholder="请输入邮箱"
						  required
						/> -->
					</van-cell-group>
					<van-button type="primary" size="large" @click="regist">注册</van-button>
				</div>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	import Cookie from 'js-cookie'
	export default{
		data(){
			return {
				loginusername:null,
				username:"",
				password:"",
				password1:"",
				password2:"",
				email:"",
				loging:true,
				register:false,
				userinfo:null
			}
		},
		methods:{
			ppp(){
				this.loging = false;
				this.register = true;
			},
			onClickLeft() {
				this.loging = true;
				this.register = false;
			    },
			onClickLeft1(){
				this.$router.push("/")
			},
			logout(){
				this.$http({
					url:`http://www.520mg.com/member/index_login.php?dopost=exit`,
					method:"post",
					withCredentials:true
				}).then(res=>{
					if(res.data.status==1){
						this.$toast("退出成功");
						this.userinfo=null;
						localStorage.removeItem("islog")
					}
					else{
						this.$toast("退出失败");
					}
				})
			},
			loginn(){
				if(this.loginusername.length<=0||this.password.length<=0){
					this.$toast("必填项目不能为空");
				}
				else{
					if(localStorage.getItem(this.loginusername)==this.password){
						this.$toast("登录成功")
						localStorage.setItem("islog",true,{expires:7})
						this.$router.push(this.$route.query.t)
					}
					else{
						this.$toast("用户名或者密码错误")
						this.password=""
					}
				}
			},
			regist(){
				if(this.username.length<=0 || this.password1.length==0 || this.password2.length==0){
					this.$toast("必填项不能为空")
				}
				else if(this.password1 != this.password2){
					this.$toast("两次密码不一样")
				}
				else{
					if(localStorage.getItem(this.username)){
						this.$toast("用户已存在")
						this.username=""
						this.password1=""
						this.password2=""
						this.email=""
					}
					else{
						localStorage.setItem(this.username,this.password1)
						this.$toast("注册成功")
						this.loging = true;
						this.register = false;
					}
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.login{
		width: 100%;
		height: 500px;
		margin-top: 100px;
		img{
			margin: 30px;
		}
	}
	.register{
		width: 100%;
		height: 500px;
		margin-top: 100px;
		img{
			margin: 30px;
		}
	}
</style>
