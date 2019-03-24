import React, { useReducer, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import css from './Calculator.module.css'
import Button from '../Button/Button'

import { reducer, IOperator } from './reducer'

type IProps = RouteComponentProps

function last(length: number, maxLength = 10) {
  return length > maxLength ? length - maxLength : 0
}

const Calculator: React.FC<IProps> = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [operation, setOperation] = useState<IOperator>('')
  const [protectedOperator, setProtectedOperator] = useState(false)
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')

  const handleOperand = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.dataset.num) {
      let num = e.currentTarget.dataset.num

      if (!num1 || !protectedOperator) setNum1(num1 + num)
      if (num1 && operation) setNum2(num2 + num)
    }
  }

  const handleOperator = (e: React.MouseEvent<HTMLElement>) => {
    const operator = e.currentTarget.dataset.operator as IOperator

    if (num1 && operator !== '=') {
      setOperation(operator)
      setProtectedOperator(true)
    }

    if (num1 && num2 && operator === '=') {
      dispatch({
        type: operation,
        payload: [num1, num2].map((str) => Number.parseInt(str)),
      })

      setNum1('')
      setNum2('')
      setOperation('')
      setProtectedOperator(false)
    }
  }

  const handleReset = () => {
    dispatch({
      type: 'reset',
      payload: [],
    })
  }

  return (
    <div>
      <div className={css.currentOperation}>
        {num1 && (
          <div>
            <span>{num1}</span> <span>{operation}</span> <span>{num2}</span>
          </div>
        )}
      </div>

      <div className={css.main}>
        {Array.from(Array(10).keys()).map((num) => (
          <Button key={num} data-num={num} onClick={handleOperand}>
            {num}
          </Button>
        ))}
      </div>
      <div>
        {['*', '/', '+', '-', '='].map((operator) => (
          <Button
            key={operator}
            data-operator={operator}
            onClick={handleOperator}
          >
            {operator}
          </Button>
        ))}
      </div>
      {state.length !== 0 && (
        <>
          <ul>
            Результат:
            {state.slice(last(state.length, 3)).map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
          <button onClick={handleReset}>reset</button>
        </>
      )}
    </div>
  )
}

export default Calculator
