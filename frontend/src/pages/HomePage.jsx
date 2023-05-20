import Header from '../components/layout/Header';
import Hero from '../components/route/hero/Hero';
import Categories from '../components/route/category/Categories';

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
    </div>
  )
}

export default HomePage