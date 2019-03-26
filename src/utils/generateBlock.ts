export function generateBlock(size = 10, margin = 1) {
  let canvasBlock = 500
  let itemsLine = canvasBlock / size

  let lineCountBlocks = (canvasBlock - itemsLine * margin) / size
  let maxCountBlocks = Math.floor(lineCountBlocks * lineCountBlocks)

  let maxCoordsIdx = Math.floor(lineCountBlocks - 1)

  return [size, size + margin, maxCoordsIdx, maxCountBlocks]
}
