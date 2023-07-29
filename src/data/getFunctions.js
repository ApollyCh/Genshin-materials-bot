import { returnCharacter } from '@/data/returnDataDb'

export function getMora() {
  let mora = [
    [
      0, 24200, 44200, 160000, 200000, 316000, 376000, 547000, 627000, 866200,
      966200, 1228600, 1408600, 2093400,
    ], // current -- 1
    [
      0, 0, 20000, 135800, 175800, 291800, 351800, 522800, 602800, 842000,
      942000, 1264400, 1384400, 2069200,
    ], // current -- 20
    [
      0, 0, 0, 115800, 155800, 271800, 331800, 502800, 582800, 822000, 922000,
      1244400, 1364400, 2049200,
    ], // current -- 20+
    [
      0, 0, 0, 0, 40000, 156000, 216000, 387000, 467000, 706200, 806200,
      1128600, 1248600, 1933400,
    ], //current -- 40
    [
      0, 0, 0, 0, 0, 116000, 176000, 347000, 427000, 666200, 766200, 1088600,
      1208600, 1893400,
    ], //current -- 40+
    [
      0, 0, 0, 0, 0, 0, 60000, 231000, 311000, 550200, 650200, 972600, 1092600,
      1777400,
    ], //current -- 50
    [
      0, 0, 0, 0, 0, 0, 0, 171000, 251000, 490200, 590200, 912600, 1032600,
      1717400,
    ], //current -- 50+
    [0, 0, 0, 0, 0, 0, 0, 0, 80000, 319200, 419200, 741600, 861600, 1546400], // current -- 60
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 239200, 339200, 661600, 781600, 1466400], // current -- 60+
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100000, 422400, 542400, 1227200], // current -- 70
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 322400, 422400, 1127200], // current -- 70+
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120000, 804800], //current -- 80
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 684800], //current -- 80+
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
  return mora
}

export function getPurpleBook() {
  let book = [
    [0, 6, 6, 34, 34, 63, 63, 105, 105, 164, 164, 244, 244, 415], // current -- 1
    [0, 0, 0, 28, 28, 57, 57, 99, 99, 158, 158, 238, 238, 409], // current -- 20
    [0, 0, 0, 28, 28, 57, 57, 99, 99, 158, 158, 238, 238, 409], // current -- 20+
    [0, 0, 0, 0, 0, 29, 29, 71, 71, 130, 130, 210, 210, 381], //current -- 40
    [0, 0, 0, 0, 0, 29, 29, 71, 71, 130, 130, 210, 210, 381], //current -- 40+
    [0, 0, 0, 0, 0, 0, 0, 42, 42, 101, 101, 181, 181, 352], //current -- 50
    [0, 0, 0, 0, 0, 0, 0, 42, 42, 101, 101, 181, 181, 352], //current -- 50+
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 59, 139, 139, 310], // current -- 60
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 59, 139, 139, 310], // current -- 60+
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 80, 251], // current -- 70
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 80, 251], // current -- 70+
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 171], //current -- 80
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 171], //current -- 80+
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //current -- 80+
    // if current is 90lvl, then 0 for all needed lvl
  ]
  return book
}

export function getBrownBook() {
  let book = [
    [0, 0, 0, 3, 3, 3, 3, 6, 6, 9, 9, 11, 11, 11], // current -- 1
    [0, 0, 0, 3, 3, 3, 3, 6, 6, 9, 9, 11, 11, 11],
    [0, 0, 0, 3, 3, 3, 3, 6, 6, 9, 9, 11, 11, 11],
    [0, 0, 0, 3, 3, 3, 3, 6, 6, 9, 9, 11, 11, 11],
    [0, 0, 0, 3, 3, 3, 3, 6, 6, 9, 9, 11, 11, 11],
    [0, 0, 0, 3, 3, 3, 3, 6, 6, 9, 9, 11, 11, 11],
    [0, 0, 0, 3, 3, 3, 3, 6, 6, 9, 9, 11, 11, 11],
    [0, 0, 0, 3, 3, 3, 3, 6, 6, 9, 9, 11, 11, 11],
    [0, 0, 0, 3, 3, 3, 3, 6, 6, 9, 9, 11, 11, 11],
    [0, 0, 0, 3, 3, 3, 3, 6, 6, 9, 9, 11, 11, 11],
    [0, 0, 0, 3, 3, 3, 3, 6, 6, 9, 9, 11, 11, 11],
    [0, 0, 0, 3, 3, 3, 3, 6, 6, 9, 9, 11, 11, 11],
    [0, 0, 0, 3, 3, 3, 3, 6, 6, 9, 9, 11, 11, 11],
    [0, 0, 0, 3, 3, 3, 3, 6, 6, 9, 9, 11, 11, 11],
  ]
  return book
}

