import React from 'react'

// I didnt set the 
const SelectInput = (props) => {
  const onOptionChange = (event) => {
    props.onChange(event.target.value)
  }
  return (
    <select onChange={onOptionChange}>
      <option value="0" hidden>CHOOSE COLUMN</option>
      <option value="1">COLUMN 1</option>
      <option value="2">COLUMN 2</option>
    </select>
  )
}

export default SelectInput