<template>
  <div id="transport-scoreboard" class="board">
    <transport-data />
    <fuel-level />
  </div>
</template>
<script>
  import TransportData from './TransportData.vue'
  import FuelLevel from './FuelLevel.vue'
  export default {
    name: 'transportBoard',
    components: {
      FuelLevel,
      TransportData
    },
  }
</script>
<style lang="scss">
  #transport-scoreboard{
    flex-grow: 1;
    min-width: 30vh;
    height: 6vh;
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: flex-end;
  }
</style>