export function getWhiteBook() {
  let book = [
    [0, 1, 1, 5, 5, 5, 5, 5, 5, 6, 6, 8, 8, 12], // current -- 1
    [0, 0, 0, 4, 4, 4, 4, 4, 4, 5, 5, 7, 7, 11],
    [0, 0, 0, 4, 4, 4, 4, 4, 4, 5, 5, 7, 7, 11],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 7],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 7],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 7],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 7],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 7],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 7],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
  return book
}

export function getNaturalMaterials(name) {
  let materials = [
    // 1
    [
      0,
      0,
      returnCharacter(name).costs.ascend1[2].count,
      0,
      returnCharacter(name).costs.ascend1[2].count +
        returnCharacter(name).costs.ascend2[3].count,
      0,
      returnCharacter(name).costs.ascend1[2].count +
        returnCharacter(name).costs.ascend2[3].count +
        returnCharacter(name).costs.ascend3[3].count,
      0,
      returnCharacter(name).costs.ascend1[2].count +
        returnCharacter(name).costs.ascend2[3].count +
        returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count,
      0,
      returnCharacter(name).costs.ascend1[2].count +
        returnCharacter(name).costs.ascend2[3].count +
        returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count,
      0,
      returnCharacter(name).costs.ascend1[2].count +
        returnCharacter(name).costs.ascend2[3].count +
        returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count +
        returnCharacter(name).costs.ascend6[3].count,
      returnCharacter(name).costs.ascend1[2].count +
        returnCharacter(name).costs.ascend2[3].count +
        returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count +
        returnCharacter(name).costs.ascend6[3].count,
    ],
    // 20
    [
      0,
      0,
      returnCharacter(name).costs.ascend1[2].count,
      0,
      returnCharacter(name).costs.ascend1[2].count +
        returnCharacter(name).costs.ascend2[3].count,
      0,
      returnCharacter(name).costs.ascend1[2].count +
        returnCharacter(name).costs.ascend2[3].count +
        returnCharacter(name).costs.ascend3[3].count,
      0,
      returnCharacter(name).costs.ascend1[2].count +
        returnCharacter(name).costs.ascend2[3].count +
        returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count,
      0,
      returnCharacter(name).costs.ascend1[2].count +
        returnCharacter(name).costs.ascend2[3].count +
        returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count,
      0,
      returnCharacter(name).costs.ascend1[2].count +
        returnCharacter(name).costs.ascend2[3].count +
        returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count +
        returnCharacter(name).costs.ascend6[3].count,
      returnCharacter(name).costs.ascend1[2].count +
        returnCharacter(name).costs.ascend2[3].count +
        returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count +
        returnCharacter(name).costs.ascend6[3].count,
    ],

    // 20+
    [
      0,
      0,
      0,
      0,
      returnCharacter(name).costs.ascend2[3].count,
      0,
      returnCharacter(name).costs.ascend2[3].count +
        returnCharacter(name).costs.ascend3[3].count,
      0,
      returnCharacter(name).costs.ascend2[3].count +
        returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count,
      0,
      returnCharacter(name).costs.ascend2[3].count +
        returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count,
      0,
      returnCharacter(name).costs.ascend2[3].count +
        returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count +
        returnCharacter(name).costs.ascend6[3].count,
      returnCharacter(name).costs.ascend2[3].count +
        returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count +
        returnCharacter(name).costs.ascend6[3].count,
    ],
    // 40
    [
      0,
      0,
      0,
      0,
      returnCharacter(name).costs.ascend2[3].count,
      0,
      returnCharacter(name).costs.ascend2[3].count +
        returnCharacter(name).costs.ascend3[3].count,
      0,
      returnCharacter(name).costs.ascend2[3].count +
        returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count,
      0,
      returnCharacter(name).costs.ascend2[3].count +
        returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count,
      0,
      returnCharacter(name).costs.ascend2[3].count +
        returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count +
        returnCharacter(name).costs.ascend6[3].count,
      returnCharacter(name).costs.ascend2[3].count +
        returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count +
        returnCharacter(name).costs.ascend6[3].count,
    ],
    //40+
    [
      0,
      0,
      0,
      0,
      0,
      0,
      returnCharacter(name).costs.ascend3[3].count,
      0,
      returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count,
      0,
      returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count,
      0,
      returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count +
        returnCharacter(name).costs.ascend6[3].count,
      returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count +
        returnCharacter(name).costs.ascend6[3].count,
    ],
    //50
    [
      0,
      0,
      0,
      0,
      0,
      0,
      returnCharacter(name).costs.ascend3[3].count,
      0,
      returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count,
      0,
      returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count,
      0,
      returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count +
        returnCharacter(name).costs.ascend6[3].count,
      returnCharacter(name).costs.ascend3[3].count +
        returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count +
        returnCharacter(name).costs.ascend6[3].count,
    ],
    //50+
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      returnCharacter(name).costs.ascend4[3].count,
      0,
      returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count,
      0,
      returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count +
        returnCharacter(name).costs.ascend6[3].count,
      returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count +
        returnCharacter(name).costs.ascend6[3].count,
    ],
    //60
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      returnCharacter(name).costs.ascend4[3].count,
      0,
      returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count,
      0,
      returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count +
        returnCharacter(name).costs.ascend6[3].count,
      returnCharacter(name).costs.ascend4[3].count +
        returnCharacter(name).costs.ascend5[3].count +
        returnCharacter(name).costs.ascend6[3].count,
    ],
    //60+
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      returnCharacter(name).costs.ascend5[3].count,
      0,
      returnCharacter(name).costs.ascend5[3].count +
        returnCharacter(name).costs.ascend6[3].count,
      returnCharacter(name).costs.ascend5[3].count +
        returnCharacter(name).costs.ascend6[3].count,
    ],
    //70
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      returnCharacter(name).costs.ascend5[3].count,
      0,
      returnCharacter(name).costs.ascend5[3].count +
        returnCharacter(name).costs.ascend6[3].count,
      returnCharacter(name).costs.ascend5[3].count +
        returnCharacter(name).costs.ascend6[3].count,
    ],
    //70+
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      returnCharacter(name).costs.ascend6[3].count,
      returnCharacter(name).costs.ascend6[3].count,
    ],
    //80
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      returnCharacter(name).costs.ascend6[3].count,
      returnCharacter(name).costs.ascend6[3].count,
    ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
  return materials
}

