import { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import PropTypes from "prop-types";

const ProductDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {data ? (
        <div className={`${styles.section} w-[90%] sm:w-[80%] h-screen`}>
          <div className="w-full py-5">
            <div className="block w-full sm:flex">
              <div className="w-full sm:w-1/2">
                <img
                  src={data?.image_Url[select]?.url}
                  alt=""
                  className="w-[80%]"
                />
                <div className="w-full flex">
                  <div
                    className={`${select === 0 ? "border" : ""} cursor-pointer`}
                  >
                    <img
                      className="h-[200px] overflow-hidden mr-3 mt-3"
                      alt=""
                      src={data?.image_Url[0]?.url}
                      onClick={() => setSelect(0)}
                    />
                  </div>
                  <div className="w-full flex">
                    <div
                      className={`${
                        select === 1 ? "border" : ""
                      } cursor-pointer`}
                    >
                      <img
                        className="h-[200px] overflow-hidden mr-3 mt-3"
                        alt=""
                        src={data?.image_Url[1]?.url}
                        onClick={() => setSelect(1)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 pt-5">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.discount_price}$
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.price ? data.price + "$" : null}
                  </h3>
                </div>
                <div className="flex items-center mt-12 justify-between pr-3">
                  <div>
                    <button className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out">-</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;

ProductDetails.propTypes = {
  data: PropTypes.object,
};
