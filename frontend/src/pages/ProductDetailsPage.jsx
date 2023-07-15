import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductDetails from '../components/products/ProductDetails';
import { useParams } from 'react-router-dom';
import { productData } from '../static/data';
import SuggestedProduct from "../components/products/SuggestedProduct";

const ProductDetailsPage = () => {
  const {name} = useParams();
  const productName = name.replace(/-/g," ")
  
  const itemObject = productData.find((i) =>i.name === productName);

  return (
    <div>
      <Header />
      <ProductDetails data={itemObject} />
      { itemObject && <SuggestedProduct data={itemObject} /> }
      <Footer />
    </div>
  )
}

export default ProductDetailsPage