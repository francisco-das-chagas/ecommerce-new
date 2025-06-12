import Button from "@mui/material/Button";
import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";

import "../Navigation/style.css"

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-8">
          <div className="col_1 w-[26%]">
            <Button className="!text-black gap-3 w-full " onClick={openCategoryPanel}> 
              <RiMenu2Fill className="text-[18px]" /> Shop By Categories
              <LiaAngleDownSolid className="text-[13px] ml-auto font-bold" />
            </Button>
          </div>

          <div className="col_2 w-[66%] ">
            <ul className="flex items-center gap-3">
              <li className="list-none">
                <Button to="/" className="link transition !capitalize !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                  Home
                </Button>
              </li>

              <li className="list-none">
                <Button to="/" className="link transition !capitalize !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                  Fashion
                </Button>
              </li>

              <li className="list-none">
                <Button to="/" className="link transition !capitalize !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                  Eletronics
                </Button>
              </li>

              <li className="list-none">
                <Button to="/" className="link transition !capitalize !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                  Bags
                </Button>
              </li>

              <li className="list-none">
                <Button to="/" className="link transition !capitalize !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                  Footwear
                </Button>
              </li>

              <li className="list-none">
                <Button to="/" className="link transition !capitalize !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                  Groceries
               </Button>
              </li>

              <li className="list-none">
                <Button to="/" className="link transition !capitalize !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                  Beauty
                </Button>
              </li>

              <li className="list-none">
                <Button to="/" className="link transition !capitalize !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                  Wellness
                </Button>
              </li>

              <li className="list-none">
                <Button to="/" className="link transition !capitalize !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                  Jewellery
                </Button>
              </li>
            </ul>
          </div>

          <div className="col_3 w-[20%] flex items-end">
            <p className="text-[13px] font-[500] flex items-center gap-3 mb-0 mt-0 ">
              {" "}
              <GoRocket className="text-[18px]" /> Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      <CategoryPanel isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel}/>
    </>
  );
};

export default Navigation;
