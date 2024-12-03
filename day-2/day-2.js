const fs = require("fs")

let data = fs.readFileSync("./input.txt", { encoding: "utf8" })
data = data.split("\n")
// console.log(data)

let safeCount = 0
for (let i = 0; i < data.length; i++) {
  let levels = []
  data[i].split(" ").forEach((num) => levels.push(parseInt(num)))
  // data[i] = levels
  // PART 1
  // let compare = Array.from(levels)
  // compare.sort((a, b) => a - b)

  // console.log(`${compare} ${levels}`)

  // if (
  //   compare.sort((a, b) => a - b).toString() == levels.toString() ||
  //   compare.sort((a, b) => b - a).toString() == levels.toString()
  // ) {
  //   levels.sort((a, b) => a - b)
  //   let safe = true
  //   for (let i = 0; i < levels.length - 1; i++) {
  //     if (
  //       levels[i] === levels[i + 1] ||
  //       ![1, 2, 3].includes(levels[i + 1] - levels[i])
  //     )
  //       safe = false
  //   }
  //   if (safe) safeCount++
  // }

  // PART2
  if (isSafeUp(levels) || isSafeDown(levels)) {
    safeCount++
  }
}

console.log(safeCount)

// function isSafeUp(numList) {
//   let safe = true
//   let err = 0
//   let flagged = false
//   for (let i = 0; i < numList.length - 1; i++) {
//     n1 = numList[i]
//     n2 = numList[i + 1]
//     if (err == 1 && flagged && i > 1) {
//       n1 = numList[i - 1]
//       flagged = false
//     }
//     if (!flagged && n1 == n2) {
//     } else if (!(n1 < n2 && [1, 2, 3].includes(n2 - n1))) {
//       err++
//       if (err > 1) safe = false
//       flagged = true
//     }
//   }
//   return safe
// }

// function isSafeDown(numList) {
//   let safe = true
//   let err = 0
//   let flagged = false
//   for (let i = 0; i < numList.length - 1; i++) {
//     n1 = numList[i]
//     n2 = numList[i + 1]
//     if (err == 1 && flagged && i > 1) {
//       n1 = numList[i - 1]
//       flagged = false
//     }
//     if (!flagged && n1 == n2) {
//     } else if (!(n1 > n2 && [1, 2, 3].includes(n1 - n2))) {
//       err++
//       if (err > 1) safe = false
//       flagged = true
//     }
//   }
//   return safe
// }
// let test = [29, 28, 27, 25, 26, 25, 22, 20]
// let test = [48, 46, 47, 49, 51, 54, 56]
// let test = [1, 1, 2, 3, 4, 5]
// let test = [1, 2, 3, 4, 5, 5]
// let test = [5, 1, 2, 3, 4, 5]
// let test = [1, 4, 3, 2, 1]
// let test = [1, 6, 7, 8, 9]
// let test = [1, 2, 3, 4, 3]
// let test = [9, 8, 7, 6, 7]
// let test = [7, 10, 8, 10, 11]
// let test = [29, 28, 27, 25, 26, 25, 22, 20]
// let test = [7, 10, 8, 10, 11]
// let test = [29, 28, 27, 25, 26, 25, 22, 20]
// let test = [90, 89, 86, 84, 83, 79]

function isSafeUp(numList) {
  let safe = true
  let err = 0
  let flagged = false
  for (let i = 0; i < numList.length - 1; i++) {
    n1 = numList[i]
    n2 = numList[i + 1]
    if (![1, 2, 3].includes(n2 - n1)) {
      err++
      if (err > 1) safe = false
      if (![1, 2, 3].includes(numList[i + 1] - n1)) safe = false
    }
  }
  return safe
}

function isSafeDown(numList) {
  let safe = true
  let err = 0
  let flagged = false
  for (let i = 0; i < numList.length - 1; i++) {
    n1 = numList[i]
    n2 = numList[i + 1]
    if (![1, 2, 3].includes(n1 - n2)) {
      err++
      if (err > 1) safe = false
      if (![1, 2, 3].includes(n1 - numList[i + 1])) safe = false
    }
  }
  return safe
}

let tests = [
  [1, 2, 7, 8, 9], // false
  [6, 5, 7, 8, 9], // true
  [9, 7, 6, 2, 1], // false
  [7, 10, 8, 10, 11], // true
  [5, 6, 10, 8, 10, 11], // true
  [5, 6, 12, 10, 12, 14], // false
  // [68, 65, 69, 72, 74, 77, 80, 83],
  // [29, 28, 27, 25, 26, 25, 22, 20],
  // [48, 46, 47, 49, 51, 54, 56],
  // [1, 1, 2, 3, 4, 5],
  // [1, 2, 3, 4, 5, 5],
  // [5, 1, 2, 3, 4, 5],
  // [1, 4, 3, 2, 1],
  // [1, 6, 7, 8, 9],
  // [1, 2, 3, 4, 3],
  // [9, 8, 7, 6, 7],
  // [7, 10, 8, 10, 11],
  // [5, 6, 10, 8, 10, 11],
  // [29, 28, 27, 25, 26, 25, 22, 20],
  // [7, 10, 8, 10, 11],
  // [29, 28, 27, 25, 26, 25, 22, 20],
  // [90, 89, 86, 84, 83, 79],
  // [7, 6, 4, 2, 1],
  // [1, 3, 2, 4, 5],
  // [8, 6, 4, 4, 1],
  // [1, 3, 6, 7, 9],
]

for (const test of tests) {
  console.log(isSafeUp(test) || isSafeDown(test))
}
