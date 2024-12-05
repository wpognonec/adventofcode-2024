const fs = require("fs")

let data = fs.readFileSync("./inputs/4.txt", { encoding: "utf8" })

let g = data.split("\n")
let p1 = 0
let p2 = 0

for (let r = 0; r < g.length; r++) {
  for (let c = 0; c < g.length; c++) {
    // Part 1
    if (c + 3 < g.length) {
      let word = g[r][c] + g[r][c + 1] + g[r][c + 2] + g[r][c + 3]
      if (["XMAS", "SAMX"].includes(word)) p1++
    }
    if (r + 3 < g.length) {
      let word = g[r][c] + g[r + 1][c] + g[r + 2][c] + g[r + 3][c]
      if (["XMAS", "SAMX"].includes(word)) p1++
    }

    if (r + 3 < g.length && c + 3 < g.length) {
      let word = g[r][c] + g[r + 1][c + 1] + g[r + 2][c + 2] + g[r + 3][c + 3]
      if (["XMAS", "SAMX"].includes(word)) p1++
    }

    if (r - 3 >= 0 && c + 3 < g.length) {
      let word = g[r][c] + g[r - 1][c + 1] + g[r - 2][c + 2] + g[r - 3][c + 3]
      if (["XMAS", "SAMX"].includes(word)) p1++
    }

    // Part 2
    if (r + 2 < g.length && c + 2 < g.length) {
      let word1 = g[r][c] + g[r + 1][c + 1] + g[r + 2][c + 2]
      let word2 = g[r + 2][c] + g[r + 1][c + 1] + g[r][c + 2]
      if (["MAS", "SAM"].includes(word1) && ["MAS", "SAM"].includes(word2)) p2++
    }
  }
}

console.log(p1, p2)
