const fs = require("fs")

let data = fs.readFileSync("./input.txt", { encoding: "utf8" })
console.log(data)
