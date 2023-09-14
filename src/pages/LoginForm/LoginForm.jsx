import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/AuthThunk';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = evt => {
    const { name, value } = evt.target;

    setLoginInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    const userCredentials = {
      email: loginInfo.email,
      password: loginInfo.password,
    };

    try {
      await dispatch(logIn(userCredentials));
      navigate('/contacts');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userEmail">Email:</label>
          <input
            type="text"
            id="userEmail"
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;