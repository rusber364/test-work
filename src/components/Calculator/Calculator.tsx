import React, { useReducer, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import Layout from 'components/Layout'
import css from './Calculator.module.css'
import Button from '../Button/Button'
import { reducer, IOperator } from './reducer'
import { getLastElements } from 'utils/getLastElements'

type IProps = RouteComponentProps

const Calculator: React.FC<IProps> = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [operation, setOperation] = useState<IOperator>('')
  const [protectedOperator, setProtectedOperator] = useState(false)
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')

  const handleOperand = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return
    }
    const num = e.target.dataset.num

    if (!num1 || !protectedOperator) setNum1(num1 + num)
    if (num1 && operation) setNum2(num2 + num)
  }

  const handleOperator = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return
    }
    const operator = e.target.dataset.operator as IOperator

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
    <Layout>
      <div>
        <div className={css.currentOperation}>
          {num1 ? (
            <div>
              <span>{num1}</span> <span>{operation}</span> <span>{num2}</span>
            </div>
          ) : (
            <div>{state[state.length - 1]}</div>
          )}
        </div>

        <div className={css.main} onClick={handleOperand}>
          {Array.from(Array(10).keys()).map((num) => (
            <Button key={num} data-num={num}>
              {num}
            </Button>
          ))}
        </div>

        <div onClick={handleOperator}>
          {['*', '/', '+', '-', '='].map((operator) => (
            <Button key={operator} data-operator={operator}>
              {operator}
            </Button>
          ))}
        </div>

        {state.length !== 0 && (
          <>
            <ul>
              Результат:
              {state
                .slice(getLastElements(state.length, 10))
                .map((result, idx) => (
                  <li key={`${result}-${idx}`}>{result}</li>
                ))}
            </ul>
            <button onClick={handleReset}>reset</button>
          </>
        )}
      </div>
    </Layout>
  )
}

export default Calculator
