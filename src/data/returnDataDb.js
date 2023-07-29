import { characters, materials, talents } from 'genshin-db'
import { ref } from 'vue'

export function returnCharacter(name) {
  return characters(name)
}

export function returnAllCharacters() {
  return characters('names', { matchCategories: true })
}

export function returnElementIcon(element) {
  let dendro = 'Dendro'
  let pyro = 'Pyro'
  let cryo = 'Cryo'
  let hydro = 'Hydro'
  let geo = 'Geo'
  let electro = 'Electro'
  let anemo = 'Anemo'
  switch (element) {
    case dendro:
      return 'https://static.snapgenshin.com/IconElement/Grass.png'
    case pyro:
      return ' https://static.snapgenshin.com/IconElement/Fire.png'
    case cryo:
      return 'https://static.snapgenshin.com/IconElement/Ice.png'
    case hydro:
      return 'https://static.snapgenshin.com/IconElement/Water.png'
    case geo:
      return 'https://static.snapgenshin.com/IconElement/Rock.png'
    case electro:
      return 'https://static.snapgenshin.com/IconElement/Electric.png'
    case anemo:
      return 'https://static.snapgenshin.com/IconElement/Wind.png'
    default:
      return 'https://static.snapgenshin.com/IconElement/UI_Icon_Element_Orb_Common.png'
  }
}

export function returnTalents(name) {
  return talents(name)
}

export function returnMaterials(name) {
  return materials(name)
}

export function returnIndexLvl(lvl) {
  switch (lvl) {
    case '1':
      return 0
    case '20':
      return 1
    case '20+':
      return 2
    case '40':
      return 3
    case '40+':
      return 4
    case '50':
      return 5
    case '50+':
      return 6
    case '60':
      return 7
    case '60+':
      return 8
    case '70':
      return 9
    case '70+':
      return 10
    case '80':
      return 11
    case '80+':
      return 12
    case '90':
      return 13
  }
}
export function returnIndexTalent(lvl) {
  switch (lvl) {
    case '1':
      return 0
    case '2':
      return 1
    case '3':
      return 2
    case '4':
      return 3
    case '5':
      return 4
    case '6':
      return 5
    case '7':
      return 6
    case '8':
      return 7
    case '9':
      return 8
    case '10':
      return 9
  }
}

export function getCharacterMaterials(name) {
  let materials = [
    {
      name: 'Mora',
      count: ref(7050900),
      showStatus: true,
    },
    {
      name: "Hero's wit",
      count: ref(415),
      showStatus: true,
    },
    {
      name: "Adventurer's experience",
      count: ref(11),
      showStatus: true,
    },
    {
      name: "Wanderer's advice",
      count: ref(12),
      showStatus: true,
    },
    {
      name: returnCharacter(name).costs.ascend1[2].name,
      count: ref(168),
      type: 'Nature',
      showStatus: true,
    },
    {
      name: returnTalents(name).costs.lvl2[2].name,
      count: ref(36),
      type: 'First mobe',
      showStatus: true,
    },
    {
      name: returnTalents(name).costs.lvl3[2].name,
      count: ref(96),
      type: 'Second mobe',
      showStatus: true,
    },
    {
      name: returnTalents(name).costs.lvl7[2].name,
      count: ref(129),
      type: 'Third mobe',
      showStatus: true,
    },
    {
      name: returnCharacter(name).costs.ascend3[2].name,
      count: ref(46),
      type: 'Boss',
      showStatus: true,
    },
    {
      name: returnCharacter(name).costs.ascend1[1].name,
      count: ref(1),
      type: 'First stone',
      showStatus: true,
    },
    {
      name: returnCharacter(name).costs.ascend2[1].name,
      count: ref(9),
      type: 'Second stone',
      showStatus: true,
    },
    {
      name: returnCharacter(name).costs.ascend4[1].name,
      count: ref(9),
      type: 'Third stone',
      showStatus: true,
    },
    {
      name: returnCharacter(name).costs.ascend6[1].name,
      count: ref(6),
      type: 'Forth stone',
      showStatus: true,
    },
    {
      name: returnTalents(name).costs.lvl2[1].name,
      count: ref(9),
      type: 'First book',
      showStatus: true,
    },
    {
      name: returnTalents(name).costs.lvl3[1].name,
      count: ref(63),
      type: 'Second book',
      showStatus: true,
    },
    {
      name: returnTalents(name).costs.lvl7[1].name,
      count: ref(114),
      type: 'Third book',
      showStatus: true,
    },
    {
      name: returnTalents(name).costs.lvl10[3].name,
      count: ref(18),
      type: 'Weekly boss',
      showStatus: true,
    },
    {
      name: returnTalents(name).costs.lvl10[4].name,
      count: ref(3),
      type: 'Crown',
      showStatus: true,
    },
  ]
  return materials
}
