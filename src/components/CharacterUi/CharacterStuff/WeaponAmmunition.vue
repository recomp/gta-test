<template>
  <div id="weapon-ammunition">
    <div
      v-if="inArms.ammunitionType === 'bullets'"
      :class="{'bg-red blink' : ammoClipOverClass}"
      class="ammunition-clip">
      <div
        class="ammunition-ammo-type">
          <i class="fi flaticon-bullet-2"></i>
        </div>
      <div class="ammunition-clip-total">
        <div class="ammunition-clip-size">{{inArms.ammoInClip}}</div>
        <div class="ammunition-ammo-left">{{inArms.ammoLeft}}</div>
      </div>
    </div>
    <div class="weapon-in-arms">
      <div
        :style="weaponSpriteImageStyle"
        :class="{'blink' : weaponOverStyle}"
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
      ammoClipOverClass(){
        return this.inArms.ammoInClip <= 4
      },
      weaponOverStyle(){
        return this.inArms.ammoInClip === 0
      },
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
      align-items: center;
      background: #ffbd02;
      width: 7vh;
      height: 4vh;
      margin-left: -1vh;
      color: #000;
      font-size: 1.3vh;
      line-height: 1.5vh;
      &-total{
        display: flex;
        flex-direction: column;
        width: 3vh;
        font-weight: bold;
        justify-content: space-between;
        align-items: center;
      }
      .ammunition-ammo-type{
        width: 4vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        i{
          font-size: 3vh;
        }
      }
    }
  }
  .weapon-in-arms{
    margin: 0 1vh;
    height: 6vh;
    padding-top: 2vh;
    .weapon-image{
      height: 5vh;
      width: 7vh;
      background: {
        image: url('~@/assets/images/weapons-sprite.png');
        repeat: no-repeat;
        size: 8vh;
      }
      filter: brightness(0) invert(1);
    }
  }
</style>