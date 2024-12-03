const fs = require("fs")
const readline = require("readline")

async function processLineByLine() {
  const list1 = []
  const list2 = []
  const fileStream = fs.createReadStream("day-1.txt")

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  })
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    let numArray = line.split("   ")
    list1.push(parseInt(numArray[0]))
    list2.push(parseInt(numArray[1]))
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
}

processLineByLine()