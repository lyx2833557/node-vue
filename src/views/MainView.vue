<template>
    <div class="main">
        <HeaderNav />
        <router-view />

    </div>
</template>


<style scoped lang="less">
.main{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}


</style>
<script>
import HeaderNav from '@/components/HeaderNav.vue';
    export default {
        components:{HeaderNav}
        
    }
</script>
