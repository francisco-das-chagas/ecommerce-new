// import {useState} from 'react';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { IoMdClose } from "react-icons/io";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

const CategoryPanel = (props) => {

  const [submenuIndex, setSubmenuIndex] = useState(null);
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const openInnerSubmenu=(index) => {
    if(innerSubmenuIndex===index) {
      setinnerSubmenuIndex(null);
    }else{
      setSubmenuIndex(index)
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        Shop By Categories
        <IoMdClose onClick={toggleDrawer(false)} className="cursor-pointer" />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative">
             <Link to="/">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Fashion
              </Button>
              </Link>
            <FaRegSquarePlus className="absolute top-[10px] right-[12px] cursor-pointer"
                onClick={()=> openSubmenu(0)}  />
                {
                  submenuIndex === 0 && (
                    <ul className="submenu absolute top-[100%] left-[0%] w-full pr-1 pl-3">
              <li className="list-none relative">
                <Link to="/">
                <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                  Apparel
                </Button>
                </Link> 
                <FaRegSquarePlus className="absolute top-[10px] right-[8px] cursor-pointer"/>

                <ul className="inner_submenu absolute top-[100%] left-[0%] w-full pr-1 pl-3">
                  <li className="list-none relative mb-1">
                    <Link 
                      to="/" 
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]">
                      Smart Tablet
                    </Link>
                  </li>
                  <li className="list-none relative mb-1">
                    <Link 
                      to="/" 
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]">
                      Crepe T-Shirt
                    </Link>
                  </li>
                  <li className="list-none relative mb-1">
                    <Link 
                      to="/" 
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]">
                     Leather Watch
                    </Link>
                  </li>
                  <li className="list-none relative mb-1">
                    <Link 
                      to="/" 
                      className="link w-full !text-left !justify-start !px-3 transition text-[14px]">
                      Rolling Diamond
                    </Link>
                  </li>
                </ul>

              </li>
            </ul>
                  )}

            
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
};

export default CategoryPanel;
