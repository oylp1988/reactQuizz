import React, { useCallback, useEffect, useState } from 'react'
import {useDebouncedValue} from '../Hook/useDebouncedValue'

const SearchInput = (props) => {
  const [searchText, setSearchText] = useState('')
  const [options, setOptions] = useState([])
  const debouncedSearchText = useDebouncedValue(searchText, 500);
  const searchData = (searchText) => {
    // the searchData will be use as the options when using Select Tag from antd (like a hint).
    console.log('This is the hint: ', props.list.filter(item => item.label.includes(searchText)))
    setOptions(props.list.filter(item => item.label.includes(searchText)))
  }
  useEffect(() => {
    searchData(debouncedSearchText)
  }, [debouncedSearchText])
  return (
    <div>
      <input value={searchText} placeholder='SEARCH' onChange={(event) => setSearchText(event.target.value)} />
      <button type='button' onClick={() => props.findItems(searchText)} >s</button>
    </div>
  )
}

export default SearchInput