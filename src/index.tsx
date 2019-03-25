import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

import Calculator from 'components/Calculator/Calculator'
import Matrix from 'components/Matrix'
import Canvas from 'components/Canvas/Canvas'

ReactDOM.render(
  <Router>
    <Calculator path="/" />
    <Matrix path="/matrix" />
    <Canvas path="/canvas" />
  </Router>,
  document.getElementById('root'),
)
