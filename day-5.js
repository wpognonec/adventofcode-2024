const fs = require("fs")

let data = fs.readFileSync("./inputs/5.txt", { encoding: "utf8" })
let g = data.split("\n\n")
let rules = g[0].split("\n").map((rule) => rule.split("|"))
let insts = g[1].split("\n").map((inst) => inst.split(","))

let r = {}
for (let i = 0; i < rules.length; i++) {
  if (!r[rules[i][1]]) r[rules[i][1]] = [rules[i][0]]
  else r[rules[i][1]].push(rules[i][0])
}

let good = []
let bad = []
insts.forEach((inst) => {
  let bool = true
  for (let i = 1; i < inst.length; i++) {
    let curr = inst[i]
    let arr1 = inst.slice(0, i)
    let arr2 = r[curr] ? r[curr] : []
    if (
      !(arr1.filter((x) => arr2.includes(x)).toString() === arr1.toString())
    ) {
      bool = false
      break
    }
  }
  if (bool === true) good.push(inst)
  else bad.push(inst)
})

p1 = 0
good.forEach((inst) => {
  p1 += parseInt(inst[Math.floor(inst.length / 2)])
})

bad.forEach((inst) => {
  let bool = false
  while (!bool) {
    for (let i = 1; i < inst.length; i++) {
      let curr = inst[i]
      let arr1 = inst.slice(0, i)
      let arr2 = r[curr] ? r[curr] : []
      if (
        !(arr1.filter((x) => arr2.includes(x)).toString() === arr1.toString())
      ) {
        let temp = inst[i]
        inst[i] = inst[i - 1]
        inst[i - 1] = temp
        break
      } else if (i === inst.length - 1) bool = true
    }
  }
})

p2 = 0
bad.forEach((inst) => {
  p2 += parseInt(inst[Math.floor(inst.length / 2)])
})
console.log(p1)
console.log(p2)
