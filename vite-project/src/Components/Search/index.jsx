import React from 'react'
import "../Search/Style.css"
// import material ui
import Button from '@mui/material/Button';
// import react icon
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[50%] bg-[#e5e5e5] rounded-[5px] relative p-2'>
      <input type="text" placeholder='Search for Products...' className='w-full h-[30px] focus:outline-none bg-inherit p-2 text-[15px]' />
      <Button className='!absolute top-[5px] right-[5px] w-[34px] !min-w-[35px] h-[35px] !rounded-full z-50 !text-black'>
        <IoSearch className='text-black'/>
        </Button>
    </div>
  )
}

export default Search
