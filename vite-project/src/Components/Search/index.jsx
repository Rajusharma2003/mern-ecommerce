import React from 'react'
import "../Search/Style.css"

const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[50%] bg-[#e5e5e5] rounded-[5px] relative p-2'>
      <input type="text" placeholder='Search for Products...' className='w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]' />
      <button></button>
    </div>
  )
}

export default Search
