import React from 'react'
import { Link } from 'react-router-dom'



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
     <div className="header">
            <div className="container flex items-center justify-between">

              <div className="col1 w-[25%]">
                  <Link to={"/"}> 
                    <img src="https://serviceapi.spicezgold.com/download/1744255975457_logo.jpg" alt="" />
                  </Link>
              </div>

              <div className="col2 w-[45%]">
                
              </div>

              <div className="col1 w-[30%]">
                
              </div>
            </div>
          </div>

    </header>
  )
}

export default Header
