import { Link } from "react-router-dom";
import Search from "../Search";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip'




const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  return (
    <header>
      <div className="top-strip py-2 border-b-[1px] border-gray-300 border-t-[1px]" >
        <div className="container">
            <div className="flex items-center justify-between">

              <div className="col1 w-[50%]">
                <p className="text-[14px] font-[500]">Get up to 50% off new season styles, limited time only</p>
              </div>

                <div className="col2 flex items-center justify-end">
                  <ul className="flex items-center gap-2">
                     <li className="list-none">
                      <Link to="/help-center" className="text-[13px] link font-[500] transition">Help Center</Link>
                     </li>
                     <li className="list-none">
                      <Link to="/order-traking" className="text-[13px] link font-[500] transition">Order Traking</Link>
                     </li>
                  </ul>
                </div>

            </div>
        </div>
      </div>

      <div className="header py-3">
        <div className="container flex items-center justify-between">

          <div className="col1 w-[25%]">
            <Link to={'/'}><img src="/logo.png"></img></Link>
          </div>

          <div className="col1 w-[45%]">
            <Search />
          </div>

          <div className="col1 w-[30%] flex items-center pl-7">
                <ul className="flex items-center gap-3 justify-end w-full">
                    <li className="list-none">
                      <Link to="/login" className="link transition text-[15px] font-[500]
                      ">Login</Link> |
                      <Link to="/register" className="link transition text-[15px] font-[500] pl-1
                      ">Register</Link>
                    </li>

                    <li>
                    <Tooltip title="compare">
                      <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary">
                        <IoIosGitCompare />
                        </StyledBadge>
                      </IconButton>
                    </Tooltip>
                    </li>

                    <li>
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart />
                      </StyledBadge>
                    </IconButton>
                    </li>

                    <li>
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="secondary">
                      <MdOutlineShoppingCart />
                      </StyledBadge>
                    </IconButton>
                    </li>
                </ul>
          </div>

        </div>

      </div>
    </header>
  );
};

export default Header;
