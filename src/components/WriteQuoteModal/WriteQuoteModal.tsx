import { useState, useEffect } from 'react';
import './WriteQuoteModal.scss';
import CustomButton  from '../../components/CustomButton';
import { addPost, editPost } from '../../slices/posts/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { translate, generateRandomNumber } from '../../utils/utils';
import { closeModal } from '../../slices/modal/modalSlice';
import { users } from '../../data/users';
import {getRandomName} from '../../utils/utils';

function WriteQuoteModal() {
  const dispatch: ThunkDispatch<RootState, void, PayloadAction> = useDispatch();
  const selectedPost = useSelector((state: RootState) => state.post.selectedPost);
  const isNewPost = useSelector((state: RootState) => state.modal.isNewPost);

  const [postTitle, setPostTitle] = useState(isNewPost ? '' : selectedPost && selectedPost.title)
  const [postBody, setPostBody] = useState((isNewPost ? '' : selectedPost && selectedPost.body));
  
  const writeTitleText = translate('writeTitle');
  const writeSentenceText = translate('writeSentence');
  const sendText = translate('send');
  const editText = translate('edit');

  const [titleCharsLeft, setTitleCharsLeft] = useState(isNewPost ? 0 : selectedPost && selectedPost.title.length);
  const [bodyCharsLeft, setBodyCharsLeft] = useState(isNewPost ? 0 : selectedPost && selectedPost.body.length);

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostBody(e.target.value);
    setBodyCharsLeft(e.target.value.length);
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value);
    setTitleCharsLeft(e.target.value.length);
  }

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (postBody === '' || postTitle === '') {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [postBody, postTitle]);

  const currentTheme = useSelector((state: RootState) => state.theme);

  function cleanModal() {
    setPostTitle('');
    setPostBody('');
  }

  function closeModalMethod () {
    cleanModal()
    dispatch(closeModal());
  }

  function newPost() {
    dispatch(addPost({title: `${postTitle}`, body: `${postBody}`, 
      id: `${generateRandomNumber(1000000)}`, userId: `${generateRandomNumber(21)}`, avatar: `${generateRandomNumber(21)}`, user: `${getRandomName(users)}`}))
    closeModalMethod();
  }

  function editSelectedPost (id: string) {
    dispatch(editPost({id: `${id}`, title: `${postTitle}`, body: `${postBody}`}))
    closeModalMethod();
  }

  return (
    <>
      <div className='overlay'>
        <div className={`modal-content ${currentTheme === 'night' ? 'dark' : ''}`}>

          <div className={`modal-content__top ${currentTheme === 'night' ? 'dark' : ''}`}>
            <div onClick={closeModalMethod} className='modal-content__top--button'>
              <FontAwesomeIcon className='modal-content__top__icon' icon={faX} color='#2B90E9'/>
            </div>
          </div>

          <div className='modal-content__title'>
              <input
                placeholder={writeTitleText}
                className={`modal-content__title--input  ${currentTheme === 'night' ? 'dark' : ''}`}
                type="text"
                value={postTitle}
                onChange={handleTitleChange}
                maxLength={50}
              />
              
              <p className=''>{`${titleCharsLeft}/50`}</p>
          </div>

          <div className='modal-content__textarea'>
            <textarea
              className={`${currentTheme === 'night' ? 'dark' : ''}`}
              value={postBody}
              onChange={handleBodyChange}
              placeholder={writeSentenceText}
              maxLength={400}
            />
          </div>

          <div className='modal-content__title--chars'>
            <p>{`${bodyCharsLeft}/400`}</p>
          </div>

          <div className={'modal-content__separator'}></div>
    
          <div className='modal-content__button'>

          <CustomButton
            customClickEvent={isNewPost ? newPost : () => selectedPost && editSelectedPost(selectedPost.id.toString())}
            text={isNewPost ? sendText : editText}
            customClassName={isDisabled ? 'disabled' : ''}
          />

        </div>

      </div>
    </div>
   </>
  );
}

export default WriteQuoteModal;
