import './Navbar.scss'
import SearchBar from '../SearchBar/'
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { setTheme } from '../../slices/theme/themeSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { openModal, newPost } from '../../slices/modal/modalSlice';

function Navbar() {
  const dispatch: ThunkDispatch<RootState, void, PayloadAction> = useDispatch();

  const currentTheme = useSelector((state: RootState) => state.theme);

  const body = document.querySelector('body');

  function handleButton() {
    dispatch(setTheme())
  }

  function modalHandler() {
    dispatch(newPost());
    dispatch(openModal());
  }

  return (
    <div className={currentTheme === 'light' ? 'navbar' : 'navbar dark'}>
      <h3 className="navbar__title">Cleverpost</h3>
      <div className="navbar__search">

        <FontAwesomeIcon onClick={modalHandler} className='navbar__search__icon' icon={faPlusCircle} color='#2B90E9'/>

        <SearchBar />

        <FontAwesomeIcon className='navbar__search__icon' onClick={handleButton} 
          icon={currentTheme === 'light' ? faSun : faMoon} 
          style={{color: "#fac400",}}
        />

      </div>
    </div>
  )
}

export default Navbar;