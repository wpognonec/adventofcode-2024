const fs = require("fs")

let data = fs.readFileSync("./input.txt", { encoding: "utf8" })
data = data.split("\r\n").map((a) => a.split(" ").map((n) => parseInt(n)))

let p1 = 0
let p2 = 0

for (const levels of data) {
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
  if (incOrDec(l1)) {
    let safe = true
    for (let i = 0; i < l1.length - 1; i++) {
      if (!inRange(l1[i + 1], l1[i])) safe = false
    }
    return safe
  }
}

function incOrDec(l1) {
  l2 = [...l1]
  return (
    l2.sort((a, b) => a - b).join() == l1.join() ||
    l2.sort((a, b) => b - a).join() == l1.join()
  )
}

function inRange(num1, num2) {
  return [1, 2, 3].includes(Math.abs(num1 - num2))
}

console.log(p1, p2)
