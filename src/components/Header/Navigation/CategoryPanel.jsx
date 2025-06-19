// import {useState} from 'react';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { IoMdClose } from "react-icons/io";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CategoryPanel = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
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
            <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
              Fashion
            </Button>
            <FaRegSquarePlus className="absolute top-[10px] right-[12px] cursor-pointer" />

            <ul className="submenu absolute top-[100%] left-[0%] w-full pr-1 pl-3">
              <li className="list-none relative">
                <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                  Apparel
                </Button>
                <FaRegSquarePlus className="absolute top-[10px] right-[8px] cursor-pointer" />

                <ul className="submenu absolute top-[100%] left-[0%] w-full pr-1 pl-3">
              <li className="list-none relative">
                <Link to="/" className="w-full !text-left !justify-start !px-3">
                  Apparel
                </Link>
                <FaRegSquarePlus className="absolute top-[10px] right-[8px] cursor-pointer" />
              </li>
            </ul>

              </li>
            </ul>
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
