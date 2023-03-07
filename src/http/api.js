// 统一管理接口

import http from "./http"
// 获取文章列表 
// 默认方法为get
// params为参数
 export const getTopics=({params})=>http({
    method:'get',
    params,
    url:'./topics'
 }) 
 export const getTopic=({id})=>http({
   url:'topic/'+id,
   method:'get'
 })
