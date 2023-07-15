import PropTypes from "prop-types";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children}) => {
  const navigate = useNavigate()
  if(!isAuthenticated) {
    navigate("/login")
  }
  return children
}

export default ProtectedRoute

ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  children: PropTypes.node,
};
