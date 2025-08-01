<<<<<<< HEAD
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

// imort react icons
import { FaRegWindowClose } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";


import { useState } from 'react';


// This file is impoted from mui website
const CategoryPanel = (props) => {

    // const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
      props.setIsOpenCatPanel(newOpen);
    };

    // drow list
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" >

          <h3 className='text-[16px] font-[500] p-3 flex items-center justify-between'>
            Shop By Categories  
              <FaRegWindowClose 
              onClick={toggleDrawer(false)} 
              className='cursor-pointer text-[20px]'
              />
            </h3>

            {/* Adding all the menu */}
            <div className="scroll">
              <ul className="w-full">
                 <li className="list-none flex items-center relative">
                  <Button 
                  className='w-full !text-left !justify-start !px-3 !text-black'>Fashion 
                  </Button>
                  <FaPlusSquare  className='absolute top-[10px] right-[15px]'/>

                    {/* submenu */}
                    <ul className='submenu absolute top-[100%] left-[0%] w-full pl-3'>
                       <li className="list-none relative">
                       <Button 
                      className='w-full !text-left !justify-start !px-3 !text-black'>Fashion 
                      </Button>
                       </li>
                    </ul>

                 </li>
              </ul>
            </div>

          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                 
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    

  return (
    <>
     {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
}

export default CategoryPanel
=======
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

// imort react icons
import { FaRegWindowClose } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FiMinusCircle } from "react-icons/fi";


import { useState } from 'react';
import { Link } from 'react-router-dom';


