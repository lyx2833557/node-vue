<template>
    <div class="comment">
        <el-avatar shape="square" :size="30" :src="reply.author.avatar_url"></el-avatar>
   <div>
       <div>
           <span>{{reply.author.loginname}}</span>
           <span>{{index+1}}楼</span>
           <span>{{index+1}}.</span>
           <span>{{reply.create_at}}</span>
           <p v-html="reply.content"></p>
       </div>
   </div>
    </div>
  </template>
  
  <script>
  export default {
      props:['reply','index']
  
  }
  </script>
  
  <style>
  
  </style>