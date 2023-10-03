import React, {useState} from 'react'
import { MemoizedChildThree } from './ChildThree'
import { MemoizedChildFour } from './ChildFour'

const ParentThree = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('nnelg')

    console.log('ParentThree Render')
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      <button onClick={() => setName('trebled')}>Change Name</button>
      <MemoizedChildFour name={name}/>
      {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree> */}
    </div>
  )
}

export default ParentThree
