<script>
import { returnCharacter, returnElementIcon } from '@/data/returnDataDb'

export default {
  methods: {
    returnElementIcon,
    returnCharacter,
    goToCharacter(name) {
      this.$router.push(`/${name}`)
      console.log('tap')
    },
  },
  props: ['char', 'rarity', 'name'],
}
</script>

<template>
  <div
    class="icon5"
    v-show="rarity === '5' && name !== 'Aether' && name !== 'Lumine'"
    @click="goToCharacter(name)"
  >
    <img
      :src="returnElementIcon(returnCharacter(name).element)"
      alt="element"
      id="element"
    />
    <img :src="char.images.icon" id="icon" />
    <h2>{{ char.name }}</h2>
  </div>
  <div
    class="icon4"
    v-show="rarity === '4' && name !== 'Kirara'"
    @click="goToCharacter(name)"
  >
    <img
      :src="returnElementIcon(returnCharacter(name).element)"
      alt="element"
      id="element"
    />

    <img :src="char.images.icon" id="icon" />
    <h2>{{ char.name }}</h2>
  </div>
</template>

<style scoped>
.icon5 {
  border: 1px solid rgb(151, 94, 44);
  position: relative;
  width: 100px;
  margin-top: 30px;
  border-radius: 10px;
  transition-property: border;
  transition-duration: 0.2s;
  max-height: 100px;
  background-color: rgb(151, 94, 44);
  background-image: url('https://static.snapgenshin.com/Bg/UI_QUALITY_ORANGE.png');
  background-size: 100px 100px;
}

.icon4 {
  border: 1px solid rgb(138, 108, 169);
  position: relative;
  width: 100px;
  margin-top: 30px;
  border-radius: 10px;
  transition-property: border;
  transition-duration: 0.2s;
  max-height: 100px;
  background-image: url('https://static.snapgenshin.com/Bg/UI_QUALITY_PURPLE.png');
  background-size: 100px 100px;
}

.icon4:hover {
  border: 4px solid #ffffff;
  max-height: 118px;
  cursor: pointer;
}

.icon5:hover {
  border: 4px solid #ffffff;
  max-height: 118px;
  cursor: pointer;
}

h2 {
  color: rgb(73 83 102);
  background-color: rgb(222, 218, 210);
  border-radius: 0 0 7px 7px;
  width: 100px;
  position: relative;
  font-family: 'HYWenHei 85W', serif;
  text-align: center;
  text-shadow: 1px 1px 2px #b4b4b4;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#icon {
  width: 100px;
  height: 100px;
  position: relative;
  margin-bottom: -23px;
}

#element {
  position: absolute;
  width: 25px;
  height: 25px;
  z-index: 10;
}
</style>
