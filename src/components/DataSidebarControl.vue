<template>
  <div class="sidebar">
    <h3 class="title">Состояние окружения</h3>
    <div class="input-field">
      <input
        id="stateControlEnabled"
        type="checkbox"
        v-model="stateControlEnabled"
      />
      <label for="stateControlEnabled">Активность GUI</label>
    </div>
    <h4>Состояние авто</h4>
    <div class="input-field">
      <input
        id="carLockedDoors"
        type="checkbox"
        v-model="carLockedDoors" />
      <label for="carLockedDoors">Двери</label>
    </div>
    <div class="input-field">
      <input id="carHeadlight" type="checkbox" v-model="carHeadlight" />
      <label for="carHeadlight">Свет</label>
    </div>
    <div class="input-field range">
      <label for="carDamage">Повреждения {{carDamage}}%</label>
      <input
        id="carDamage"
        type="range"
        min="0"
        max="100"
        v-model.number="carDamage"
      />
    </div>
    <div class="input-field range">
      <label for="carFuel">Топливо {{fuelLevel}}</label>
      <input
        id="carFuel"
        type="range"
        min="0"
        max="10"
        v-model.number="carFuelLevel" />
    </div>
    <div class="input-field range">
      <label for="carSpeed">Скорость {{carSpeed}} <sub>км/ч</sub> </label>
      <input
        id="carSpeed"
        type="range"
        min="0"
        max="120"
        v-model.number="carSpeed" />
    </div>
    <h4>Состояние пользователя</h4>
<!--     <div class="input-field">
      <label for="userMoney">Деньги</label>
      <input id="userMoney" type="number" min="0" v-model.number="userMoney" />
    </div> -->
    <div class="input-field">
      <input
        id="userArmedOpen"
        type="checkbox"
        v-model="userArmedOpen" />
      <label for="userArmedOpen">Вооружен {{userArmedOpen}}</label>
    </div>
    <template v-if="userArmedOpen">
      <div class="input-field">
        <label>Выберите тип оружия:</label>
        <select v-model="userArmed">
          <option :value="null">Без оружия</option>
          <option
            v-for="(weapon, key) in arsenal"
            :value="weapon"
            :key="key"> {{ weapon.name }}</option>
        </select>
      </div>
      <div class="input-field" v-if="userArmed && (userArmed.ammoLeft || userArmed.ammoInClip)">
        <button
        @click='$store.dispatch("armory/MAKE_SHOT")'>
          Пыщь Пыщь ) {{userArmed.ammoInClip}}/{{userArmed.ammoLeft}}
        </button>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DataSidebarControl",
  data: () => ({
    userArmedOpen: false
  }),
  computed: {
    ...mapGetters(
      {
        controlsEnabled: 'controlsEnabled',
        doorsOpen: 'transport/doorsOpen',
        headLightOn: 'transport/headLightOn',
        damageScore: 'transport/damageScore',
        fuelCapacity: 'transport/fuelCapacity',
        fuelLevel: 'transport/fuelLevel',
        speed: 'transport/speed',
        inArms: 'armory/inArms',
        arsenal: 'armory/arsenal',
      }
    ),
    stateControlEnabled: {
      get() {
        return this.controlsEnabled;
      },
      set(value) {
        this.$store.commit("TOGGLE_CONTROLS", !!value);
      }
    },
    carLockedDoors: {
      get() {
        return this.doorsOpen;
      },
      set(value) {
        this.$store.commit("transport/TOGGLE_DOORS", !!value);
      }
    },
    carHeadlight: {
      get() {
        return this.headLightOn;
      },
      set(value) {
        this.$store.commit("transport/TOGGLE_HEADLIGHT", !!value);
      }
    },
    carDamage: {
      get() {
        return 100 - this.damageScore;
      },
      set(value) {
        this.$store.commit("transport/CAUSE_DAMAGE", value);
      }
    },
    carFuelLevel: {
      get() {
        return this.fuelLevel;
      },
      set(value) {
        this.$store.commit("transport/SET_FUEL_LEVEL", value);
      }
    },
    carSpeed: {
      get() {
        return this.speed;
      },
      set(value) {
        this.$store.commit("transport/SET_SPEED", value);
      }
    },
    // userMoney: {
    //   get() {
    //     return this.user.money;
    //   },
    //   set(value) {
    //     this.$store.commit("state/setMoney", value);
    //   }
    // },
    // weaponClipSize: {
    //   get() {
    //     return this.user.weapon.clipSize;
    //   },
    //   set(value) {
    //     this.$store.commit("state/setClipSize", value);
    //   }
    // },
    // weaponAmmo: {
    //   get() {
    //     return this.user.weapon.ammo;
    //   },
    //   set(value) {
    //     this.$store.commit("state/setAmmo", value);
    //   }
    // },
    // weaponType: {
    //   get() {
    //     return this.user.weapon.type;
    //   },
    //   set(value) {
    //     this.$store.commit("state/setWeaponType", value);
    //   }
    // },
    userArmed: {
      get() {
        return this.inArms;
      },
      set(weapon) {
        this.$store.dispatch('armory/SET_AMMO', weapon)
      }
    }
  }
};
</script>

<style lang="scss">
  .sidebar {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: calc(100vh - 60px);
    background-color: white;
    padding: 15px;
    .title {
      text-align: center;
    }
    .input-field {
      margin-bottom: 15px;
      &.range {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
</style>
