import React, { useCallback, useEffect, useReducer } from 'react'
import ColumnBar from '../Components/ColumnBar'
import FunctionBar from '../Components/FunctionBar'
import itemChange from '../store/reducers/itemChange'
import itemChangeActions from '../store/actions/itemChange'

const MainFrame = (props) => {
  // pls note that in this implementation, I simply process the two columns in one list, which will result in re-rendering both columns
  // when item is added.
  // In the refactor version, the number of the column should be variable, for example, we could have column 1, column 2, column 3.... no limited to two columns.
  // the display should depends on the data.
  // however, i dont have time to do this at this moment.
  const initialState = {
    list: [],
    searchedList: []
  }
  const [state, dispatch] = useReducer(itemChange, initialState)
  const addItem = (item) => {
    if (item.column === 0 || item.label === '') {
      alert('pls enter valid data')
      return
    }
    let listRetrieve = JSON.parse(localStorage.getItem('column')) || []
    let maxIndex = JSON.parse(localStorage.getItem('count')) || 0
    maxIndex = maxIndex + 1
    if(!listRetrieve instanceof Array) {
      listRetrieve = [listRetrieve]
    }
    console.log('before', listRetrieve)
    console.log('item', item)
    listRetrieve.push({...item, id: maxIndex})
    localStorage.setItem('column', JSON.stringify(listRetrieve))
    localStorage.setItem('count', maxIndex)
    console.log('---after add', listRetrieve)
    dispatch(itemChangeActions.successAddItem({...item, id: maxIndex}))
  }
  const deleteItem = (itemIndex) => {
    let index = parseInt(itemIndex)
    let listRetrieve = JSON.parse(localStorage.getItem('column')) || []
    // I use filter here only because it is straightforward to read. In real project, I will use the array API 'remove' from lodash.
    let listAfterDelete = listRetrieve.filter(item => item.id !== index)
    localStorage.setItem('column', JSON.stringify(listAfterDelete))
    dispatch(itemChangeActions.successDeleteItem(listAfterDelete))
  }

  const getItem = useCallback(()=>{
    let listRetrieve = JSON.parse(localStorage.getItem('column')) || []
    if(!listRetrieve instanceof Array) {
      listRetrieve = [listRetrieve]
    }
    console.log('get', listRetrieve)
    dispatch(itemChangeActions.successGetItems(listRetrieve))
  }, [])

  const findItems = (text) => {
    console.log('---list in state', state)
    let searchedList = state.list.filter(item => item.label === text)
    dispatch(itemChangeActions.successSearchItems(searchedList.map(item => item.id)))
  }

  useEffect(() => {
    getItem()
  }, [getItem])


  return (
    <table className='MainFrame'>
      <tbody>
        <tr>
          <th colSpan='3'>Add AN ITEM</th>
        </tr>
        <tr>
          <td>
            <FunctionBar findItems={findItems} addItem = {addItem} />
          </td>
          <td>
            <ColumnBar title='COLUMN 1' searchedList = {state.searchedList} deleteItem = {deleteItem} list={state.list.filter(item => item.column === '1')} />
          </td>
          <td>
            <ColumnBar title='COLUMN 2' searchedList = {state.searchedList} deleteItem = {deleteItem} list={state.list.filter(item => item.column === '2')} />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default MainFrame