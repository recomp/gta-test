<template>
  <div id="app">
    <div>
      <data-sidebar-control />
      {{resizeWindowParams}}
    </div>
    <div
      v-resize:throttle="handleResize"
      ref="resizeWrapper"
      class="resize-wrapper">
      <router-view />
    </div>

  </div>
</template>
<script>
  import resize from 'vue-resize-directive'
  import DataSidebarControl from '@/components/DataSidebarControl.vue'
  export default {
    name: 'App',
    components: {
      DataSidebarControl,
    },
    data: () => ({

    }),
    directives: {
      resize,
    },
    computed: {
      resizeWindowParams(){
        return this.$store.state.window
      }
    },
    methods: {
      handleResize(){
        let params = {
          width: this.$refs.resizeWrapper.clientWidth,
          height: this.$refs.resizeWrapper.clientHeight
        }
        this.$store.commit("SET_WINDOW_PARAMS", params);
      }
    }
  }
</script>
<style lang="scss">
  @import url("https://cdn.jsdelivr.net/npm/dejavu-sans@1.0.0/css/dejavu-sans.min.css");

  body{
    width: 95%;
    padding: 0;
    margin: 0 auto;
    font-family:'DejaVu Sans'
  }
  #app {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0;
    overflow: hidden;
    height: 100vh;
    position: relative;
    .resize-wrapper{
      resize: both;
      background: {
        repeat: no-repeat;
        image: url('/images/main-bg.jpg');
        size: cover;
        position: center;
      }
      overflow: hidden;
      position: relative;
      width: 100%;
      height: 89vh;
      min-height: 40vh;
      max-height: 89vh;
      min-width: 35vh;
      flex-direction: column;
      justify-content: flex-end;
    }
  }
</style>
