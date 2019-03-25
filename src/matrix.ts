export function matrix(cols: number, rows: number) {
  let result = []
  let currentNum = 1

  for (let row = 1; row <= rows; row++) {
    let rowNumbers = []

    for (let col = 1; col <= cols; col++) {
      if (row % 2 !== 0) {
        rowNumbers.push(currentNum)
      } else {
        rowNumbers.unshift(currentNum)
      }
      currentNum++
    }

    result.push(rowNumbers)
  }

  return result
}
