<template>
  <div id="main" :style="{width: `${windowParams.width}px`, height: `${windowParams.height}px`}">
    <div class="main-wrapper">
      <transport-board
        v-if="controlsEnabled"/>
      <character-stuff
        v-if="controlsEnabled"/>
    </div>
  </div>
</template>

<script>
import resize from 'vue-resize-directive'
import TransportBoard from '@/components/CharacterUi/transportBoard/TransportBoard.vue'
import CharacterStuff from '@/components/CharacterUi/CharacterStuff/CharacterStuff.vue'
import { mapGetters } from "vuex";

export default {
  name: 'MainPage',
  directives: {
    resize,
  },
  components: {
    TransportBoard,
    CharacterStuff
  },
  data: () => ({

  }),
  computed: {
    ...mapGetters({
      controlsEnabled: "controlsEnabled",
    }),
    windowParams(){
      return this.$store.state.window
    },
    controlStyles(){
      return this.$store.state.window.height < 450 ? 1 : 1.07
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
  #main{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    flex-grow: 1;
    .main-wrapper{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      flex-grow: 0;
      margin-right: 2vh;
      margin-bottom: 2vh;
    }
  }
  .board{
    background: rgba(0, 0, 0, .7);
    margin-top: 2vh;
  }
</style>