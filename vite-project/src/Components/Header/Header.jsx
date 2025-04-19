import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search'

// material ui cart
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { IoCartSharp } from "react-icons/io5";

// cart
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));


const Header = () => {
  return (

    <header>

    {/* Top navbar section */}
    <div className="top-strip py-2 border-t-[1px] border-gray-200 border-b-[1px]">
      <div className="container">

        {/* top bar container */}
          <div className="flex items-center justify-between">
              <div className="col1 w-[50%]">
                <p className='text-[14px] font-[500]'>Get up to 50% off new season styles, limited time only</p>
              </div>

          {/* second container */}
          <div className="col2 flex items-center justify-end">
            <ul className='flex items-center gap-2'>
              <li className='list-none'>
                <Link to="/help-center" className='text-[13px] link font-[500] transition'>Help Center</Link>
              </li>
              <li className='list-none'>
                <Link to="/order-tracking" className='text-[13px] link font-[500] transition'>Order Tracking</Link>
              </li>
            </ul>
          </div>
          </div>
      </div>
    </div>


     {/* This is the navber section */}
     <div className="header pt-2">
            <div className="container flex items-center justify-between">

              <div className="col1 w-[25%]">
                  <Link to={"/"}> 
                    <img src="https://serviceapi.spicezgold.com/download/1744255975457_logo.jpg" alt="" />
                  </Link>
              </div>
            
              {/* search button section */}
              <div className="col2 w-[45%]">
                <Search/>
              </div>

              <div className="col1 w-[30%] flex items-center pl-7">
                <ul className="flex items-center gap-3">
                  <li className="list-none">
                    <Link to="/login" className='link transition text-[15px] font-[500]'>Login</Link> / &nbsp;
                    <Link to="register" className='link transition text-[15px] font-[500]'>Register</Link>
                  </li>

                  <li>
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoCartSharp />
                    </StyledBadge>
                  </IconButton>
                  </li>
                </ul>
                
              </div>
            </div>
          </div>

    </header>
  )
}

export default Header
