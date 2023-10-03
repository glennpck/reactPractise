import React, {useState, useMemo, useCallback} from 'react'
import { MemoizedChildFive } from './ChildFive'

const ParentFour = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('nnelg')

    const person = {
        fname: 'nnelg',
        lname: 'hep'
    }

    const memoizedPerson = useMemo(() => person, [])

    const handleClick = () => {}

    const memoizedHandleClick = useCallback(handleClick, [])

    console.log('ParentFour Render')
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      <button onClick={() => setName('trebled')}>Change Name</button>
      <MemoizedChildFive name={name} person={memoizedPerson} handleClick={memoizedHandleClick} />
    </div>
  )
}

export default ParentFour
