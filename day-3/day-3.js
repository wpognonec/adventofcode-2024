const { log } = require("console")
const fs = require("fs")

let data = fs.readFileSync("./input.txt", { encoding: "utf8" })
// console.log(data)
let regex = /mul\(([0-9]+),([0-9]+)\)|do\(\)|don't\(\)/g
let muls = data.match(regex)

muls = muls.map((mul) => {
  if (mul[0] == "m") {
    return mul
      .slice(4, -1)
      .split(",")
      .map((n) => parseInt(n))
  }
  return mul
})

let p1 = 0
let go = true

for (const mul of muls) {
  if (go && mul[0] != "d") {
    p1 += mul[0] * mul[1]
  }
  if (mul == "do()") go = true
  if (mul == "don't()") go = false
}
console.log(p1)
