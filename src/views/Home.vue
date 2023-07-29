<script setup>
import { returnAllCharacters, returnCharacter } from '@/data/returnDataDb'
import IconPanel from '@/components/IconPanel.vue'
import AllCharacters from '@/components/AllCharacters.vue'
</script>

<template>
  <div class="home-container">
    <div class="heading">
      <h1>Genshin Materials Bot</h1>
    </div>
    <div class="AllCharacters">
      <AllCharacters></AllCharacters>
    </div>
  </div>
</template>

<style scoped>
body {
  display: block;
  margin-right: auto;
  margin-left: auto;
}

h1 {
  font-family: 'HYWenHei 85W', serif;
  max-width: 100vw;
  text-align: center;
  color: #d9d6d6;
  margin-left: 10px;
  margin-right: 10px;
}

.heading {
  width: 100vw;
  height: max-content;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 0 0 7px 7px;
}

.heading:hover {
  cursor: pointer;
}
.home-container {
  width: 100px;
}
.AllCharacters {
  height: max-content;
  padding-bottom: 30px;
}
</style>
