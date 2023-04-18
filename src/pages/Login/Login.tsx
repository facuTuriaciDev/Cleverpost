import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { login } from '../../slices/login/loginSlice';
import { translate } from '../../utils/utils';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInText = translate('signIn');
  const signInInstructionsText = translate('signInInstructions');
  const usernamePlaceholderText = translate('usernamePlaceholder');
  const passwordPlaceholderText = translate('passwordPlaceholder');
  const wrongCredentialsText = translate('wrongCredentials');



  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAuth');
    if (isLoggedIn === 'true') {
      navigate('/home');
    }
  }, []);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === 'admin' && password === 'admin') {
      try {
        dispatch(login({ username, password }));
        navigate('/home');
      } catch (error) {
        console.log(error);
      }
    } else {
      setShowError(true);
    }
  };

  return (
    <div className='login'>

      <div className='login-container'>
        <div className='login-container__top'>
          <h1>{signInText}</h1>
          <p>{signInInstructionsText}</p>
        </div>

        <div className= 'login-container__form'>
          <form onSubmit={handleLogin}>
            <div>
              <input
                data-testid="username"
                placeholder={usernamePlaceholderText}
                type='text'
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                placeholder={passwordPlaceholderText}
                type='password'
                id='password'
                data-testid="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)
                }
              />
            </div>

            <div>
              <button data-testid="submit" type='submit'>{signInText}</button>
            </div>

            <div className='login-container__error'>
              {showError && <span data-testid="error-message" className='error-message'>{wrongCredentialsText}</span>}
            </div>

          </form>
        </div>

      </div>
      
    </div>
  );
};

export default Login;