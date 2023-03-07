<template>
    <div v-if="topic" class="topic">
      <PanelContainer>
        <template #content>
          <h2>{{ topic.title }}</h2>
          <p>
            <span>{{ topic.author.loginname }}</span>
          </p>
          <hr />
          <div class="topmic-html" v-html="topic.content"></div>
        </template>
      </PanelContainer>
      <!-- 评论列表 -->
      <PanelContainer v-if="topic.reply_count">
        <template #head>{{topic.reply_count}}回复</template>
        <template #content> </template>
        <!-- 评论列表 -->
      </PanelContainer>
      <PanelContainer>
        <template #head>添加回复</template>
        <template #content>
            <el-input
    type="textarea"
    :rows="2"
    placeholder="请输入内容"
    v-model="textarea">
  </el-input>
  <hr>  
  <el-button>提交评论</el-button>
          <!-- 输入评论 -->
        </template>
      </PanelContainer>
    </div>
  </template>
  
  <script>
  import PanelContainer from "../components/PanelContainer.vue";
  import { getTopic } from "../http/api";
  export default {
    components: { PanelContainer },
    props: ["id"],
    data() {
      return {
        topic: null,
        textarea:''
  
      };
    },
    async created() {
      const res = await getTopic({ id: this.id });
      console.log(res);
      this.topic = res.data;
    },
  };
  </script>
  
  <style>
  </style>