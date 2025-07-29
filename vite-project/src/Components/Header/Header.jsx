import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search'

// material ui cart
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { IoCartSharp } from "react-icons/io5";

// compare  icon
import { IoMdGitCompare } from "react-icons/io";
// like icon
import { FaRegHeart } from "react-icons/fa";
// tooltip
import Tooltip from '@mui/material/Tooltip';
import NavigationB from './NavigationB/NavigationB';

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

    <header className='bg-white'>

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


     {/*  navber center section */}
     <div className="header py-4 border-gray-200 border-b-[1px]">
            <div className="container flex items-center justify-between">

              {/* logo section */} 
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
                <ul className="flex items-center justify-end w-full gap-3">
                  <li className="list-none">
                    <Link to="/login" className='link transition text-[15px] font-[500]'>Login</Link> / &nbsp;
                    <Link to="register" className='link transition text-[15px] font-[500]'>Register</Link>
                  </li>

                  <li>
                  <Tooltip title="Compare">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoMdGitCompare />
                    </StyledBadge>
                  </IconButton> 
                  </Tooltip>
                  </li>

                  <li>
                  <Tooltip title="WishList">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                  </Tooltip>
                  </li>
                 
                  <li>
                  <Tooltip title="Cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoCartSharp />
                    </StyledBadge>
                  </IconButton>
                  </Tooltip>
                  </li>
                </ul>
                
              </div>
            </div>
      </div>

      {/* navbar bottom section */}
      <NavigationB/>

    </header>
  )
}

export default Header
