import { useState } from "react";
import PropTypes from "prop-types";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";

// Icons
import { RxCross1 } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";

const WishList = ({ setOpenWishlist }) => {
  const cartData = [
    {
      name: "iphone 14 pro max",
      description: "hello",
      price: 200,
    },
    {
      name: "iphone 14 pro max",
      description: "hello",
      price: 200,
    },
    {
      name: "iphone 14 pro max",
      description: "hello",
      price: 200,
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] sm:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenWishlist(false)}
            />
          </div>
          {/* Item length */}
          <div className={`${styles.noramlFlex} p-4`}>
            <AiOutlineHeart size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">
              {cartData && cartData.length} items
            </h5>
          </div>

          {/* cart single items */}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default WishList;

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1 className="cursor-pointer sm:mb-['unset'] sm:ml-['unset'] mb-2 ml-2" />
        <img
          src="https://www.ivory.co.il/files/catalog/org/1683624597g97Su.jpg"
          alt="product"
          className="w-[130px] h-min ml-2 mr-2 rounded-[5px]"
        />

        <div className="pl-[5px]">
          <h1>{data.name}</h1>
        
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            US${totalPrice}
          </h4>
        </div>
      <div>
      <BsCartPlus size={20} className="cursor-pointer ml-7" tile="Add to cart"
           onClick={() => {}}
          />
      </div>
      </div>
    </div>
  );
};

WishList.propTypes = {
  setOpenWishlist: PropTypes.func,
};

CartSingle.propTypes = {
  data: PropTypes.object,
};
