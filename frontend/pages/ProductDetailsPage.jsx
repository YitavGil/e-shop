import Header from '../src/components/layout/Header';
import Footer from '../src/components/layout/Footer';
import ProductDetails from '../src/components/products/ProductDetails';
import { useParams } from 'react-router-dom';
import { productData } from '../src/static/data';
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