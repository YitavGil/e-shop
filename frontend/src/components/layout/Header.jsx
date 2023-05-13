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
        return product.name
          .toLocaleLowerCase()
          .includes(term.toLocaleLowerCase());
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
            value={searchTerm}
            onChange={handleSearch}
            className="h-10 w-full px-2 border-[#3957db] border-2 rounded-md"
          />
          <SearchIcon className="absolute right-2 top-2 cursor-pointer" />
          {searchData && searchData.length !== 0 ? (
            <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-9 p-4">
              {searchData &&
                searchData.map((item, index) => {
                  const d = item.name;

                  const productName = d.replace(/\s+/g, "-");
                  return (
                    <Link key={index} to={`/product/${productName}`}>
                      <div className="w-full flex items-start py-3">
                        <img
                          src={item.image_Url[0].url}
                          alt=""
                          className="w-10 h-10 mr-3"
                        />
                        <h1>{item.name}</h1>
                      </div>
                    </Link>
                  );
                })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
