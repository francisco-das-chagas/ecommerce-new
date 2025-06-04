import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="py-2">
      <div className="container flex items-center justify-end gap-5">
        <div className="col_1 w-[25%]">
          <Button className="!text-black gap-2 w-full ">
            <RiMenu2Fill className="text-[18px]" /> Shop By Categories{" "}
            <LiaAngleDownSolid className="text-[14px] ml-auto font-bold" />{" "}
          </Button>
        </div>

        <div className="col_2 w-[80%]">
          <ul className="flex items-center">
            <li className="list-none">
              <Link to="/" className="link transition">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
