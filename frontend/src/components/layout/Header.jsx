import { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { productData } from "../../static/data";

// icons
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((product) => {
        product.name.toLocaleLowerCase().includes(term.toLocaleLowerCase());
      });
    setSearchData(filteredProducts);
  };
  return (
    <div className={`${styles.section}`}>
      <div className="hidden sm:h-12 sm:my-5 sm:flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <SportsEsportsIcon fontSize="large" sx={{ color: "green" }} />
          </Link>
          <h3 style={{ fontFamily: "roboto" }} className="text-xl font-bold">
            GamerLy
          </h3>
        </div>
        {/* Search */}
        <div className="w-1/2 relative">
          <input
            type="text"
            placeholder="Search Game"
            value={searchData}
            onChange={handleSearch}
            className="h-10 w-full px-2 border-[#3957db] border-2 rounded-md"
          />
          <SearchIcon className="absolute right-2 top-2 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
