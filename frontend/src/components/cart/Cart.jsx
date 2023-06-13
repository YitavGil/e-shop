import React from 'react';
import PropTypes from "prop-types";

const Cart = ({ setOpenCart }) => {

  const cartData = [
    {
      name: "iphone 14 pro max",
      description: "hello",
      price: 200
    },
    {
      name: "iphone 14 pro max",
      description: "hello",
      price: 200
    },
    {
      name: "iphone 14 pro max",
      description: "hello",
      price: 200
    },
  ]
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] sm:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">

      </div>
    </div>
  )
}

export default Cart

Cart.propTypes = {
  setOpenCart: PropTypes.func,
};