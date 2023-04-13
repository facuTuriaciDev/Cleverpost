import React from 'react';
import { Post } from '../../slices/posts/postSlice';
import './PostCard.scss';
import cat from '../../assets/avatars/0.jpg'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const users = ['Dwight', 'Michael', 'Jim', 'Pam', 'Kevin', 'Jan', 'Erin', 'Andy', 'Angela', 'Toby', 'Stanley', 'Cathy'];

interface CardProps {
  post: Post;
}

const Card: React.FC<CardProps> = ({ post }) => {
  const currentTheme = useSelector((state: RootState) => state.theme);

  function themeFormat (light: string, night: string) {
    return currentTheme === 'light' ? light : light + ' ' + night;
  }

  return (
    <div className={themeFormat('card', 'card-background-night')}>

      <div className={themeFormat('card__body', 'card-night')}>
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