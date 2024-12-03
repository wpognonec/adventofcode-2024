const fs = require("fs")

let data = fs.readFileSync("./input.txt", { encoding: "utf8" })
data = data.split("\n")

let p1 = 0
let p2 = 0
for (let i = 0; i < data.length; i++) {
  let levels = []
  data[i].split(" ").forEach((num) => levels.push(parseInt(num)))

  if (isSafe(levels)) {
    p1++
    p2++
  } else {
    for (let i = 0; i < levels.length; i++) {
      arr = [...levels]
      arr.splice(i, 1)
      if (isSafe(arr)) {
        p2++
        break
      }
    }
  }
}

function isSafe(l1) {
  l2 = [...l1]
  if (
    l2.sort((a, b) => a - b).toString() == l1.toString() ||
    l2.sort((a, b) => b - a).toString() == l1.toString()
  ) {
    let safe = true
    for (let i = 0; i < l1.length - 1; i++) {
      if (!inRange(l1[i + 1], l1[i])) safe = false
    }
    return safe
  }
}

function inRange(num1, num2) {
  return [1, 2, 3].includes(Math.abs(num1 - num2))
}

console.log(p1, p2)

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

// let tests = [
//   [1, 2, 7, 8, 9], // false
//   [6, 5, 7, 8, 9], // true
//   [9, 7, 6, 2, 1], // false
//   [7, 10, 8, 10, 11], // true
//   [5, 6, 10, 8, 10, 11], // true
//   [5, 6, 12, 10, 12, 14], // false
//   [68, 65, 69, 72, 74, 77, 80, 83],
//   [29, 28, 27, 25, 26, 25, 22, 20],
//   [48, 46, 47, 49, 51, 54, 56],
//   [1, 1, 2, 3, 4, 5],
//   [1, 2, 3, 4, 5, 5],
//   [5, 1, 2, 3, 4, 5],
//   [1, 4, 3, 2, 1],
//   [1, 6, 7, 8, 9],
//   [1, 2, 3, 4, 3],
//   [9, 8, 7, 6, 7],
//   [7, 10, 8, 10, 11],
//   [5, 6, 10, 8, 10, 11],
//   [29, 28, 27, 25, 26, 25, 22, 20],
//   [7, 10, 8, 10, 11],
//   [29, 28, 27, 25, 26, 25, 22, 20],
//   [90, 89, 86, 84, 83, 79],
//   [7, 6, 4, 2, 1],
//   [1, 3, 2, 4, 5],
//   [8, 6, 4, 4, 1],
//   [1, 3, 6, 7, 9],
//   [1, 2, 3, 4],
//   [1, 5, 6, 7],
//   [8, 6, 3, 1],
//   [8, 6, 2, 1],
// ]
