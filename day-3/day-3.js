const { log } = require("console")
const fs = require("fs")

let data = fs.readFileSync("./input.txt", { encoding: "utf8" })
// console.log(data)
let regex = /mul\(([0-9]+),([0-9]+)\)/g
let muls = data.match(regex)
muls = muls.map((mul) =>
  mul
    .slice(4, -1)
    .split(",")
    .map((n) => parseInt(n))
)

let p1 = 0
for (const mul of muls) {
  p1 += mul[0] * mul[1]
}
console.log(p1)
