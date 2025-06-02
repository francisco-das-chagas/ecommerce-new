import { Link } from "react-router-dom";
import Search from "../Search";

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

          <div className="col1 w-[30%]">
          </div>

        </div>

      </div>
    </header>
  );
};

export default Header;
