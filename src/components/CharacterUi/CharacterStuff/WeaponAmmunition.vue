<template>
  <div id="weapon-ammunition">
    <div class="ammunition-clip">
      <div
        :class="inArms.ammunitionType"
        class="ammunition-ammo-type"></div>
      <div class="ammunition-clip-total">
        <div class="ammunition-clip-size">{{inArms.ammoInClip}}</div>
        <div class="ammunition-ammo-left">{{inArms.ammoLeft}}</div>
      </div>
    </div>
    <div class="weapon-in-arms">
      <div
        :style="weaponSpriteImageStyle"
        class="weapon-image"></div>
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
      weaponSpriteImageStyle(){
        return {'background-position': this.inArms.spriteCoordinates}
      },
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
    justify-content: flex-start;
    align-items: center;
    .ammunition-clip{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      background: #ffbd02;
      width: 6vh;
      height: 3vh;
      margin-left: -1vh;
      color: #000;
      font-size: 1vh;
      &-total{
        display: flex;
        flex-direction: column;
        width: 3vh;
        font-weight: bold;
        justify-content: space-between;
        align-items: center;
      }
      .ammunition-ammo-type{
        width: 3vh;
        background: {
          repeat: no-repeat;
          position: center;
        }
        &.bullets{
          background-image: url('~/images/ammunition-type-bullets.png');
        }
      }
    }
  }
  .weapon-in-arms{
    margin-left: .6vh;
    .weapon-image{
      height: 5vh;
      width: 7vh;
      background: {
        image: url('~/images/weapons-sprite.png');
        repeat: no-repeat;
        size: 8vh;
      }
      filter: brightness(0) invert(1);
    }
  }
</style>