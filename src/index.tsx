import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

import Calculator from 'components/Calculator/Calculator'

ReactDOM.render(
  <Router>
    <Calculator path="/" />
  </Router>,
  document.getElementById('root'),
)
