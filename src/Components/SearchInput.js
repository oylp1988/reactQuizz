import React, { useState } from 'react'

const SearchInput = (props) => {
  const [searchText, setSearchText] = useState('')
  return (
    <div>
      <input value={searchText} placeholder='SEARCH' onChange={(event) => setSearchText(event.target.value)} />
      <button type='button' onClick={() => props.findItems(searchText)} >s</button>
    </div>
  )
}

export default SearchInput