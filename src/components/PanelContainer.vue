<template>
    <!-- 公共布局 -->
    <div class="panel" :style="`width:${currentWidth}`">
        <div v-if="$slots.head" class="panel-head">
            <slot name="head" />
        </div>
        <div class="panel-container">
            <slot name="content" />
        </div>
        

    </div>
</template>



<style  lang="less">
.panel{
    width: 85%;
    margin: 0 auto;
    background-color: #f6f6f6;
    border-radius: 5px;
    overflow: hidden;
    .panel-head{
        padding: 15px 10px;
        margin-bottom: 20px;
        background-color: #e1e1e1;
    }
    .panel-content{
        background-color: #fff;
        padding: 15px 10px;
        min-height: 100px;
        margin: top 20px; ;
        div.list{
            padding: 5px 10px;
        }

    }
}

</style>
<script>
    export default {
        computed:{
            currentWidth(){
                const {width}=this;
                return width*1?width+"px":width;
            }
        }
        
    }
</script>