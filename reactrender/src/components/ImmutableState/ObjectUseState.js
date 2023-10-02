import React, {useState} from 'react'

const initState = {
    fname: 'nnelg',
    lname: 'hep'
}

const ObjectUseState = () => {

    const [person, setPerson] = useState(initState)

    const changeName = () => {
        // person.fname = 'trebled'
        // person.lname = 'pay'
        // setPerson(person)

        const newPerson = {...person}
        newPerson.fname = 'trebled'
        newPerson.lname = 'pay'
        setPerson(newPerson)
    }

    console.log('ObjectUseState Render')
  return (
    <div>
      <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}

export default ObjectUseState
