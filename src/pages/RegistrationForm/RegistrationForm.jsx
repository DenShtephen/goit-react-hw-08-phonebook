import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/AuthThunk';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleSubmit = async evt => {
    evt.preventDefault();
    const newUser = {
      name: userInfo.userName,
      email: userInfo.userEmail,
      password: userInfo.password,
    };

    try {
      await dispatch(register(newUser));

      navigate('/contacts');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} action="/register" method="POST">
        <div>
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

        <div>
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

        <div>
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

        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
