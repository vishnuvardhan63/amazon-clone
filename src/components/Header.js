import React, { useContext } from 'react'
import '../components/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { stateContext } from '../App';
import { useStateValue } from './StateProvider';
import { auth } from '../firebase';

function Header(){
    // const stateConsumer=useContext(stateContext)
    // const [{basket},dispatch]=stateConsumer
    const [{basket,totalPrice,cartCount,user},dispatch]=useStateValue()
    const handleAuthentication=()=>{
        if(user){
            auth.signOut()
        }
    }
    return(
        <div className='header'>
            <Link to='/'>
            <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
            </Link>
            <div className='header__search'>
                <input type='text' className='header__searchInput'/>
                <SearchIcon className='header__searchIcon'/>
            </div>
            <div className='header__nav'>
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className='header__option'>
                    {/* <span className='header__optionLineOne'>{user?`Hello ${user.email.substring(0, user.email.indexOf("@"))}`:'Hello Guest'}</span> */}
                    <span className='header__optionLineOne'>Hello {user?.email.substring(0, user.email.indexOf("@"))}</span>
                    <span className='header__optionLineTwo'>{user?'Sign Out':'Sign In'}</span>
                </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
                <Link to='/checkout'>
                <div className='header__optionBasket'>
                    <ShoppingCartIcon />
                    <span className='header__optionLineTwo header__basketCount'>{cartCount}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}
export default Header