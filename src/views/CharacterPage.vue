<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import {
  getCharacterMaterials,
  returnCharacter,
  returnElementIcon,
  returnIndexLvl,
  returnIndexTalent,
  returnTalents,
} from '@/data/returnDataDb'
import IconMaterial from '@/components/IconMaterial.vue'
import { materials } from 'genshin-db'
import {
  getPurpleBook,
  getMora,
  getBrownBook,
  getWhiteBook,
  getNaturalMaterials,
  getFirstMobeLevel,
  getSecondMobeLevel,
  getThirdMobeLevel,
  getBoss,
  getFirstStone,
  getSecondStone,
  getThirdStone,
  getFirstBook,
  getSecondBook,
  getThirdBook,
  getWeeklyBoss,
  getMoraTalents,
} from '@/data/getFunctions'

const route = useRoute()
const r = ref()
r.value = route.params
const name = r.value.name

const image = `https://static.snapgenshin.com/GachaAvatarImg/${
  returnCharacter(name).images.namegachasplash
}.png`

let beforeLevel = ref('1')
let afterLevel = ref('90')
let beforeSkill = ref('1')
let afterSkill = ref('10')
let beforeAttack = ref('1')
let afterAttack = ref('10')
let beforeBurst = ref('1')
let afterBurst = ref('10')
let m = getCharacterMaterials(name)

function getMaterials() {
  for (let n = 0; n < m.length; n++) {
    if (m[n].name === 'Mora') {
      m[n].count.value =
        getMora()[returnIndexLvl(beforeLevel.value)][
          returnIndexLvl(afterLevel.value)
        ] +
        getMoraTalents()[returnIndexTalent(beforeAttack.value)][
          returnIndexTalent(afterAttack.value)
        ] +
        getMoraTalents()[returnIndexTalent(beforeSkill.value)][
          returnIndexTalent(afterSkill.value)
        ] +
        getMoraTalents()[returnIndexTalent(beforeBurst.value)][
          returnIndexTalent(afterBurst.value)
        ]
    }

    if (m[n].name === "Hero's wit")
      m[n].count.value =
        getPurpleBook()[returnIndexLvl(beforeLevel.value)][
          returnIndexLvl(afterLevel.value)
        ]

    if (m[n].name === "Adventurer's experience")
      m[n].count.value =
        getBrownBook()[returnIndexLvl(beforeLevel.value)][
          returnIndexLvl(afterLevel.value)
        ]

    if (m[n].name === "Wanderer's advice")
      m[n].count.value =
        getWhiteBook()[returnIndexLvl(beforeLevel.value)][
          returnIndexLvl(afterLevel.value)
        ]

    if (m[n].type === 'Nature')
      m[n].count.value =
        getNaturalMaterials(name)[returnIndexLvl(beforeLevel.value)][
          returnIndexLvl(afterLevel.value)
        ]

    if (m[n].type === 'First mobe')
      m[n].count.value =
        getFirstMobeLevel()[returnIndexLvl(beforeLevel.value)][
          returnIndexLvl(afterLevel.value)
        ]

    if (m[n].type === 'Second mobe')
      m[n].count.value =
        getSecondMobeLevel()[returnIndexLvl(beforeLevel.value)][
          returnIndexLvl(afterLevel.value)
        ]

    if (m[n].type === 'Third mobe')
      m[n].count.value =
        getThirdMobeLevel()[returnIndexLvl(beforeLevel.value)][
          returnIndexLvl(afterLevel.value)
        ]

    if (m[n].type === 'Boss')
      m[n].count.value =
        getBoss()[returnIndexLvl(beforeLevel.value)][
          returnIndexLvl(afterLevel.value)
        ]

    if (m[n].type === 'First stone')
      m[n].count.value =
        getFirstStone()[returnIndexLvl(beforeLevel.value)][
          returnIndexLvl(afterLevel.value)
        ]

    if (m[n].type === 'Second stone')
      m[n].count.value =
        getSecondStone()[returnIndexLvl(beforeLevel.value)][
          returnIndexLvl(afterLevel.value)
        ]

    if (m[n].type === 'Third stone')
      m[n].count.value =
        getThirdStone()[returnIndexLvl(beforeLevel.value)][
          returnIndexLvl(afterLevel.value)
        ]

    if (m[n].type === 'Forth stone') {
      if (
        afterLevel.value === '80' ||
        afterLevel.value === '80+' ||
        afterLevel.value === '90'
      )
        m[n].count.value = 6
      else m[n].count.value = 0
    }

    if (m[n].type === 'First book')
      m[n].count.value =
        getFirstBook()[returnIndexTalent(beforeAttack.value)][
          returnIndexTalent(afterAttack.value)
        ] +
        getFirstBook()[returnIndexTalent(beforeSkill.value)][
          returnIndexTalent(afterSkill.value)
        ] +
        getFirstBook()[returnIndexTalent(beforeBurst.value)][
          returnIndexTalent(afterBurst.value)
        ]

    if (m[n].type === 'Second book')
      m[n].count.value =
        getSecondBook()[returnIndexTalent(beforeAttack.value)][
          returnIndexTalent(afterAttack.value)
        ] +
        getSecondBook()[returnIndexTalent(beforeSkill.value)][
          returnIndexTalent(afterSkill.value)
        ] +
        getSecondBook()[returnIndexTalent(beforeBurst.value)][
          returnIndexTalent(afterBurst.value)
        ]

    if (m[n].type === 'Third book')
      m[n].count.value =
        getThirdBook()[returnIndexTalent(beforeAttack.value)][
          returnIndexTalent(afterAttack.value)
        ] +
        getThirdBook()[returnIndexTalent(beforeSkill.value)][
          returnIndexTalent(afterSkill.value)
        ] +
        getThirdBook()[returnIndexTalent(beforeBurst.value)][
          returnIndexTalent(afterBurst.value)
        ]

    if (m[n].type === 'Weekly boss')
      m[n].count.value =
        getWeeklyBoss()[returnIndexTalent(beforeAttack.value)][
          returnIndexTalent(afterAttack.value)
        ] +
        getWeeklyBoss()[returnIndexTalent(beforeSkill.value)][
          returnIndexTalent(afterSkill.value)
        ] +
        getWeeklyBoss()[returnIndexTalent(beforeBurst.value)][
          returnIndexTalent(afterBurst.value)
        ]

    if (m[n].type === 'Crown') {
      m[n].count.value = 0
      if (afterAttack.value === '10' && beforeAttack.value !== '10')
        m[n].count.value += 1
      if (afterSkill.value === '10' && beforeSkill.value !== '10')
        m[n].count.value += 1
      if (afterBurst.value === '10' && beforeBurst.value !== '10')
        m[n].count.value += 1
    }

    if (m[n].count.value === 0) m[n].showStatus = false
    else m[n].showStatus = true
    m[n].key++
  }
}

