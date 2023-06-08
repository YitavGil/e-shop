import { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../../static/data";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import PropTypes from "prop-types";

// icons
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState("");
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);

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

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden sm:h-12 sm:my-5 sm:flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <SportsEsportsIcon fontSize="large" sx={{ color: "#4FAF44" }} />
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

          <div className={`${styles.button}`}>
            <Link to="/seller">
              <h1 className="text-[#fff] flex items-center">
                Become Seller
                <ArrowForwardIcon className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
        <div
          className={`${
            active ? "shadow-sm fixed w-[91.69%] top-0 left-17 z-10" : null
          } transition hidden sm:flex items-center justify-between w-full bg-[#2A3492] h-[70px]`}
        >
          <div
            className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
          >
            {/* categories */}
            <div onClick={() => setDropDown(!dropDown)}>
              <div className="relative h-[60px] mt-3 w-[270px] hidden md:block">
                <AlignHorizontalLeftIcon className="absolute top-4 left-2" />
                <button
                  className={`h-full w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-medium select-none rounded-t-md`}
                >
                  All Categories
                </button>
                <KeyboardArrowDownIcon
                  className="absolute right-2 top-4 cursor-pointer"
                  onClick={() => setDropDown(!dropDown)}
                />
                {dropDown ? (
                  <DropDown
                    categoriesData={categoriesData}
                    setDropDown={setDropDown}
                  />
                ) : null}
              </div>
            </div>
            {/* NavItems */}
            <div className={`${styles.noramlFlex}`}>
              <Navbar active={activeHeading} />
            </div>

            <div className="flex">
              <div className={`${styles.noramlFlex}`}>
                <div className="relative cursor-pointer mr-[15px]">
                  <FavoriteBorderIcon
                    sx={{ color: "rgb(255, 255, 255, 0.83)" }}
                  />
                  <span className="absolute right-0 left-[13px] top-[-5px] rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                    0
                  </span>
                </div>
              </div>
              <div className={`${styles.noramlFlex}`}>
                <div className="relative cursor-pointer mr-[15px]">
                  <ShoppingCartIcon
                    sx={{ color: "rgb(255, 255, 255, 0.83)" }}
                  />
                  <span className="absolute right-0 left-[13px] top-[-5px] rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                    0
                  </span>
                </div>
              </div>
              <div className={`${styles.noramlFlex}`}>
                <div className="relative cursor-pointer mr-[15px]">
                  <Link to="/login">
                    <AccountCircleIcon
                      sx={{ color: "rgb(255, 255, 255, 0.83)" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

Header.propTypes = {
  activeHeading: PropTypes.number,
};
