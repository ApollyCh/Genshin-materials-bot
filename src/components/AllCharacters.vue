<script setup>
import { returnAllCharacters, returnCharacter } from '@/data/returnDataDb'
import IconPanel from '@/components/IconPanel.vue'

let all = returnAllCharacters()
</script>

<template>
  <div class="characters">
    <IconPanel
      v-for="char in all"
      :key="char"
      :char="returnCharacter(char)"
      :rarity="returnCharacter(char).rarity"
      :name="returnCharacter(char).name"
    ></IconPanel>
  </div>
</template>

<style scoped>
.characters {
  position: relative;
  display: grid;
  flex-direction: column;
  margin-top: 120px;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 1em;
  margin-left: calc(50vw - 192px);
}
</style>
