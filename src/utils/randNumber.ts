export function randNumber(max: number, min = 0) {
  return min + Math.floor(Math.random() * (max + 1 - min))
}
