<template>
  <div id="transport-data">
    {{carDamageClass}}
    <div
      id="transport-lock"
      class="transport-data-controls">
      <i
        :class="`flaticon-${doorsOpen ? 'unlock' : 'lock'}`"
        class="fi"></i>
    </div>
    <div
      id="transport-damage-status"
      class="transport-data-controls">
      <i class="fi flaticon-car-collision"></i>
    </div>
    <div
      id="transport-light"
      class="transport-data-controls">
      <i
        :class="carHeadlightClass"
        class="fi"></i>
    </div>
    <div
      id="transport-speed"
      class="off">
      {{transportSpeed.data}}<sub>{{transportSpeed.unit}}</sub>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from "vuex";
  export default {
    name: 'transportData',
    data: () => ({
      damageIconsClass: {
        "80": "flaticon-car-compact",
        "60": "flaticon-puncture-in-a-wheel",
        "45": "flaticon-car-collision",
        "30": "flaticon-vehicle-repair",
        "10": "flaticon-burning-car",
      }
    }),
    computed: {
      ...mapGetters({
        headLightOn: "transport/headLightOn",
        damageScore: 'transport/damageScore',
        doorsOpen: "transport/doorsOpen",
        fuelCapacity: 'transport/fuelCapacity',
        fuelLevel: 'transport/fuelLevel',
        speed: 'transport/speed',
      }),
      carDamageClass() {
        return 100 - this.damageScore
      },
      carHeadlightClass() {
        return this.headLightOn ? 'flaticon-high-beam' : 'flaticon-fog-light';
      },
      transportSpeed(){
        return {data: this.speed, unit: 'км/ч'}
      }
    },
    methods: {

    }
  }
</script>
<style lang="scss">
  #transport-data{
    position: absolute;
    top: 0;
    z-index: 10;
    display: block;
    width: 93%;
    height: 4vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    // background: #000;
    overflow: hidden;

    .transport-data-controls{
      width: 6vh;
      height: 5vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: .7vw;
      i{
        color: #fff;
        font-size: 5vh;
      }
      &:last-child{
        margin-right: 0;
      }
      // background: rgba(255, 255, 255, .5);
    }
    #transport-lock{
      i{
        color: #fff;
        font-size: 3.1vh;
      }
    }
    #transport-light{
      i{
        color: #fff;
        font-size: 3.4vh;
      }
    }
    #transport-damage-status{
      display: flex;
      flex-direction: column;
      justify-content: center;
      i{
        color: #fff;
        font-size: 4.2vh;
      }

    }
    #transport-speed{
      flex-grow: 1;
      max-width: 4.3vw;
      text-align: right;
      padding-right: 15px;
      line-height: 4vh;
      font-size: 3vh;
      color: #fff;
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
      sub{
        position: relative;
        bottom: .8vh;
        font-size: 1vh;
      }
    }
  }
</style>