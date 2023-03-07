<template>
    <div v-if="topics.length" class="big">
      <div class="list">
        <TopicItems v-for="item in topics" :key="item.id" :topic="item" />
       
      </div>
      <!-- 分页器 -->
      <el-pagination
        background
        layout="prev,pager,next"
        :total="total"
        :page-size="40"
        @current-change="currentChange"
        :current-page.sync="currentPage"
      ></el-pagination>
    </div>
</template>
<script>
import TopicItems from '@/components/TopicItems.vue';
import {getTopics}from "../http/api"

export default {
  components: {TopicItems  },
  props: ["tab"],
  data() {
    return {
      topics: [],
      total:0,
      currentPage:1
    };
  },
  watch: {
    tab: {
      async handler(tab) {
        const res = await getTopics({ params: { tab: tab,page:1,limit:20 } });
        this.topics = res.data;
        const total_num=[423,720,280,200,120,640];
        let index=0;
        if(tab==="good"){
            index=1
            
        }else if(tab==="share"){
            index=2
        }else if(tab==="ask"){
            index=3
        }else if(tab==="job"){
            index=4 
        }else if(tab==="dev"){
            index=5

        }
        this.total=total_num[index];
        this.currentPage=1
      },
      immediate: true,
    },
  },
  methods:{
      async currentChange(page){
          const res=await getTopics({params:{tab:this.tab,page,limit:20}})
          this.topics=res.data
      }
  }
};
</script>
<style lang="less">
.big{
    .list{
        padding: 10px;
     div{
        margin: 10px auto;
        a{
            font-size: 14px;
            text-align: left;
        }
     }
    }
}
</style>
