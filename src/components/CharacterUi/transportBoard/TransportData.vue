<template>
  <div id="transport-data">
    <div
      id="transport-lock"
      :class="doorsOpen ? 'unlocked' : 'locked'"
      class="transport-data-controls">
      <i
        :class="`flaticon-${doorsOpen ? 'unlock' : 'lock'}`"
        class="fi"></i>
    </div>
    <div
      id="transport-damage-status"
      class="transport-data-controls">
      <i
        :class="carDamageClass"
        class="fi"></i>
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
      carDamageClass: "flaticon-car-compact green",
      damageIconsClasses: [
        {
          level: 80,
          icon: "flaticon-burning-car"
        },
        {
          level: 60,
          icon: "flaticon-vehicle-repair"
        },
        {
          level: 45,
          icon: "flaticon-car-collision"
        },
        {
          level: 30,
          icon: "flaticon-puncture-in-a-wheel"
        },
        {
          level: 10,
          icon: "flaticon-car-compact"
        }
      ]
    }),
    watch:{
      carDamage(score){
        let icon = this.damageIconsClasses.find( x => (x.level === score))
        if (icon) {
          this.carDamageClass = `${icon.icon} ${score > 60 ? 'red' : 'green'}`
        }
      }
    },
    computed: {
      ...mapGetters({
        headLightOn: "transport/headLightOn",
        damageScore: 'transport/damageScore',
        doorsOpen: "transport/doorsOpen",
        fuelCapacity: 'transport/fuelCapacity',
        fuelLevel: 'transport/fuelLevel',
        speed: 'transport/speed',
      }),
      carDamage(){
        return 100 - this.damageScore;
      },
      carHeadlightClass() {
        return this.headLightOn ? 'headlights on flaticon-high-beam' : 'headlights off flaticon-fog-light';
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
    width: 90%;
    height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    overflow: hidden;

    .transport-data-controls{
      width: 6vh;
      height: 5vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      i{
        color: #fff;
        font-size: 5vh;
        padding-top: 1vh;
      }
      &:last-child{
        margin-right: 0;
      }
    }
    #transport-lock{
      &.locked i{
        color: red;
      }
      &.unlocked i{
        color: green;
      }
      i{
        color: #fff;
        font-size: 3.1vh;
      }
    }
    #transport-light{
      i{
        &.headlights{
          &.on{
             color: yellow;
          }
          &.off{
             color: red;
          }
        }

        font-size: 3.4vh;
      }
    }
    #transport-damage-status{
      display: flex;
      flex-direction: column;
      justify-content: center;
      i{
        font-size: 3.2vh;
        &.flaticon-car-collision{
          font-size: 4.2vh;
        }
        &.flaticon-car-compact{
          font-size: 3vh;
        }
        &.green{
          color: green;
        }
        &.red{
          color: red;
        }

      }

    }
    #transport-speed{
      flex-grow: 1;
      max-width: 5vh;
      text-align: right;
      padding-right: 15px;
      padding-top: .5vh;
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