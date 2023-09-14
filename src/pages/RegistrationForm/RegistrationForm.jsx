import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/AuthThunk';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    userName: '',
    userEmail: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUserInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newUser = {
      name: userInfo.userName,
      email: userInfo.userEmail,
      password: userInfo.password,
    };

    dispatch(register(newUser));
  };

  return (
    <section className="registration-container">
      <h1 className="registration-title">Register</h1>
      <form
        className="registration-form"
        onSubmit={handleSubmit}
        action="/register"
        method="POST"
      >
        <div className="registration-input">
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            id="username"
            name="userName"
            value={userInfo.userName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="registration-input">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="userEmail"
            value={userInfo.userEmail}
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
            value={userInfo.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="registration-button">
          <button type="submit">Register</button>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
