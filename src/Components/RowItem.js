import React from 'react'

const RowItem = (props) => {
  console.log(props)
  return (
    <React.Fragment>
      <tr>
        <td>
          <div className={props.searched ? 'searched' : 'unsearched'}>
            {props.label}
            <button value={props.id}>remove</button>
          </div>
        </td>
      </tr>
    </React.Fragment>
  )
}

export default RowItem