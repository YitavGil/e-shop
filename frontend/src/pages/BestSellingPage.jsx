import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import styles from "../styles/styles";
import { productData } from "../static/data";
import ProductCard from "../components/route/productCard/ProductCard";

const BestSellingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
      setData(d);
  }, []);

  return (
    <div>
      <Header activeHeading={2} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data &&
            data.map((item, index) => {
              return <ProductCard data={item} key={index} />;
            })}
        </div>
     
      </div>
    </div>
  );
};

export default BestSellingPage;
