import { useState } from 'react';
import './WriteQuoteModal.scss';
import CustomButton  from '../../components/CustomButton';
import { addPost } from '../../slices/posts/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { translate, generateRandomNumber } from '../../utils/utils';

interface ModalProps {
  handleClose?: () => void;
  isOpen: boolean;
}

function WriteQuoteModal({ handleClose, isOpen }: ModalProps) {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  
  const writeTitleText = translate('writeTitle');
  const writeSentenceText = translate('writeSentence');
  const sendText = translate('send');

  const currentTheme = useSelector((state: RootState) => state.theme);

  const dispatch: ThunkDispatch<RootState, void, PayloadAction> = useDispatch();

  function cleanModal() {
    setPostTitle('');
    setPostBody('');
  }

  function newPost() {
    cleanModal();    
    dispatch(addPost({title: `${postTitle}`, body: `${postBody}`, 
      id: `${generateRandomNumber(1000000)}`, userId: `${generateRandomNumber(11)}`}))
    handleClose && handleClose();
  }

  function closeModal () {
    cleanModal()
    handleClose && handleClose();
  }

  return (
    <>
      { isOpen && 

      <div className={`overlay ${isOpen ? 'open' : ''}`}>
        <div className={`modal-content ${currentTheme ? 'dark' : ''}`}>

          <div className={`modal-content__top ${currentTheme ? 'dark' : ''}`}>
            <div onClick={closeModal} className='modal-content__top--button'>
              <FontAwesomeIcon className='modal-content__top__icon' icon={faX} color='#2B90E9'/>
            </div>
          </div>

          <div className='modal-content__title'>
              <input
                placeholder={writeTitleText}
                className={`modal-content__title--input  ${currentTheme ? 'dark' : ''}`}
                type="text"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                maxLength={50}
              />
          </div>

          <div className='modal-content__textarea'>
            <textarea
              className={`${currentTheme ? 'dark' : ''}`}
              value={postBody}
              onChange={(e) => setPostBody(e.target.value)}
              placeholder={writeSentenceText}
              maxLength={400}
            />
          </div>

          <div className={'modal-content__separator'}></div>
    
          <div className='modal-content__button'>
            <CustomButton customClickEvent={newPost} text={sendText}/>
          </div>
          
        </div>
      </div>
      }
   </>
  );
}

export default WriteQuoteModal;
