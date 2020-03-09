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

export const getImgList =()=>{
	return axios.get('/api/v1imgs/')
}
export const getArticleList =()=>{
	return axios.get('/api/v1articles/')
}

export const getCategoryList =()=>{
	return axios.get('/api/v1categorys/')
}
// 
// export const getCategoryDetail =(parm)=>{
// 	return axios.get(`/api/v1categorys/${parm.id}`)
// }
// 
// export const getToken =(parm)=>{
// 	return axios.post('/obtaintoken/', parm)
// }
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