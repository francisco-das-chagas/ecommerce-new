// import {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoMdClose } from "react-icons/io";


const CategoryPanel = (props) => { 
    const toggleDrawer = (newOpen) => () => {   
      props.setIsOpenCatPanel(newOpen)
    };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">

      <h3 className='p-3 text-[16px] font-[500] flex items-center justify-between'>Shop By Categories<IoMdClose onClick={toggleDrawer(false)} className='cursor-pointer' /></h3>

      <div className='scroll'>
        <ul className='w-full'>
          <li className='list-none'>
            <Button className='w-full !text-left justify-start'>Fashion</Button>
          </li>
        </ul>
      </div>

 
    </Box>
  );

  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
   );
}
 
export default CategoryPanel;