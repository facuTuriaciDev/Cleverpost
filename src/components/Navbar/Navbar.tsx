import './Navbar.scss'
import SearchBar from '../SearchBar/'
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { setTheme } from '../../slices/theme/themeSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faPlusCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { openModal, newPost } from '../../slices/modal/modalSlice';
import { logout } from '../../slices/login/loginSlice';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const dispatch: ThunkDispatch<RootState, void, PayloadAction> = useDispatch();

  const currentTheme = useSelector((state: RootState) => state.theme);

  const navigate = useNavigate();

  function handleButton() {
    dispatch(setTheme())
  }

  function modalHandler() {
    dispatch(newPost());
    dispatch(openModal());
  }

  function logoutHandler() {
    dispatch(logout());
    navigate('/');
  }

  return (
    <div className={currentTheme === 'light' ? 'navbar' : 'navbar dark'}>
      
      <div className='navbar__title-container'>
        <h3 className="navbar__title-container--title">Cleverpost</h3>
        <FontAwesomeIcon className='' onClick={handleButton} 
            icon={currentTheme === 'light' ? faSun : faMoon} 
            style={{color: "#fac400",}}
        />
      </div>

      <div className="navbar__search">

        <FontAwesomeIcon onClick={modalHandler} className='navbar__search__icon' icon={faPlusCircle} color='#2B90E9'/>

        <SearchBar />
      <FontAwesomeIcon onClick={logoutHandler} className='navbar__search__leave' icon={faSignOutAlt} color='#2B90E9'/>
      </div>
    </div>
  )
}

export default Navbar;