import jsCookie from 'js-cookie'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000'

//拦截请求
axios.interceptors.request.use(function (config){
	//在发起请求之前可以对请求进行处理，其中config就是请求中的config参数
	if(jsCookie.get('access')){
		config.headers.Authorization = `Bearer ${jsCookie.get('access')}`;
	}
	
	return config
	}, function(error){
		return Promise.reject(error)
	});
	
//拦截响应
axios.interceptors.response.use(function(response){
	return response;
},function(error){
	if(error.response.status == 401){
		console.log("认证失败")
		window.location.href = "#/login/"
		jsCookie.remove("access")
		jsCookie.remove("refresh")
	}
	return Promise.reject(error);
});
	
// 
// 轮播图接口
export const getImgList =()=>{
	return axios.get('/api/v1imgs/')
}
 // 获取文章列表api接口
export const getArticleList =()=>{
	return axios.get('/api/v1articles/')
}
// 导航栏分类获取
export const getCategoryList =()=>{
	return axios.get('/api/v1categorys/')
}
// 获取文章详情
export const getArticleDetail =(parm)=>{
	return axios.get(`/api/v1articles/${parm.id}`)
}
// 修改文章的点赞数
export const getArticleClick =(parm)=>{
	return axios.patch(`/api/v1articles/${parm.id}/`,parm)
}
//获取每篇文章的评论列表
export const getCommentList =()=>{
	return axios.get('/api/v1comments/')
}
//修改评论点赞数
export const getCommentClick =(parm)=>{
	return axios.patch(`/api/v1comments/${parm.id}/`,parm)
}

export const getToken =(parm)=>{
	return axios.post('/obtaintoken/', parm)
}
// 
// export const createCategory=(parm)=>{
// 	return axios.post('/api/v1categorys/', parm)
// }
// 
// export const putCategory=(parm)=>{
// 	return axios.put(`/api/v1categorys/${parm.id}/`,parm)
// }
// 
// export const getUserinfo=(parm)=>{
// 	return axios.get('/getuserinfo/',parm)
// }
// 
// export const createRegist=(parm)=>{
// 	return axios.post('/api/v1users/regist/', parm)
// }
// 
// 
// export const putUser=(parm)=>{
// 	return axios.put(`/api/v1users/${parm.id}/`,parm)
// }