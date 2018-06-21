<style scoped>
</style>

<template>
<div>
  <div style="margin: 0 0 20px;">
    <el-alert
      title="该功能开发正在迁移到新后台，可以暂时使用老后台访问使用"
      type="info"
      show-icon>
    </el-alert>
  </div>
  <div>
    <el-button type="success" @click="handleRedirect(item)" v-for="item in list" :key="item.title" v-text="item.title"></el-button>
  </div>
</div>
</template>

<script>
export default {
  title: '${1:}',
  data() {
    return {
      list: [
        {
          url: 'http://huixisheng.github.io/',
          title: '跳转的页面入口',
        },
      ],
    };
  },
  props: {},
  computed: {},
  methods: {
    handleRedirect(item) {
      this.open(item.url);
    },
  },
};
</script>
