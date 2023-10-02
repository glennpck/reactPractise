import React, {useState} from 'react'

const initState = ['nnelg', 'hep']

const ArrayUseState = () => {
    const [persons, setPersons] = useState(initState)

    const handleClick = () => {
        // persons.push('trebled')
        // persons.push('yap')
        // setPersons(persons)

        const newPersons = [...persons]
        newPersons.push('trebled')
        newPersons.push('pay')
        setPersons(newPersons)
    }

    console.log('ArrayUseState render')
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {
        persons.map(person => (
            <div key={person}>{person}</div>
        ))
      }
    </div>
  )
}

export default ArrayUseState
