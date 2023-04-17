import './Navbar.scss'
import SearchBar from '../SearchBar/'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { setTheme } from '../../slices/theme/themeSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import WriteQuotemodal from '../../components/WriteQuoteModal/';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch: ThunkDispatch<RootState, void, PayloadAction> = useDispatch();

  const currentTheme = useSelector((state: RootState) => state.theme);

  const body = document.querySelector('body');

  function handleButton() {
    dispatch(setTheme())
  }

  function handleCloseModal() {
    setIsOpen(false);
    body?.classList.remove('modal-open');
  }

  function newPost() {
    setIsOpen(true);
    body?.classList.add('modal-open');
  }

  return (
    <div className={currentTheme === 'light' ? 'navbar' : 'navbar dark'}>
      <h3 className="navbar__title">Cleverpost</h3>
      <div className="navbar__search">

      <FontAwesomeIcon onClick={newPost} className='navbar__search__icon' icon={faPlusCircle} color='#2B90E9'/>

      <SearchBar />

      <WriteQuotemodal isOpen={isOpen} handleClose={handleCloseModal}/>

      <FontAwesomeIcon className='navbar__search__icon' onClick={handleButton} 
        icon={currentTheme === 'light' ? faSun : faMoon} 
        style={{color: "#fac400",}}
      />

      </div>
    </div>
  )
}

export default Navbar