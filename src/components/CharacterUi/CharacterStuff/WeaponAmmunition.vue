<template>
  <div id="weapon-ammunition">
    <div class="ammunition-clip">
      <div
        :class="inArms.ammunitionType"
        class="ammunition-ammo-type" />
      <div class="ammunition-clip-total">
        <div class="ammunition-clip-size">{{inArms.ammoInClip}}</div>
        <div class="ammunition-ammo-left">{{inArms.ammoLeft}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from "vuex";
  export default {
    name: 'weaponAmmunition',
    components: {

    },
    computed: {
      ...mapGetters(
        {
          inArms: 'armory/inArms'
        }
      ),
      ammoInClip(){
        return Math.round(this.inArms.ammoLeft/this.inArms.clipSize)
      }
    },
    methods: {

    }
  }
</script>
<style lang="scss">
  #weapon-ammunition{
    display: flex;
    flex-direction: row;
    .ammunition-clip{
      position: absolute;
      left: -1.3vw;
      bottom: .7vh;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      background: #ffbd026e;
      width: 2.8vw;
      height: 2.5vh;
      color: #000;
      font-size: 10px;
      &-total{
        display: flex;
        flex-direction: column;
        width: 1vw;
        font-weight: bold;
        justify-content: space-between;
      }
      .ammunition-ammo-type{
        width: 1vw;
        background: {
          repeat: no-repeat;
          position: center;
        }
        &.bullets{
          background-image: url('/images/ammunition-type-bullets.png');
        }
      }
    }
  }
</style>