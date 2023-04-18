import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Card from './PostCard';
import '@testing-library/jest-dom/extend-expect';

const mockPost = {
  id: 1,
  userId: 1,
  title: "Lore Title",
  body: "Lore Body",
  user: "John Cena",
  avatar: 1,
};

describe('Card', () => {
  it('should render post information', () => {
    render(
      <Provider store={store}>
        <Card post={mockPost} />
      </Provider>
    );

    expect(screen.getByText('Lore Title')).toBeInTheDocument();
    expect(screen.getByText('Lore Body')).toBeInTheDocument();
    expect(screen.getByText('John Cena')).toBeInTheDocument();
  });

});