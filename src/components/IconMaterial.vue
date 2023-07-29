<script>
export default {
  props: ['materials', 'url', 'status'],
}
</script>

<template>
  <div class="icon">
    <img :src="url" alt="element" id="icon" />
    <h2>{{ materials }}</h2>
  </div>
</template>

<style scoped>
.icon {
  border: 1px solid rgb(44, 151, 139);
  position: relative;
  width: 70px;
  margin-top: 30px;
  border-radius: 10px;
  transition-property: border;
  transition-duration: 0.2s;
  max-height: 80px;
  height: 80px;
  background-image: url('https://static.snapgenshin.com/Bg/UI_QUALITY_BLUE.png');
  background-size: 100px 100px;
}

h2 {
  color: rgb(73 83 102);
  background-color: rgb(222, 218, 210);
  border-radius: 0 0 7px 7px;
  width: 72px;
  position: relative;
  font-family: 'HYWenHei 85W', serif;
  text-align: center;
  text-shadow: 1px 1px 2px #b4b4b4;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: -1px;
}

#icon {
  width: 70px;
  height: 70px;
  position: relative;
  margin-bottom: -18px;
}
</style>
