import PropTypes from "prop-types";
import { Navigate, useNavigate } from "react-router-dom";

const SellerProtectedRoute = ({ isSeller, children}) => {
  const navigate = useNavigate()
  if(!isSeller) {
    navigate(`/`)
  }
  return children
}

export default SellerProtectedRoute

SellerProtectedRoute.propTypes = {
  isSeller: PropTypes.bool,
  children: PropTypes.node,
};