export function getFirstMobeLevel() {
  let materials = [
    [0, 0, 3, 3, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
    [0, 0, 3, 3, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
    [0, 0, 0, 0, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
    [0, 0, 0, 0, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
  return materials
}

export function getSecondMobeLevel() {
  let materials = [
    [0, 0, 0, 0, 0, 0, 12, 12, 30, 30, 30, 30, 30, 30],
    [0, 0, 0, 0, 0, 0, 12, 12, 30, 30, 30, 30, 30, 30],
    [0, 0, 0, 0, 0, 0, 12, 12, 30, 30, 30, 30, 30, 30],
    [0, 0, 0, 0, 0, 0, 12, 12, 30, 30, 30, 30, 30, 30],
    [0, 0, 0, 0, 0, 0, 12, 12, 30, 30, 30, 30, 30, 30],
    [0, 0, 0, 0, 0, 0, 12, 12, 30, 30, 30, 30, 30, 30],
    [0, 0, 0, 0, 0, 0, 0, 18, 18, 18, 18, 18, 18, 18],
    [0, 0, 0, 0, 0, 0, 0, 0, 18, 18, 18, 18, 18, 18],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
  return materials
}

export function getThirdMobeLevel() {
  let materials = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 36, 36],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 36, 36],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 36, 36],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 36, 36],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 36, 36],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 36, 36],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 36, 36],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 36, 36],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 36, 36],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 36, 36],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 36, 36],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 36],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
  return materials
}

