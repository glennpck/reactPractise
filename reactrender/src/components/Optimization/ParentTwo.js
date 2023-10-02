import React, {useState} from 'react'
import ChildTwo, { MemoizedChildTwo } from './ChildTwo'

const ParentTwo = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('nnelg')

    console.log('ParentTwo Render')
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      <button onClick={() => setName('trebled')}>Change Name</button>
      <MemoizedChildTwo name={name} />
    </div>
  )
}

export default ParentTwo
