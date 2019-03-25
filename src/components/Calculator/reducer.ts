type IState = number[]

export type IOperator = '+' | '-' | '*' | '/' | '=' | '' | 'reset'

interface IAction {
  type: IOperator
  payload: number[]
}

export function reducer(state: IState, action: IAction) {
  const { type, payload } = action

  switch (type) {
    case '+':
      return state.concat(+payload[0] + +payload[1])
    case '-':
      return state.concat(payload[0] - payload[1])
    case '*':
      return state.concat(payload[0] * payload[1])
    case '/': {
      if (payload[1] === 0) {
        return state
      }
      return state.concat(payload[0] / payload[1])
    }
    case 'reset':
      return payload

    default:
      throw new Error()
  }
}
