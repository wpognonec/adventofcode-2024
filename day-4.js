const fs = require("fs")

let data = fs.readFileSync("./inputs/4.txt", { encoding: "utf8" })

let d1 = data.split("\n")
let d2 = []
let d3 = []
let d4 = []

for (let i = 0; i < d1.length; i++) {
  if (i === 0) d2.push("0".repeat(i) + d1[i].slice(0))
  else d2.push("0".repeat(i) + d1[i].slice(0, -i))
  d3.push(d1[i].slice(i) + "0".repeat(i))
  d4 = rotateMatrix(d1)
}

let d1txt = data
let d2txt = d2.join("\n")
let d3txt = d2.join("\n")
let d4txt = d2.join("\n")

function rotateMatrix(matrix) {
  const n = matrix.length
  let rotated = [...matrix]

  for (let i = 0; i < rotated.length; i++) {
    rotated[i] = rotated[i].split("")
  }

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      ;[rotated[i][j], rotated[j][i]] = [rotated[j][i], rotated[i][j]]
    }
  }

  for (let i = 0; i < n; i++) {
    rotated[i] = rotated[i].reverse().join("")
  }
  return rotated
}

let regex = /(?=(XMAS|SAMX))/g
let total = 0
total += [...d1txt.matchAll(regex)].map((match) => match[1])
total += [...d2txt.matchAll(regex)].map((match) => match[1])
total += [...d3txt.matchAll(regex)].map((match) => match[1])
total += [...d4txt.matchAll(regex)].map((match) => match[1])
console.log(total.length)
