const fs = require("fs")

let data = fs.readFileSync("./inputs/4.txt", { encoding: "utf8" })

let d1 = data.split("\n")
let d2 = []
let d3 = []

for (let i = 0; i < d1.length; i++) {
  d2.push("0".repeat(i) + d1[i].slice(0, -i))
  d3.push(d1[i].slice(i) + "0".repeat(i))
}

console.log(d2[1])
console.log(d3[1])

let regex = /(?=(XMAS|SAMX))/g
const matches = [...data.matchAll(regex)].map((match) => match[1])
console.log(matches.length)