function clear() {
  beforeLevel.value = '1'
  afterLevel.value = '1'
  beforeSkill.value = '1'
  afterSkill.value = '1'
  beforeAttack.value = '1'
  afterAttack.value = '1'
  beforeBurst.value = '1'
  afterBurst.value = '1'
  getMaterials()
}

function maximize() {
  beforeLevel.value = '1'
  afterLevel.value = '90'
  beforeSkill.value = '1'
  afterSkill.value = '10'
  beforeAttack.value = '1'
  afterAttack.value = '10'
  beforeBurst.value = '1'
  afterBurst.value = '10'
  getMaterials()
}

const firstDay = materials(returnTalents(name).costs.lvl2[1].name).daysofweek[0]
const secondDay = materials(returnTalents(name).costs.lvl2[1].name)
  .daysofweek[1]
const thirdDay = materials(returnTalents(name).costs.lvl2[1].name).daysofweek[2]

const TOKEN = '5616594952:AAGjZ8_73gvN2RMmGwGs8qk3gS4_Vz9lOIE'
function subscribe() {


  console.log('Subscribe successfully!')
}
</script>

<template>
  <div class="info-page-container">
    <div class="heading" @click="$router.back()">
      <h1>Genshin Materials Bot</h1>
    </div>
    <div class="intro-container">
      <div class="image"><img :src="image" :alt="name" id="char" /></div>
      <div class="info">
        <img
          :src="returnElementIcon(returnCharacter(name).element)"
          alt="element"
          id="elem"
        />
        <div class="name-and-star">
          <h2>{{ name }}</h2>
          <div class="stars" v-show="returnCharacter(name).rarity === '5'">
            <img
              style="width: 18px; height: 18px"
              src="https://genshin-list.vercel.app/star-rating.png"
              alt="star-raiting"
            />
            <img
              style="width: 18px; height: 18px"
              src="https://genshin-list.vercel.app/star-rating.png"
              alt="star-raiting"
            />
            <img
              style="width: 18px; height: 18px"
              src="https://genshin-list.vercel.app/star-rating.png"
              alt="star-raiting"
            />
            <img
              style="width: 18px; height: 18px"
              src="https://genshin-list.vercel.app/star-rating.png"
              alt="star-raiting"
            />
            <img
              style="width: 18px; height: 18px"
              src="https://genshin-list.vercel.app/star-rating.png"
              alt="star-raiting"
            />
          </div>
          <div class="stars" v-show="returnCharacter(name).rarity === '4'">
            <img
              style="width: 18px; height: 18px"
              src="https://genshin-list.vercel.app/star-rating.png"
              alt="star-raiting"
            />
            <img
              style="width: 18px; height: 18px"
              src="https://genshin-list.vercel.app/star-rating.png"
              alt="star-raiting"
            />
            <img
              style="width: 18px; height: 18px"
              src="https://genshin-list.vercel.app/star-rating.png"
              alt="star-raiting"
            />
            <img
              style="width: 18px; height: 18px"
              src="https://genshin-list.vercel.app/star-rating.png"
              alt="star-raiting"
            />
          </div>
        </div>
      </div>
      <div class="description">
        <h3>{{ returnCharacter(name).element }}</h3>
        <h3>{{ returnCharacter(name).weapontype }}</h3>
        <h3>{{ returnCharacter(name).substat }}</h3>
        <h3>{{ returnCharacter(name).rarity }}-star</h3>
      </div>
    </div>
    <div class="attributes">
      <h2>Information</h2>
      <hr />
      <div class="main-info">
        <table class="table-info">
          <tbody>
            <tr>
              <td>Birthday</td>
              <td id="result">{{ returnCharacter(name).birthdaymmdd }}</td>
            </tr>
            <tr id="even">
              <td>Constellation</td>
              <td id="result">{{ returnCharacter(name).constellation }}</td>
            </tr>
            <tr>
              <td>Region</td>
              <td id="result">{{ returnCharacter(name).region }}</td>
            </tr>
            <tr id="even">
              <td>Affiliation</td>
              <td id="result">{{ returnCharacter(name).affiliation }}</td>
            </tr>
            <tr>
              <td>English VA</td>
              <td id="result">{{ returnCharacter(name).cv.english }}</td>
            </tr>
          </tbody>
        </table>
        <p class="after-table">
          {{ returnCharacter(name).description }}
        </p>
      </div>
    </div>
    <div class="materials-calculator">
      <h2>Materials Calculator</h2>
      <hr />
      <div class="selection-block">
        <div class="material-block">
          <h3>Level</h3>
          <div class="selections">
            <div class="before">
              <p>Before</p>
              <select
                v-model="beforeLevel"
                class="selectpicker"
                @change="getMaterials"
              >
                <option>1</option>
                <option>20</option>
                <option>20+</option>
                <option>40</option>
                <option>40+</option>
                <option>50</option>
                <option>50+</option>
                <option>60</option>
                <option>60+</option>
                <option>70</option>
                <option>70+</option>
                <option>80</option>
                <option>80+</option>
                <option>90</option>
              </select>
            </div>
            <p id="arrow">-></p>
            <div class="after">
              <p>After</p>
              <select
                v-model="afterLevel"
                class="selectpicker"
                @change="getMaterials"
              >
                <option>1</option>
                <option>20</option>
                <option>20+</option>
                <option>40</option>
                <option>40+</option>
                <option>50</option>
                <option>50+</option>
                <option>60</option>
                <option>60+</option>
                <option>70</option>
                <option>70+</option>
                <option>80</option>
                <option>80+</option>
                <option>90</option>
              </select>
            </div>
          </div>
        </div>
        <div class="material-block">
          <h3>Attack</h3>
          <div class="selections">
            <div class="before">
              <p>Before</p>
              <select
                v-model="beforeAttack"
                class="selectpicker"
                @change="getMaterials"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
            <p id="arrow">-></p>
            <div class="after">
              <p>After</p>
              <select
                v-model="afterAttack"
                class="selectpicker"
                @change="getMaterials"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
          </div>
        </div>
        <div class="material-block">
          <h3>Skill</h3>
          <div class="selections">
            <div class="before">
              <p>Before</p>
              <select
                v-model="beforeSkill"
                class="selectpicker"
                @change="getMaterials"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
            <p id="arrow">-></p>
            <div class="after">
              <p>After</p>
              <select
                v-model="afterSkill"
                class="selectpicker"
                @change="getMaterials"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
          </div>
        </div>
        <div class="material-block">
          <h3>Burst</h3>
          <div class="selections">
            <div class="before">
              <p>Before</p>
              <select
                v-model="beforeBurst"
                class="selectpicker"
                @change="getMaterials"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
            <p id="arrow">-></p>
            <div class="after">
              <p>After</p>
              <select
                v-model="afterBurst"
                class="selectpicker"
                @change="getMaterials"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="buttons">
        <button @click="clear">Clear</button>
        <button id="sub" @click='subscribe'>Subscribe</button>
        <button @click="maximize">Max</button>
      </div>
    </div>
    <hr />
    <h3 id="week-talents">
      Talents: {{ firstDay }}, {{ secondDay }}, {{ thirdDay }}
    </h3>
    <div class="materials">
      <IconMaterial
        v-for="mat in m"
        :key="mat.name"
        :status="mat.showStatus"
        :materials="mat.count"
        :url="materials(mat.name).images.fandom"
      ></IconMaterial>
    </div>
  </div>
