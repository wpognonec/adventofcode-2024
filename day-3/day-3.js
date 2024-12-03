const fs = require("fs")

let data = fs.readFileSync("./input.txt", { encoding: "utf8" })
let regex = /mul\(([0-9]+),([0-9]+)\)|do\(\)|don't\(\)/g
let muls = data.matchAll(regex)

let p1 = 0
let p2 = 0
let go = true

for (const mul of muls) {
  if (mul[1]) {
    p1 += mul[1] * mul[2]
    if (go) p2 += mul[1] * mul[2]
  } else {
    go = mul[0] == "do()" ? true : false
  }
}
console.log(p1, p2)
