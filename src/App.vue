<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  mounted() {
    sessionStorage.removeItem('nowTime');
  },
  methods: {
   
  },
}
</script>
<style lang="less">
#app {
  height: 100%;
}
</style>