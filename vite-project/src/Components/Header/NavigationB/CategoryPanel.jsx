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
