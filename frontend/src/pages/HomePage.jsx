import Header from '../components/layout/Header';
import Hero from '../components/route/hero/Hero';
import Categories from '../components/route/category/Categories';
import BestDeals from '../components/route/bestDeals/BestDeals';
import FeaturedProducts from '../components/route/FeaturedProducts';
import Events from '../components/events/Events';

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProducts />
    </div>
  )
}

export default HomePage