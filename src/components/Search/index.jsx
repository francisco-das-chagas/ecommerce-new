import "../Search/style.css";
import Button from "@mui/material/Button";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full h-[35px] focus:outline-none bg-inherit p-2 text=[15px]"
      />
      <Button className="!absolute top-[8px] right-[5px] z-50 !w-[35px] !min-w[37px] h-[37px] !rounded-full !text-black">
        <CiSearch className="text-[#2a2a2a] text-[26px]" />
      </Button>
    </div>
  );
};

export default Search;
