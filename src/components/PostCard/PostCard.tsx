import React from 'react';
import { Post } from '../../slices/posts/postSlice';
import './PostCard.scss';
import cat from '../../assets/avatars/0.jpg'

const users = ['Dwight', 'Michael', 'Jim', 'Pam', 'Kevin', 'Jan', 'Erin', 'Andy', 'Angela', 'Toby', 'Stanley', 'Cathy'];

interface CardProps {
  post: Post;
}

const Card: React.FC<CardProps> = ({ post }) => {

  return (
    <div className="card">

      <div className="card__body">
        <img className="card__avatar" src={cat} alt="" />
        <h4 className="card__user">{users[post.userId]}</h4>
      </div>

      <div className="card__footer">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      
    </div>
  );
};

export default Card;