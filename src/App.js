import React, { useState } from 'react'
import { ListContainer } from './components'

const App = () => {
  const [list, setList] = useState([
    'Shopping in Barcelona',
    'Famous Shopping Streets',
    'Shopping malls',
    'Markets',
    'Opening times',
    'Sales Tax Refunds',
    'You may also be interested in',
    'Where to Stay'
  ])
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <ListContainer list={list} setList={setList} />
    </div>
  )
}

export default App