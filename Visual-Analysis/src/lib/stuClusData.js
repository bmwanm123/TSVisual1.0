var X_Clust = [
  52.64944058,
  51.25333237,
  49.19516005,
  48.5,
  48.1,
  47.87358147,
  46.03618078,
  43.14046286,
  42.1431574,
  39.60329103,
  38.59401239,
  36.94835454,
  34.93944121,
  33.76848003,
  30.77052601,
  19.016512, //中间开始
  16.66592803,
  12.83550113,
  11.30557068,
  10.19395901,
  7.15862225,
  4.83038701,
  3.17722831,
  -0.48389369,
  -4.80431171,
  -7.36560908,
  -7.99716633,
  -10.35915539,
  -11.71388741,
  -13.96664299,
  -21.05337409,
  -25.80317478,
  -27.51796377,
  -29.64099718,
  -30.14825461,
  -32.09823268,
  -33.62173383,
  -35.2332236,
  -37.22874255,
  -39.3099855,
  -41.24496187,
  -43.46657788,
  -44.35209248,
  -44.95565176,
  -48.89813641,
  17.66592803, //从这开始添加
  11.58,
  5.11,
  1.13,
  -3.45,
  -10.12,
  -12.12,
  -9.78,
  -6.66,
  -1.11,
  4.43,
  7.66,
  20.1,
  12.11,
  3.12,
  -4.11,
  29.12,
  19.12,
  -22.12,
  -5.45,
  9.11,
  -53.11, //disgust开始
  -50.11,
  -48.68,
  -46.11,
  -49.11,
  -45.121,
  -40.11,
  -38.45,
  -37.66,
  -34.78,
  -33.45,
  -35.47,
  -38.45,
  5, //第二个disgust
  8,
  15,
  12,
  13,
  13.8,
  50.15, //sad开始
  44.12,
  38.14,
  42,
  41,
  43,
  25.15, //离散
  -5.47,
  -55.89
];

var Y_Clust = [
  -6.73477042,
  -14.090534,
  -15.0800735,
  -12,
  -6,
  -2.46437535,
  0.701835857,
  -16.0619274,
  2.76175745,
  -7.24653627,
  -7.39267234,
  -0.734943434,
  -0.84747417,
  14.6575262,
  -3.88848434,
  0.976630892, //中间开始
  13.2017332,
  -2.19515424,
  6.61947154,
  4.56607944,
  3.98787235,
  -2.07609606,
  4.44183397,
  -7.79959327,
  5.00026003,
  -5.40745904,
  1.48627664,
  -5.2067867,
  6.8731413,
  2.13380807,
  19.4515816,
  -13.0598186,
  -7.71107118,
  -9.95054189,
  -0.740139196,
  0.245749773,
  9.18020316,
  -2.18978518,
  -2.05267507,
  -3.51326636,
  -2.24777964,
  -6.32460696,
  -4.16406164,
  21.9365596,
  4.34850071,
  15.2017332, //从这开始添加
  15.68,
  14.45,
  11.45,
  10.55,
  15.5,
  22.33,
  17.12,
  18.13,
  21.33,
  18.55,
  20.11,
  22.11,
  28.11,
  27.66,
  30.12,
  35.14,
  38.14,
  32.55,
  45.11,
  35.14,
  45.22, //disgust开始
  42.12,
  39.45,
  37.56,
  38.41,
  39.14,
  37.44,
  38.14,
  40.12,
  42.14,
  45.44,
  46.79,
  48.99,
  49, //第二个disgust
  47,
  46,
  48,
  49,
  48.66,
  45.55, //sad开始
  43.45,
  44.59,
  44,
  42,
  43,
  -20.15, //离散
  -18.78,
  -17.15
];

