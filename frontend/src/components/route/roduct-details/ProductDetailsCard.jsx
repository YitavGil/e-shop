import { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../../../styles/styles";

const ProductDetailsCard = ({ setOpen, data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(false);

  const handleMessageSubmit = () => {};

  return (
    <div className="bg-[#fff]">
      <div
        onClick={() => setOpen(false)}
        className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center"
      >
        <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
          <RxCross1
            size={30}
            className="absolute right-3 top-3 z-50"
            onClick={() => setOpen(false)}
          />

          <div className="block w-full sm:flex">
            <div className="w-full sm:w-[50%]">
              <img src={data?.image_Url[0].url} alt="" />
              <div className="flex">
                <img
                  src={data.shop.shop_avatar.url}
                  className="w-[50px] h-[50px] rounded-full mr-2"
                />
                <div>
                  <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                  <h5 className="pb-3 text-[15px]">(4.5) Ratings</h5>
                </div>

                <div
                  className={`${styles.button} bg-[#000] mt-4 rounded-[4px] h-11`}
                  onClick={handleMessageSubmit}
                >
                  <span className="text-[#fff] flex items-center">
                    Send Message <AiOutlineMessage className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;

ProductDetailsCard.propTypes = {
  data: PropTypes.object,
  setOpen: PropTypes.func,
};
