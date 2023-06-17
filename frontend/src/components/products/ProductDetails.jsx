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

  console.log(data);

  return (
    <div className="bg-white">
      {data ? (
        <div className={`${styles.section} w-[90%] sm:w-[80%] h-screen`}>
          <div className="w-full py-5">
            <div className="block w-full sm:flex">
              <div className="w-full sm:w-1/2">
              <img src={data?.image_Url[select]?.url} alt="" className="w-[80%]" />
              </div>
              <div className="w-full sm:w-1/2">
                <div className="w-full flex">
                  <div
                    className={`${select === 0 ? "border" : ""} cursor-pointer`}
                  >
                    <img
                      className="h-[200px] overflow-hidden mr-3 mt-3"
                      alt=""
                      src={data?.image_Url[0]?.url}
                    />
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
