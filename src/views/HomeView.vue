<template>
    <div>
      <PanelContainer>
        <template #head>
          <div class="nav">
            <router-link
              :class="{
                'router-link-active':
                  $route.path === '/' || $route.path === '/all',
              }"
              to="/all"
              >全部</router-link
            >
            <router-link to="/good">精华</router-link>
            <router-link to="/job">问答</router-link>
            <router-link to="/ask">招聘</router-link>
            <router-link to="/share">分享</router-link>
            <router-link to="/dev">客户端测试</router-link>
          </div>
        </template>
        <template #content> 
          <router-view />
        </template>
      </PanelContainer>
    </div>
  </template>

<script>
import PanelContainer from '@/components/PanelContainer.vue'
    export default {
  components: { PanelContainer },
        
    }
</script>

<style lang="less">
.nav a{
    font-size: 14px;
    color: #80bd01;
    padding: 3px 4px;
    border-radius: 3px;
    background-color: #f6f6f6;
    margin-right: 15px;

}
.nav a.router-link-active{
    background-color: #80bd01;
    color: #fff;

}
.nav a:last-child{margin-right: 0;}

</style>