import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { randNumber } from 'utils/randNumber'
import Layout from 'components/Layout'

type IProps = RouteComponentProps

const Canvas: React.FC<IProps> = () => {
  const refCanvas = React.useRef(null)
  const [start, setStart] = React.useState(false)

  const handleStart = () => {
    setStart(!start)
  }

  React.useEffect(() => {
    let idTimer: number

    if (start) {
      let ctx = refCanvas.current.getContext('2d')
      let coords: string[] = []

      idTimer = window.setInterval(() => {
        let generateCoords: string

        while (true) {
          generateCoords = `${randNumber(20, 0) * 24},${randNumber(20, 0) * 24}`

          if (!coords.includes(generateCoords)) {
            coords.push(generateCoords)
            break
          }
        }

        ctx.fillRect(...generateCoords.split(','), 20, 20)

        if (coords.length >= 441) {
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
