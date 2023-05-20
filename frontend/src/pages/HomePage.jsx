import Header from '../components/layout/Header';
import Hero from '../components/route/hero/Hero';

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
    </div>
  )
}

export default HomePage