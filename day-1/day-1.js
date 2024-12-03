const fs = require("fs")

let data = fs.readFileSync("./input.txt", { encoding: "utf8" })
data = data.split("\r\n").map((a) => a.split("   ").map((n) => parseInt(n)))

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

total = distances.reduce((accumulator, current) => accumulator + current, 0)
console.log(`Part 1 total: ${total}`)

// PART 2
let similarity = 0
list1.forEach((l1num) => {
  let count = 0
  list2.forEach((l2num) => {
    if (l1num === l2num) count++
  })
  similarity += l1num * count
})

console.log(`Part 2 total: ${similarity}`)
