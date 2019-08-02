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
    mounted(){
      this.$nextTick(function() {
        window.addEventListener('resize', this.handleResize);
        //Init
        this.handleResize()
      })
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
  .bg-red{
    background: red;
  }
  .color-green{
    color: green;
  }
  .color-red{
    color: red;
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
        image: url('~@/assets/images/main-bg.jpg');
        size: cover;
        position: center;
      }
      overflow: hidden;
      position: relative;
      width: 100%;
      height: 89vh;
      min-height: 40vh;
      max-height: 89vh;
      min-width: 38vh;
      flex-direction: column;
      justify-content: flex-end;
    }
  }

  .blink{
    animation-name: blink;
    animation-timing-function: linear;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  @keyframes blink {
    50% {
      opacity: .5;
    }
  }
</style>
