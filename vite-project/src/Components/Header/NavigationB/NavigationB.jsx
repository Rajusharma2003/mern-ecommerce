import Button  from '@mui/material/Button'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// icon menu
import { RiMenu2Line } from "react-icons/ri";

// angle icon
import { TfiAngleDown } from "react-icons/tfi";
import CategoryPanel from './CategoryPanel';

// import css file
import './style.css';

const NavigationB = () => {

    const[isOpenCatPanel, setIsOpenCatPanel] = useState(false)

    const openCategoryPanel = () => {
        setIsOpenCatPanel(true)
    }

    return (
        <>
            <nav className='py-2'>
                    <div className="container flex items-center justify-end gap-8">
                        <div className="col_1 w-[20%]">
                            <Button className='!text-black gap-2 w-full' onClick={openCategoryPanel}>
                                <RiMenu2Line />
                                Shop By Categories
                                <TfiAngleDown className='text-[13px] ml-auto font-bold '/>
                                </Button>
                        </div>

                        <div className="col_2 w-[80%] ">
                            <ul className="flex items-center justify-around gap-3">
                                <li className="list-none">
                                    <Link to="/" className='link transition font-[500] text-[14px]'>Home</Link>
                                </li>
                                <li className="list-none">
                                    <Link to="/" className='link transition font-[500] text-[14px]'>Fashion</Link>
                                </li>
                                <li className="list-none">
                                    <Link to="/" className='link transition font-[500] text-[14px]'>Electronics</Link>
                                </li>
                                <li className="list-none">
                                    <Link to="/" className='link transition font-[500] text-[14px]'>Bags</Link>
                                </li>
                                <li className="list-none">
                                    <Link to="/" className='link transition font-[500] text-[14px]'>Footwear</Link>
                                </li>
                                <li className="list-none">
                                    <Link to="/" className='link transition font-[500] text-[14px]'>Groceries</Link>
                                </li>
                                <li className="list-none">
                                    <Link to="/" className='link transition font-[500] text-[14px]'>Beauty</Link>
                                </li>
                                <li className="list-none">
                                    <Link to="/" className='link transition font-[500] text-[14px]'>Wellness</Link>
                                </li>
                                <li className="list-none">
                                    <Link to="/" className='link transition font-[500] text-[14px]'>Jewellery</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
            </nav>

            {/* import Category section */}
            <CategoryPanel  isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel}/>

            </>
    );
    
};

export default NavigationB