// This file is impoted from mui website
const CategoryPanel = (props) => {

    const [submenuIndex , setSubmenuIndex] = useState(null);
    const [innerSubmenuIndex , setinnerSubmenuIndex] = useState(null);

    const toggleDrawer = (newOpen) => () => {
      props.setIsOpenCatPanel(newOpen);
    };

    const openSubmenu = (index) => {
        if (submenuIndex === index) {
            setSubmenuIndex(null);
        } else {
            setSubmenuIndex(index);
        }
    };
    const InneropenSubmenu = (index) => {
        if (innerSubmenuIndex === index) {
            setinnerSubmenuIndex(null);
        } else {
            setinnerSubmenuIndex(index);
        }
    };

    // drow list
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" className='categorypanel'>

          <h3 className='text-[16px] font-[500] p-3 flex items-center justify-between'>
            Shop By Categories  
              <FaRegWindowClose 
              onClick={toggleDrawer(false)} 
              className='cursor-pointer text-[20px]'
              />
            </h3>

            {/* Adding all the menu */}
            <div className="scroll">
              <ul className="w-full">

                {/* first menu */}
                 <li className="list-none flex items-center relative flex-col">

                 <Link to="/" className='w-full'>
                    <Button 
                    className='w-full !text-left !justify-start !px-3 !text-black'>Fashion 
                    </Button>
                 </Link>


                {/* Condition rendering is apply here */}
                 {
                  submenuIndex ===0 ?
                  <FiMinusCircle 
                    className='absolute top-[10px] right-[15px] cursor-pointer' 
                  onClick={() => openSubmenu(0)}
                  />
                  
                  :
                  <FaPlusSquare
                  className='absolute top-[10px] right-[15px] cursor-pointer' 
                  onClick={() => openSubmenu(0)}
                  />
                 }
                 {/* End */}

                  {
                    submenuIndex === 0 && (
                      // This is the submenu
                      <ul className='submenu w-full pl-3'>
                        <li className='list-none relative'>

                          <Link to="/" className='w-full'>
                            <Button 
                              className='w-full !text-left !justify-start !px-3 !text-black'>Apparel 
                            </Button>
                          </Link>


                       {/* Condition rendering is apply here */}
                          {
                          innerSubmenuIndex === 0 ?
                          <FiMinusCircle 
                            className='absolute top-[10px] right-[15px] cursor-pointer' 
                          onClick={() => InneropenSubmenu(0)}
                          />
                          
                          :
                          <FaPlusSquare
                          className='absolute top-[10px] right-[15px] cursor-pointer' 
                          onClick={() => InneropenSubmenu(0)}
                          />
                        }
                        {/* End */}

                          {
                            innerSubmenuIndex === 0 && (
                                  <ul className='inner_submenu  w-full pl-3'>
                                    {/* Sub submenu */}
                                    <li className='list-none relative mb-1'>
                                      <Link to="/" 
                                        className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Smart Tablets 
                                      </Link>
                                    </li>

                                    <li className='list-none relative mb-1'>
                                      <Link to="/" 
                                        className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Leather watch 
                                      </Link>
                                    </li>

                                    <li className='list-none relative mb-1'>
                                      <Link to="/" 
                                        className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Rolling Diamond 
                                      </Link>
                                    </li>

                                    <li className='list-none relative mb-1'>
                                      <Link to="/" 
                                        className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>bottles 
                                      </Link>
                                    </li>
                                  </ul>
                            )
                          }
                        
                        </li>
                      </ul>
                    )}
                  
                 </li>
                {/* end */}

                 {/* This is the second menu in category */}
                  <li className="list-none flex items-center relative flex-col">

                 <Link to="/" className='w-full'>
                    <Button 
                    className='w-full !text-left !justify-start !px-3 !text-black'>Outerwear 
                    </Button>
                 </Link>


                {/* Condition rendering is apply here */}
                 {
                  submenuIndex === 1 ?
                  <FiMinusCircle 
                    className='absolute top-[10px] right-[15px] cursor-pointer' 
                  onClick={() => openSubmenu(1)}
                  />
                  
                  :
                  <FaPlusSquare
                  className='absolute top-[10px] right-[15px] cursor-pointer' 
                  onClick={() => openSubmenu(1)}
                  />
                 }
                 {/* End */}

                  {
                    submenuIndex === 1 && (
                      // This is the submenu
                      <ul className='submenu w-full pl-3'>
                        <li className='list-none relative'>

                          <Link to="/" className='w-full'>
                            <Button 
                              className='w-full !text-left !justify-start !px-3 !text-black'>Apparel 
                            </Button>
                          </Link>


                       {/* Condition rendering is apply here */}
                          {
                          innerSubmenuIndex === 1 ?
                          <FiMinusCircle 
                            className='absolute top-[10px] right-[15px] cursor-pointer' 
                          onClick={() => InneropenSubmenu(1)}
                          />
                          
                          :
                          <FaPlusSquare
                          className='absolute top-[10px] right-[15px] cursor-pointer' 
                          onClick={() => InneropenSubmenu(1)}
                          />
                        }
                        {/* End */}

                          {
                            innerSubmenuIndex === 1 && (
                                  <ul className='inner_submenu w-full pl-3'>
                                    {/* Sub submenu */}
                                    <li className='list-none relative mb-1'>
                                      <Link to="/" 
                                        className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Smart Tablets 
                                      </Link>
                                    </li>

                                    <li className='list-none relative mb-1'>
                                      <Link to="/" 
                                        className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Leather watch 
                                      </Link>
                                    </li>

                                    <li className='list-none relative mb-1'>
                                      <Link to="/" 
                                        className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Rolling Diamond 
                                      </Link>
                                    </li>

                                    <li className='list-none relative mb-1'>
                                      <Link to="/" 
                                        className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>bottles 
                                      </Link>
                                    </li>
                                  </ul>
                            )
                          }
                        
                        </li>
                      </ul>
                    )}
                  
                 </li>
                 {/* Edn */}

                  {/* This is the third menu in category */}
                  <li className="list-none flex items-center relative flex-col">

                 <Link to="/" className='w-full'>
                    <Button 
                    className='w-full !text-left !justify-start !px-3 !text-black'>Dk Khatri 
                    </Button>
                 </Link>
                 </li>
                    {/* End */}


              </ul>
            </div>

        </Box>
      );
    

  return (
    <>
     {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
}

export default CategoryPanel
>>>>>>> cb722ddeca019a7ba7817399c277ab0081e3ef82
