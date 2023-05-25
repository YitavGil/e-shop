import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");

  return (
    <>
      <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/product/${product_name}`}>
          <img
            src={data.image_Url[0].url}
            alt=""
            className="w-full h-[170px] object-contain"
          />
        </Link>
        <Link to={`/`}>
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>
        <Link to={`/product/${product_name}`}>
          <h4 className="pb-3 font-medium">
            {" "}
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>

          <div className="flex">
            <AiFillStar
              color="#f6ba00"
              size={20}
              className="mr-2 cursor-pointer"
            />
            <AiFillStar
              color="#f6ba00"
              size={20}
              className="mr-2 cursor-pointer"
            />
            <AiFillStar
              color="#f6ba00"
              size={20}
              className="mr-2 cursor-pointer"
            />
            <AiFillStar
              color="#f6ba00"
              size={20}
              className="mr-2 cursor-pointer"
            />
            <AiFillStar
              color="#f6ba00"
              size={20}
              className="mr-2 cursor-pointer"
            />
          </div>

          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              <h5 className={`${styles.productDiscountPrice}`}>
                {data.price === 0
                  ? data.price
                  : data.price}
                $
              </h5>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  data: PropTypes.object,
};