</template>

<style scoped>
.info-page-container {
  overflow: hidden;
  background-color: #0e1418;
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
  background-color: #1e2939;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 0 0 7px 7px;
  box-shadow: 3px 5px 5px #090b0c;
}

h2 {
  font-family: 'HYWenHei 85W', serif;
  color: #b9b9b9;
  font-size: 22px;
  margin-left: 15px;
  position: relative;
}

.info h2 {
  font-size: 22px;
}

.description h3 {
  font-family: 'HYWenHei 85W', serif;
  color: #b9b9b9;
  font-size: 12px;
  position: relative;
  background-color: #38424f;
  width: max-content;
  padding: 7px;
  border-radius: 6px;
  height: max-content;
}

.description {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
}

.heading:hover {
  cursor: pointer;
}

.intro-container {
  display: block;
  margin-right: auto;
  margin-left: auto;

  position: relative;
  margin-top: 120px;
}

#char {
  position: relative;
  width: 150vw;
}

.image {
  position: relative;
  width: 100vw;
  left: -25%;
}

.info {
  display: flex;
  flex-direction: row;
}

.name-and-star {
  display: flex;
  flex-direction: column;
}

.stars {
  position: relative;
  margin-top: -15px;
  margin-left: 15px;
}

#result {
  text-align: right;
}

