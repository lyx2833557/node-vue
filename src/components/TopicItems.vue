<template>
    <div>
       <router-link :to="`/topic/${topic.id}`">{{topic.title}}</router-link>
    </div>
  </template>
  
  <script>
  export default {
      props:['topic']
  
  }
  </script>
  
  <style lang='less' >
  
  </style>