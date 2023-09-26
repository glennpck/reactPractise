import React, {useContext} from 'react'
import { CountContext } from '../App'

function ComponentG() {
    const countContext = useContext(CountContext)
  return (
    <div>
      <div>Component G - {countContext.countState}</div>
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
      <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentG
