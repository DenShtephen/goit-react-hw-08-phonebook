import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/AuthThunk';

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;

    setLoginInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const userCredentials = {
      email: loginInfo.email,
      password: loginInfo.password,
    };

    dispatch(logIn(userCredentials));
  };

  return (
    <section className="registration-container">
      <h1 className="registration-title">Login</h1>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="registration-input">
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

        <div className="registration-input">
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

        <div className="registration-button">
          <button type="submit">Login</button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
