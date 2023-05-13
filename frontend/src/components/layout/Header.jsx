import { useState } from 'react';
import styles from '../../styles/styles';
import { Link } from 'react-router-dom';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { productData } from '../../static/data'


const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts = productData && productData.filter((product) => {
      
    })
  }
  return (
    <div className={`${styles.section}`}>
      <div className='hidden sm:h-12 sm:my-5 sm:flex items-center justify-between'>
        <div className='flex items-center'>
          <Link to="/">
            <SportsEsportsIcon fontSize='large' sx={{ color: 'green'}} />
          </Link>
          <h3 style={{ fontFamily: 'roboto'}} className='text-xl font-bold'>GamerLy</h3>
        </div>
        {/* Search */}
        <div className='w-1/2 relative'>
          <input type='text' placeholder='Search Game' />
        </div>
      </div>
      
    </div>
  )
}

export default Header