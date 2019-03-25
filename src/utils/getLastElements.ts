export function getLastElements(length: number, maxLength = 10) {
  return length > maxLength ? length - maxLength : 0
}
