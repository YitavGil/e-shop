import { useState} from "react";
import PropTypes from "prop-types";
import styles from "../../styles/styles";

// Icons
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";

const Cart = ({ setOpenCart }) => {
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
              onClick={() => setOpenCart(false)}
            />
          </div>
          {/* Item length */}
          <div className={`${styles.noramlFlex} p-4`}>
            <IoBagHandleOutline size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">
              {cartData && cartData.length} items
            </h5>
          </div>

          {/* cart single items */}
          <br />
          <div className="w-full border-t">
          {cartData &&
                  cartData.map((i, index) => (
                    <CartSingle
                      key={index}
                      data={i}
                      
                    />
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div>
        <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
            onClick={() => setValue(value + 1)}
          >
            <HiPlus size={18} color="#fff" />
          </div>
        </div>
      </div>
    </div>
  )
}

Cart.propTypes = {
  setOpenCart: PropTypes.func,
};

CartSingle.propTypes = {
  data: PropTypes.object,
};