table {
  font-family: 'HYWenHei 85W', serif;
  font-size: 16px;
  position: relative;
  width: 100%;
  border-collapse: collapse;

  background-color: #1c262f;
}

td {
  color: #b9b9b9;
  padding: 10px;
}

tr#even {
  background-color: #181f23;
}

.after-table {
  font-family: 'HYWenHei 85W', serif;
  font-size: 14px;
  position: relative;
  width: 95%;
  color: #b9b9b9;
  margin-top: 0;
  padding: 15px 35px 10px 10px;
  text-align: justify;
  background-color: #181f23;
}

.attributes {
  padding-bottom: 5px;
}

.selection-block {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 15px;
}

hr {
  background-color: #344646;
}

.material-block h3 {
  font-family: 'HYWenHei 85W', serif;
  color: #b9b9b9;
  font-size: 22px;
  margin-left: 15px;
  position: relative;
}

.selections {
  display: flex;
  flex-direction: row;
  font-family: 'HYWenHei 85W', serif;
  color: #b9b9b9;
  font-size: 18px;
  margin-left: 15px;
  margin-right: 15px;
  position: relative;
  text-align: center;
  margin-top: -20px;
  justify-content: center;
}

.selections p {
  position: relative;
  margin-bottom: -5px;
}

#arrow {
  position: relative;
  margin-top: 45px;
  width: 300px;
}

.buttons {
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  margin-top: 20px;
  justify-content: center;
  margin-bottom: 20px;
}

button {
  width: 150px;
  height: 40px;
  font-family: 'HYWenHei 85W', serif;
  color: #b9b9b9;
  font-size: 18px;
  background-color: #282c38;

  border: 2px solid #b9b9b9;
  border-radius: 6px;
}

.selectpicker {
  width: 130px;
  height: 40px;
  border-radius: 6px;
  font-family: 'HYWenHei 85W', serif;
  color: #b9b9b9;
  font-size: 16px;
  text-align: left;
  background-color: #1c262f;
  margin-top: 10px;
  border: 0;
  box-shadow: 0 6px 6px 3px #090b0c;
}

.materials {
  margin-bottom: 25px;
  position: relative;
  display: grid;
  flex-direction: column;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
}

#week-talents {
  font-family: 'HYWenHei 85W', serif;
  color: #b9b9b9;
  font-size: 16px;
  text-align: center;
  margin-bottom: -10px;
}

#sub {
  background-color: #38424f;
}

button:hover {
  cursor: pointer;
}

select:hover {
  cursor: pointer;
}
</style>
