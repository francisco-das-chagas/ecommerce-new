import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="py-2">
      <div className="container flex items-center justify-end gap-5">
        <div className="col_1 w-[24%] border-1">
          <Button className="!text-black gap-2 w-full text-[10px]  ">
            <RiMenu2Fill className="text-[18px]" /> Shop By Categories{" "}
            <LiaAngleDownSolid className="text-[14px] ml-auto font-bold" />{" "}
          </Button>
        </div>

        <div className="col_2 w-[80%] border-1">
          <ul className="flex items-center gap-5">
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">Home</Link>
            </li>

            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">Fashion</Link>
            </li>

            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">Eletronics</Link>
            </li>

            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">Bags</Link>
            </li>

            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">Footwear</Link>
            </li>

            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">Groceries</Link>
            </li>

            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">Beauty</Link>
            </li>

            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">Wellness</Link>
            </li>

            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">Jewellery</Link>
            </li>

            

          </ul>
        </div>

        <div className="col_3 w-[20%] border-1 ">
          <p className="text-[13px]">Free International Delivery</p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