var Stu2Clust = [
  {
    emotionlabel: "surprise",
    percentage: "68.54",
    yaw: "3.99",
    click: ["#8DEEEE", "#EEAD0E", "#E6E6FA", "#FFE4E1", "none", "none"]
  },
  {
    emotionlabel: "surprise",
    percentage: "90.95",
    yaw: "-3.43",
    click: ["#8DEEEE", "#EEAD0E", "none", "none", "none", "none"]
  },
  {
    emotionlabel: "surprise",
    percentage: "97.29",
    yaw: "-4.53",
    click: ["#8DEEEE", "#EEAD0E", "none", "none", "none", "#CDB38B"]
  },
  {
    emotionlabel: "disgust",
    percentage: "94.58",
    yaw: "8.0",
    click: ["none", "none", "#E6E6FA", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "disgust",
    percentage: "94.58",
    yaw: "8.0",
    click: ["none", "none", "#E6E6FA", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "fear",
    percentage: "94.58",
    yaw: "18.0",
    click: ["none", "none", "#E6E6FA", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "surprise",
    percentage: "73.41",
    yaw: "-11.06",
    click: ["#8DEEEE", "#EEAD0E", "#E6E6FA", "none", "none", "none"]
  },
  {
    emotionlabel: "anger",
    percentage: "73.3",
    yaw: "-5.83",
    click: ["none", "none", "#E6E6FA", "none", "none", "#CDB38B"]
  },
  {
    emotionlabel: "surprise",
    percentage: "90.56",
    yaw: "12.91",
    click: ["none", "none", "#E6E6FA", "none", "none", "none"]
  },
  {
    emotionlabel: "surprise",
    percentage: "88.52",
    yaw: "2.78",
    click: ["none", "none", "none", "none", "#ADD8E6", "#CDB38B"]
  },
  {
    emotionlabel: "surprise",
    percentage: "64.75",
    yaw: "2.58",
    click: ["none", "none", "#E6E6FA", "#FFE4E1", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "surprise",
    percentage: "99.76",
    yaw: "9.14",
    click: ["#8DEEEE", "#EEAD0E", "none", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "surprise",
    percentage: "95.12",
    yaw: "8.92",
    click: ["none", "none", "#E6E6FA", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "surprise",
    percentage: "99.02",
    yaw: "24.34",
    click: ["none", "none", "#E6E6FA", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "surprise",
    percentage: "99.68",
    yaw: "5.66",
    click: ["none", "none", "none", "none", "#ADD8E6", "none"]
  },
  {
    //中间neutral开始
    emotionlabel: "fear",
    percentage: "84.99",
    yaw: "9.89",
    click: ["#8DEEEE", "none", "#E6E6FA", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "81.54",
    yaw: "21.97",
    click: ["#8DEEEE", "none", "#E6E6FA", "none", "none", "none"]
  },
  {
    emotionlabel: "happiness",
    percentage: "79.33",
    yaw: "6.39",
    click: ["#8DEEEE", "#EEAD0E", "#E6E6FA", "none", "none", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "96.9",
    yaw: "15.11",
    click: ["#8DEEEE", "none", "#E6E6FA", "none", "none", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "99.38",
    yaw: "13.0",
    click: ["#8DEEEE", "none", "none", "#FFE4E1", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "99.0",
    yaw: "12.26",
    click: ["#8DEEEE", "#EEAD0E", "none", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "82.02",
    yaw: "6.08",
    click: ["#8DEEEE", "none", "none", "none", "none", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "98.17",
    yaw: "12.5",
    click: ["#8DEEEE", "#EEAD0E", "none", "none", "none", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "77.49",
    yaw: "0.08",
    click: ["#8DEEEE", "none", "#E6E6FA", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "62.87",
    yaw: "12.63",
    click: ["#8DEEEE", "none", "none", "#FFE4E1", "none", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "99.5",
    yaw: "2.1",
    click: ["#8DEEEE", "none", "none", "none", "none", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "83.23",
    yaw: "8.95",
    click: ["none", "none", "#E6E6FA", "none", "ADD8E6", "#CDB38B"]
  },
  {
    emotionlabel: "neutral",
    percentage: "96.72",
    yaw: "2.14",
    click: ["none", "#EEAD0E", "#E6E6FA", "#FFE4E1", "none", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "50.97",
    yaw: "14.13",
    click: ["#8DEEEE", "none", "none", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "anger",
    percentage: "61.41",
    yaw: "9.28",
    click: ["none", "#EEAD0E", "none", "#FFE4E1", "none", "#CDB38B"]
  },
  {
    emotionlabel: "happiness",
    percentage: "8.57",
    yaw: "26.19",
    click: ["#8DEEEE", "none", "none", "none", "#ADD8E6", "none"]
  },
  {
    //左边happy开始 14
    emotionlabel: "sadness",
    percentage: "65.73",
    yaw: "-6.53",
    click: ["none", "#EEAD0E", "#E6E6FA", "#FFE4E1", "none", "none"]
  },
  {
    emotionlabel: "happiness",
    percentage: "94.97",
    yaw: "-1.28",
    click: ["#8DEEEE", "#EEAD0E", "none", "#ADD8E6", "none", "none"]
  },
  {
    emotionlabel: "happiness",
    percentage: "76.69",
    yaw: "-3.63",
    click: ["none", "none", "#E6E6FA", "none", "#ADD8E6", "#CDB38B"]
  },
  {
    emotionlabel: "happiness",
    percentage: "98.89",
    yaw: "5.54",
    click: ["none", "none", "#E6E6FA", "none", "none", "none"]
  },
  {
    emotionlabel: "happiness",
    percentage: "55.35",
    yaw: "6.42",
    click: ["#8DEEEE", "#EEAD0E", "#E6E6FA", "#FFE4E1", "none", "none"]
  },
  {
    emotionlabel: "happiness",
    percentage: "95.29",
    yaw: "15.26",
    click: ["none", "none", "#E6E6FA", "#FFE4E1", "none", "none"]
  },
  {
    emotionlabel: "happiness",
    percentage: "56.31",
    yaw: "3.82",
    click: ["none", "none", "none", "#FFE4E1", "none", "none"]
  },
  {
    emotionlabel: "happiness",
    percentage: "94.04",
    yaw: "3.85",
    click: ["#8DEEEE", "#EEAD0E", "none", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "happiness",
    percentage: "66.73",
    yaw: "2.28",
    click: ["none", "none", "#E6E6FA", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "happiness",
    percentage: "98.4",
    yaw: "3.44",
    click: ["#8DEEEE", "#EEAD0E", "none", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "happiness",
    percentage: "99.87",
    yaw: "-0.75",
    click: ["#8DEEEE", "#EEAD0E", "none", "none", "none", "#CDB38B"]
  },
  {
    emotionlabel: "happiness",
    percentage: "98.8",
    yaw: "1.36",
    click: ["none", "none", "#E6E6FA", "#FFE4E1", "none", "#CDB38B"]
  },
  {
    emotionlabel: "happiness",
    percentage: "47.82",
    yaw: "27.39",
    click: ["#8DEEEE", "#EEAD0E", "#E6E6FA", "#FFE4E1", "none", "none"]
  },
  {
    emotionlabel: "happiness",
    percentage: "72.07",
    yaw: "9.62",
    click: ["none", "none", "#E6E6FA", "none", "#ADD8E6", "#CDB38B"]
  },
  {
    //从这开始添加  下方neutral开始21
    emotionlabel: "neutral",
    percentage: "98.8",
    yaw: "1.36",
    click: ["#8DEEEE", "#EEAD0E", "#E6E6FA", "#FFE4E1", "none", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "98.8",
    yaw: "1.36",
    click: ["#8DEEEE", "#EEAD0E", "none", "#FFE4E1", "none", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "98.8",
    yaw: "1.36",
    click: ["#8DEEEE", "#EEAD0E", "none", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "98.8",
    yaw: "1.36",
    click: ["none", "none", "#E6E6FA", "#FFE4E1", "none", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "98.8",
    yaw: "1.36",
    click: ["none", "none", "#E6E6FA", "none", "#ADD8E6", "#CDB38B"]
  },
  {
    emotionlabel: "neutral",
    percentage: "98.8",
    yaw: "1.36",
    click: ["none", "none", "#E6E6FA", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "98.8",
    yaw: "1.36",
    click: ["none", "none", "#E6E6FA", "none", "none", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "98.8",
    yaw: "1.36",
    click: ["none", "none", "#E6E6FA", "#FFE4E1", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "98.8",
    yaw: "1.36",
    click: ["none", "none", "none", "none", "#ADD8E6", "#CDB38B"]
  },
  {
    emotionlabel: "neutral",
    percentage: "98.8",
    yaw: "1.36",
    click: ["none", "none", "none", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "98.8",
    yaw: "1.36",
    click: ["none", "none", "#E6E6FA", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "98.8",
    yaw: "1.36",
    click: ["none", "none", "#E6E6FA", "", "none", "#CDB38B"]
  },
  {
    emotionlabel: "neutral",
    percentage: "98.8",
    yaw: "1.36",
    click: ["none", "none", "#E6E6FA", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "98.8",
    yaw: "1.36",
    click: ["#8DEEEE", "#EEAD0E", "none", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "98.8",
    yaw: "1.36",
    click: ["none", "none", "#E6E6FA", "#FFE4E1", "#ADD8E6", "#CDB38B"]
  },
  {
    emotionlabel: "neutral",
    percentage: "98.8",
    yaw: "1.36",
    click: ["#8DEEEE", "#EEAD0E", "none", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "sadness",
    percentage: "98.8",
    yaw: "1.36",
    click: ["none", "none", "#E6E6FA", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "anger",
    percentage: "98.8",
    yaw: "1.36",
    click: ["#8DEEEE", "#EEAD0E", "#E6E6FA", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "disgust",
    percentage: "98.8",
    yaw: "1.36",
    click: ["none", "none", "#E6E6FA", "none", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "fear",
    percentage: "98.8",
    yaw: "1.36",
    click: ["#8DEEEE", "#EEAD0E", "none", "none", "#ADD8E6", "#CDB38B"]
  },
  {
    emotionlabel: "neutral",
    percentage: "98.8",
    yaw: "1.36",
    click: ["#8DEEEE", "#EEAD0E", "#E6E6FA", "#FFE4E1", "none", "none"]
  },
  {
    //disgust开始 13
    emotionlabel: "disgust",
    percentage: "98.8",
    yaw: "28.36",
    click: ["#8DEEEE", "#EEAD0E", "#E6E6FA", "#FFE4E1", "none", "none"]
  },
  {
    emotionlabel: "disgust",
    percentage: "98.8",
    yaw: "45.36",
    click: ["#8DEEEE", "#EEAD0E", "none", "#FFE4E1", "none", "#85E0F"]
  },
  {
    emotionlabel: "disgust",
    percentage: "98.8",
    yaw: "21.36",
    click: ["none", "none", "#E6E6FA", "#FFE4E1", "none", "none"]
  },
  {
    emotionlabel: "disgust",
    percentage: "98.8",
    yaw: "41.36",
    click: ["none", "none", "none", "#FFE4E1", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "disgust",
    percentage: "98.8",
    yaw: "15.36",
    click: ["#8DEEEE", "#EEAD0E", "none", "#FFE4E1", "none", "none"]
  },
  {
    emotionlabel: "disgust",
    percentage: "98.8",
    yaw: "28.36",
    click: ["#8DEEEE", "#EEAD0E", "none", "#FFE4E1", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "disgust",
    percentage: "98.8",
    yaw: "11.36",
    click: ["#8DEEEE", "#EEAD0E", "#E6E6FA", "#FFE4E1", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "disgust",
    percentage: "98.8",
    yaw: "18.36",
    click: ["none", "none", "#E6E6FA", "#FFE4E1", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "disgust",
    percentage: "98.8",
    yaw: "15.36",
    click: ["#8DEEEE", "#EEAD0E", "none", "#FFE4E1", "none", "none"]
  },
  {
    emotionlabel: "disgust",
    percentage: "98.8",
    yaw: "22.36",
    click: ["#8DEEEE", "#EEAD0E", "none", "#FFE4E1", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "disgust",
    percentage: "98.8",
    yaw: "33.36",
    click: ["#8DEEEE", "#EEAD0E", "none", "#FFE4E1", "none", "none"]
  },
  {
    emotionlabel: "disgust",
    percentage: "98.8",
    yaw: "40.36",
    click: ["#8DEEEE", "#EEAD0E", "#E6E6FA", "#FFE4E1", "none", "none"]
  },
  {
    emotionlabel: "disgust",
    percentage: "98.8",
    yaw: "25.36",
    click: ["#8DEEEE", "#EEAD0E", "#E6E6FA", "#FFE4E1", "#ADD8E6", "#CDB38B"]
  },
  {
    //第二个disgust
    emotionlabel: "disgust",
    percentage: "98.8",
    yaw: "-5.36",
    click: ["#8DEEEE", "#EEAD0E", "#E6E6FA", "#FFE4E1", "#ADD8E6", "#CDB38B"]
  },
  {
    emotionlabel: "disgust",
    percentage: "98.8",
    yaw: "-11.36",
    click: ["none", "#EEAD0E", "#E6E6FA", "#FFE4E1", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "disgust",
    percentage: "98.8",
    yaw: "-21.36",
    click: ["none", "#EEAD0E", "#E6E6FA", "#FFE4E1", "#ADD8E6", "#CDB38B"]
  },
  {
    emotionlabel: "disgust",
    percentage: "98.8",
    yaw: "-1.36",
    click: ["none", "#EEAD0E", "#E6E6FA", "#FFE4E1", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "disgust",
    percentage: "98.8",
    yaw: "-8.36",
    click: ["none", "#EEAD0E", "#E6E6FA", "#FFE4E1", "#ADD8E6", "#CDB38B"]
  },
  {
    emotionlabel: "disgust",
    percentage: "98.8",
    yaw: "-1.36",
    click: ["none", "#EEAD0E", "#E6E6FA", "#FFE4E1", "#ADD8E6", "#CDB38B"]
  },
  {
    //sad开始3
    emotionlabel: "sadness",
    percentage: "98.8",
    yaw: "1.36",
    click: ["#8DEEEE", "#EEAD0E", "#E6E6FA", "#FFE4E1", "none", "none"]
  },
  {
    emotionlabel: "sadness",
    percentage: "98.8",
    yaw: "11.36",
    click: ["none", "none", "#E6E6FA", "#FFE4E1", "#ADD8E6", "none"]
  },
  {
    emotionlabel: "sadness",
    percentage: "98.8",
    yaw: "21.36",
    click: ["none", "none", "#E6E6FA", "none", "#ADD8E6", "#CDB38B"]
  },
  {
    emotionlabel: "sadness",
    percentage: "98.8",
    yaw: "15.36",
    click: ["none", "none", "#E6E6FA", "none", "#ADD8E6", "#CDB38B"]
  },
  {
    emotionlabel: "sadness",
    percentage: "98.8",
    yaw: "19.36",
    click: ["none", "none", "#E6E6FA", "none", "#ADD8E6", "#CDB38B"]
  },
  {
    emotionlabel: "sadness",
    percentage: "98.8",
    yaw: "11.36",
    click: ["none", "none", "#E6E6FA", "none", "#ADD8E6", "#CDB38B"]
  },
  {
    emotionlabel: "neutral",
    percentage: "98.8",
    yaw: "10.36",
    click: ["#8DEEEE", "#EEAD0E", "#E6E6FA", "#FFE4E1", "none", "none"]
  },
  {
    emotionlabel: "neutral",
    percentage: "98.8",
    yaw: "-6.36",
    click: ["#8DEEEE", "#EEAD0E", "#E6E6FA", "#FFE4E1", "none", "none"]
  },
  {
    emotionlabel: "fear",
    percentage: "98.8",
    yaw: "-4.36",
    click: ["#8DEEEE", "none", "none", "none", "#ADD8E6", "none"]
  }
];

// var A = []
// for (var i = 0; i < X_Clust.length; i++){
//   var B = {}
//   B.PostionX = X_Clust[i]
//   B.PostionY = Y_Clust[i]
//   A.push(B)
// }
// console.log(A)

export { X_Clust, Y_Clust, Stu2Clust };

