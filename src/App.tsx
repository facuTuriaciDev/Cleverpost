import './App.scss';
import Home from './pages/Home';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <div className='App'>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          </Routes>
      </div>
    </Provider>
  );
}

export default App;