export function getBoss() {
  let materials = [
    [0, 0, 0, 0, 2, 2, 6, 6, 14, 14, 26, 26, 46, 46],
    [0, 0, 0, 0, 2, 2, 6, 6, 14, 14, 26, 26, 46, 46],
    [0, 0, 0, 0, 2, 2, 6, 6, 14, 14, 26, 26, 46, 46],
    [0, 0, 0, 0, 2, 2, 6, 6, 14, 14, 26, 26, 46, 46],
    [0, 0, 0, 0, 0, 0, 4, 4, 12, 12, 24, 24, 44, 44],
    [0, 0, 0, 0, 0, 0, 4, 4, 12, 12, 24, 24, 44, 44],
    [0, 0, 0, 0, 0, 0, 0, 2, 8, 8, 20, 20, 40, 40],
    [0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 20, 20, 40, 40],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 32, 32],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 32, 32],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 20],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 20],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
  return materials
}

export function getFirstStone() {
  let materials = [
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]

  return materials
}

export function getSecondStone() {
  let materials = [
    [0, 0, 0, 0, 3, 3, 9, 9, 9, 9, 9, 9, 9, 9],
    [0, 0, 0, 0, 3, 3, 9, 9, 9, 9, 9, 9, 9, 9],
    [0, 0, 0, 0, 3, 3, 9, 9, 9, 9, 9, 9, 9, 9],
    [0, 0, 0, 0, 3, 3, 9, 9, 9, 9, 9, 9, 9, 9],
    [0, 0, 0, 0, 0, 3, 9, 9, 9, 9, 9, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]

  return materials
}

export function getThirdStone() {
  let materials = [
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 9, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 9, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 9, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 9, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 9, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 9, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 9, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 9, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 9, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]

  return materials
}

export function getFirstBook() {
  let materials = [
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [0, 0, 3, 3, 3, 3, 3, 3, 3, 3],
    [0, 0, 0, 3, 3, 3, 3, 3, 3, 3],
    [0, 0, 0, 0, 3, 3, 3, 3, 3, 3],
    [0, 0, 0, 0, 0, 3, 3, 3, 3, 3],
    [0, 0, 0, 0, 0, 0, 3, 3, 3, 3],
    [0, 0, 0, 0, 0, 0, 0, 3, 3, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]

  return materials
}

export function getSecondBook() {
  let materials = [
    [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
    [0, 0, 2, 6, 12, 21, 21, 21, 21, 21],
    [0, 0, 0, 4, 10, 19, 19, 19, 19, 19],
    [0, 0, 0, 0, 6, 15, 15, 15, 15, 15],
    [0, 0, 0, 0, 0, 9, 9, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 9, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 9, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]

  return materials
}

export function getThirdBook() {
  let materials = [
    [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
    [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
    [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
    [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
    [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
    [0, 0, 0, 0, 0, 0, 4, 10, 22, 38],
    [0, 0, 0, 0, 0, 0, 0, 6, 18, 34],
    [0, 0, 0, 0, 0, 0, 0, 0, 12, 28],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 16],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]

  return materials
}

export function getWeeklyBoss() {
  let materials = [
    [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
    [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
    [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
    [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
    [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
    [0, 0, 0, 0, 0, 0, 1, 2, 4, 6],
    [0, 0, 0, 0, 0, 0, 0, 1, 3, 5],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]

  return materials
}

export function getMoraTalents() {
  let materials = [
    [0, 12500, 30000, 55000, 85000, 122500, 242500, 502500, 952500, 1652500],
    [0, 0, 17500, 42500, 72500, 110000, 230000, 490000, 940000, 1640000],
    [0, 0, 0, 25000, 55000, 92500, 212500, 472500, 922500, 1622500],
    [0, 0, 0, 0, 30000, 67500, 187500, 447500, 897500, 1597500],
    [0, 0, 0, 0, 0, 37500, 157500, 417500, 867500, 1567500],
    [0, 0, 0, 0, 0, 0, 120000, 380000, 830000, 1530000],
    [0, 0, 0, 0, 0, 0, 0, 260000, 710000, 1410000],
    [0, 0, 0, 0, 0, 0, 0, 0, 450000, 1150000],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 700000],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]

  return materials
}
