import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Navbar />
        <Home />
      </div>
    </Provider>
  );
}

export default App
