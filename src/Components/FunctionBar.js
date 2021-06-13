import React, { useState } from 'react'
import SelectInput from './SelectInput'
import SearchInput from './SearchInput'

const FunctionBar = (props) => {
  const [itemName, setItemName] = useState('')
  const [columnName, setColumnName] = useState(0)
  // 限流
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <input value={itemName} placeholder='ENTER ITEM' onChange={(event) => {
                setItemName(event.target.value)
              }} />
            </td>
          </tr>
          <tr>
            <td>
              <SelectInput onChange={(value) => setColumnName(value)} />
            </td>
          </tr>
          <tr>
            <td>
              <button type='button' onClick = {() => props.addItem({label: itemName, column: columnName})}>ADD ITEM</button>
            </td>
          </tr>
          <tr>
            <td>
              <SearchInput findItems={props.findItems}></SearchInput>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FunctionBar