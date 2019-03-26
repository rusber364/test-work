import { randNumber } from 'utils/randNumber'

export function randomColor(r = 255, g = 255, b = 255) {
  return `rgb(${randNumber(r)},${randNumber(g)},${randNumber(b)})`
}
