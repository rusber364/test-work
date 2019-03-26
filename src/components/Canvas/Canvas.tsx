import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { randNumber } from 'utils/randNumber'
import { randomColor } from 'utils/randomColor'
import Layout from 'components/Layout'

type IProps = RouteComponentProps

const Canvas: React.FC<IProps> = () => {
  const refCanvas = React.useRef<HTMLCanvasElement>(null)
  const [start, setStart] = React.useState(false)

  const handleStart = () => {
    setStart(!start)
  }

  React.useEffect(() => {
    let idTimer: number

    if (refCanvas.current && start) {
      let idxIterator = 0
      let maxBlocks = 2025
      let ctx = refCanvas.current.getContext('2d')
      let coords: { [coords: string]: string } = {}

      idTimer = window.setInterval(() => {
        let generateCoords: string

        while (idxIterator <= maxBlocks) {
          generateCoords = `${randNumber(44) * 11},${randNumber(44) * 11}`

          if (!coords[generateCoords]) {
            coords[generateCoords] = generateCoords
            idxIterator++
            break
          }
        }

        if (ctx) {
          ctx.fillStyle = randomColor()
          // @ts-ignore
          ctx.fillRect(...coords[generateCoords].split(','), 10, 10)
        }

        if (idxIterator >= maxBlocks) {
          window.clearInterval(idTimer)
          alert('done!')
        }
      }, 30)
    }

    return () => window.clearInterval(idTimer)
  }, [start])

  return (
    <Layout>
      <div>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStart}>stop</button>
      </div>
      <canvas ref={refCanvas} width={500} height={500} />
    </Layout>
  )
}

export default Canvas
