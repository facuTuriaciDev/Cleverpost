import { useState } from 'react';
import { Post } from '../../slices/posts/postSlice';
import './PostCard.scss';
import cat from '../../assets/avatars/0.jpg'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPen, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { deletePost } from '../../slices/posts/postSlice';

const users = ['Dwight', 'Michael', 'Jim', 'Pam', 'Kevin', 'Jan', 'Erin', 'Andy', 'Angela', 'Toby', 'Stanley', 'Cathy'];

interface CardProps {
  post: Post;
}

const Card: React.FC<CardProps> = ({ post }) => {
  const currentTheme = useSelector((state: RootState) => state.theme);
  const [isButtonEnabled, setButtonEnabled] = useState(true);
  const dispatch = useDispatch();

  function themeFormat(light: string, night: string) {
    return currentTheme === 'light' ? light : light + ' ' + night;
  }

  function handleDelete() {
    dispatch(deletePost(post.id));
  }

  function handleMouseEnter() {
    setButtonEnabled(true);
  }

  function handleMouseLeave() {
    setButtonEnabled(false);
  }

  return (
    <div className={themeFormat('card', 'card-background-night')}>

      <div
        className={themeFormat('card__body', 'card-night')}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

        <FontAwesomeIcon className='card__body--dots' icon={faEllipsis} size='xl' color='white' />

        <div className='card__body--delete'>
          <div className='card__body--delete__box' onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrashCan} size='xl' color='red' />
            <p>Delete</p>
          </div>

          <div className='card__body--delete__box' >
            <FontAwesomeIcon icon={faPen} size='xl'/>
            <p>Edit</p>
          </div>
        </div>

        <img className="card__avatar" src={cat} alt="" />
        <h4 className="card__user">{users[post.userId]}</h4>
      </div>

      <div className={themeFormat('card__footer', 'card-background-night')}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default Card;