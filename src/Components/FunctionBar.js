import React, { useState } from 'react'
import SelectInput from './SelectInput'
import SearchInput from './SearchInput'

const FunctionBar = (props) => {
  const [itemName, setItemName] = useState('')
  const [columnName, setColumnName] = useState(0)
  // 限流
  return (
    <div className='FunctionBar'>
      <input value={itemName} placeholder='ENTER ITEM' onChange={(event) => {
        setItemName(event.target.value)
      }} />
      <SelectInput onChange={(value) => setColumnName(value)} />
      <button className='addButton' type='button' onClick={() => props.addItem({ label: itemName, column: columnName })}>ADD ITEM</button>
      <SearchInput list={props.list} findItems={props.findItems}></SearchInput>
    </div>
  )
}

export default FunctionBar