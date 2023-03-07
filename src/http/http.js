// 简单封装axios
import axios from "axios";
const http = axios.create({
    baseURL:'https://cnodejs.org/api/v1',
    timeout: 3000
})
// 配置拦截器

// 请求拦截器
// 需要在请求头中添加token字段，该项目暂时不需要

http.interceptors.request.use(config => {
    // const token = window.localStorage.getItem('token')
    // if (token) config.authToken = token
    return config

})
// 相应拦截器
http.interceptors.response.use(res=>{return res.data})

export default http