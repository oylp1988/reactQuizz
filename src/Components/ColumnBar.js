import React from 'react'
import RowItem from './RowItem'

const ColumnBar = (props) => {
  console.log(props)
  // capture the event on the table and find the real dom which is clicked.
  const onClick = (event) => {
    let target = event.target
    if (target.tagName === 'BUTTON') {
      props.deleteItem(target.value)
    } 
  }
  return (
    <div>
      <table onClick={onClick}>
        <tbody>
        <tr>
          <th>{props.title}</th>
        </tr>
        {
          props.list.map(item => {
            return (
              <RowItem searched={props.searchedList.includes(item.id)} key={item.id} label={item.label} id={item.id}></RowItem>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default ColumnBar