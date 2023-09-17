import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Mom', 'Sis', 'Bro', 'Mom']
    const persons = [
        {
            name: 'Mom',
            id: 1
        },
        {
            name: 'Bro',
            id: 2
        },
        {
            name: 'Sis',
            id: 3
        }
    ]
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)


  return (
    <div>
        {nameList}
    </div>
  )
}

export default NameList
