import './PostCard.scss';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, Post, selectPost } from '../../slices/posts/postSlice';
import { themeFormat } from '../../utils/utils';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

interface CardProps {
  post: Post;
}

const Card: React.FC<CardProps> = ({ post }) => {
  const currentTheme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  
  function handleDelete(): void {
    dispatch(deletePost(post.id));
  }

  function handleSelectPost() {
    dispatch(selectPost(post));
  }

  return (
    <div className={themeFormat('card', 'card-background-night', currentTheme)}>

      <div onClick={handleSelectPost} className={themeFormat('card__body', 'card-night', currentTheme)}>
        <DropdownMenu handleDelete={ handleDelete} currentTheme={currentTheme}/>
        <img className="card__avatar" src={`src/assets/avatars/${post.avatar}.jpg`} alt="" />
        <h4 className="card__user">{post.user} </h4>
      </div>

      <div className={themeFormat('card__footer', 'card-background-night', currentTheme)}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>

    </div>
  );
};

export default Card;