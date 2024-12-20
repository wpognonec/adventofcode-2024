const fs = require("fs")

let data = fs.readFileSync("./inputs/1.txt", { encoding: "utf8" })
data = data.split("\n").map((a) => a.split("   ").map((n) => parseInt(n)))

const list1 = []
const list2 = []

for (const line of data) {
  list1.push(line[0])
  list2.push(line[1])
}

list1.sort((a, b) => a - b)
list2.sort((a, b) => a - b)

// PART 1
const distances = []

for (let i = 0; i < list1.length; i++) {
  distances.push(Math.abs(list1[i] - list2[i]))
}

p1 = distances.reduce((accumulator, current) => accumulator + current, 0)

// PART 2
let p2 = 0
list1.forEach((l1num) => {
  let count = 0
  list2.forEach((l2num) => {
    if (l1num === l2num) count++
  })
  p2 += l1num * count
})

console.log(p1, p2)
