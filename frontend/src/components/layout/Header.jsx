import { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../../static/data";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { backend_url } from "../../server";
import CircularProgress from "@mui/material/CircularProgress";
import Cart from "../cart/Cart";
import Wishlist from "../wishlist/Wishlist";

// icons
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { BiMenuAltLeft } from "react-icons/bi";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState("");
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);

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
            <Link to="/shop-create">
              <h1 className="text-[#fff] flex items-center">
                Become Seller
                <ArrowForwardIcon className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
        <div
          className={`${
            active ? "shadow-sm fixed top-0 left-0 z-10" : null
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
                <div
                  className="relative cursor-pointer mr-[15px]"
                  onClick={() => setOpenWishlist(true)}
                >
                  <FavoriteBorderIcon
                    sx={{ color: "rgb(255, 255, 255, 0.83)" }}
                  />
                  <span className="absolute right-0 left-[13px] top-[-5px] rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                    0
                  </span>
                </div>
              </div>
              <div className={`${styles.noramlFlex}`}>
                <div
                  onClick={() => setOpenCart(true)}
                  className="relative cursor-pointer mr-[15px]"
                >
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
                  {isAuthenticated ? (
                    <Link to="/profile">
                      <img
                        src={`${backend_url}/${user.avatar}`}
                        alt=""
                        className="w-[35px] h-[35px] rounded-full"
                      />
                    </Link>
                  ) : (
                    <Link to="/login">
                      {loading ? (
                        <CircularProgress color="success" />
                      ) : (
                        <AccountCircleIcon
                          sx={{ color: "rgb(255, 255, 255, 0.83)" }}
                        />
                      )}
                    </Link>
                  )}
                </div>
              </div>

              {/* cart popup */}
              {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

              {/* wishlist popup */}
              {openWishlist ? (
                <Wishlist setOpenWishlist={setOpenWishlist} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {/* mobile header */}
      <div
        className={`${
          active === true ? "shadow-sm top-0 left-0 z-10" : null
        }
      w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm sm:hidden`}
      >
        <div className="flex items-center justify-between border-2 p-2">
          <div>
            <BiMenuAltLeft size={40} onClick={() => setOpen(true)} />
          </div>
          <div className="flex items-center">
            <Link to="/">
              <SportsEsportsIcon fontSize="large" sx={{ color: "#4FAF44" }} />
            </Link>
            <h3 style={{ fontFamily: "roboto" }} className="text-xl font-bold">
              GamerLy
            </h3>
          </div>
        </div>
        {/* Header sidebar */}
        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div
                    className="relative mr-[15px]"
                    onClick={() => setOpenWishlist(true) || setOpen(false)}
                  >
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                      0
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="my-8 w-[92%] m-auto h-[40px]  relative">
                <input
                  type="search"
                  placeholder="Search Product..."
                  className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                      {searchData && (
                  <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                    {searchData.map((i) => {
                      const d = i.name;
                        
                      const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link key={i.id} to={`/product/${Product_name}`}>
                          <div className="flex items-center">
                            <img
                              src={i.image_Url[0]?.url}
                              alt=""
                              className="w-[50px] mr-2"
                            />
                            <h5>{i.name}</h5>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Navbar active={activeHeading} />
              <div className={`${styles.button} ml-4 !rounded-[4px]`}>
              <Link to="/shop-create">
                  <h1 className="text-[#fff] flex items-center">
                    Become Seller <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
              <br />
              <br />
              <br />
              <div className="flex w-full justify-center">

              {isAuthenticated ? (
                  <div>
                    <Link to="/profile">
                      <img
                        src={`${backend_url}/${user.avatar}`}
                        alt=""
                        className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                      />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      Login /
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[18px] text-[#000000b7]"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

Header.propTypes = {
  activeHeading: PropTypes.number,
};
