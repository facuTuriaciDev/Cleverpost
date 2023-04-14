import { Post } from '../../slices/posts/postSlice';
import './PostCard.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../slices/posts/postSlice';
import { themeFormat } from '../../utils/utils';
import { users } from '../../data/users';
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

  return (
    <div className={themeFormat('card', 'card-background-night', currentTheme)}>

      <div className={themeFormat('card__body', 'card-night', currentTheme)}>
        <DropdownMenu handleDelete={handleDelete} currentTheme={currentTheme} />
        <img className="card__avatar" src={`src/assets/avatars/${post.userId}.jpg`} alt="" />
        <h4 className="card__user">{users[post.userId]} </h4>
      </div>

      <div className={themeFormat('card__footer', 'card-background-night', currentTheme)}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>

    </div>
  );
};

export default Card;