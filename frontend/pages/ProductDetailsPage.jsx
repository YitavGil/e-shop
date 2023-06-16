import { useState, useEffect } from 'react';
import Header from '../src/components/layout/Header';
import Footer from '../src/components/layout/Footer';
import ProductDetails from '../src/components/products/ProductDetails';
import { useParams } from 'react-router-dom';
import { productData } from '../src/static/data';

const ProductDetailsPage = () => {
  const {name} = useParams();
  const [data, setData] = useState({});
  const productName = name.replace(/-/g," ")
  
  useEffect(() => {
    const data = productData.find((i) => i.name === productName);
   
    setData(data)
  },[])

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      <Footer />
    </div>
  )
}

export default ProductDetailsPage