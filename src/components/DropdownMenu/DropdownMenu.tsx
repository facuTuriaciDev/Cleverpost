import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPen, faClose, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import DropdownElement from '../DropdownElement';
import './DropdownMenu.scss';

interface DropdownMenuProps {
  handleDelete: () => void;
  currentTheme: string;
}

function DropdownMenu({ handleDelete, currentTheme}: DropdownMenuProps) {

  const [isButtonEnabled, setButtonEnabled] = useState(false);
  
  function handleMenu(): void {

    if(isButtonEnabled) {

      const deleteBox = document.querySelector('.options-container');
      deleteBox?.classList.add('options-container--hide');
      
      setTimeout(() => {
        setButtonEnabled(!isButtonEnabled);
      }, 500);
      
    } else {
      setButtonEnabled(!isButtonEnabled);
    }

  }

  return (
    <>
      <div id="handleDiv" className='dots' onClick={handleMenu} >
        <FontAwesomeIcon icon={isButtonEnabled ? faClose : faEllipsis} size='xl' color='white' />
      </div>
      {
        isButtonEnabled && 
        <div className={
          `options-container ${currentTheme} options-container--show`}>
        
          <DropdownElement classProp={'options-container__box'} customText={'delete'} icon={faTrashCan} size='xl' handleDelete={handleDelete} color='red' />

          <DropdownElement classProp={'options-container__box'} customText={'edit'} icon={faPen} size='xl' color='black' />

        </div>
      }
    </>
  )
}

export default DropdownMenu