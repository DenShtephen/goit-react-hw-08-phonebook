import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';
import { logOut } from '../../redux/auth/AuthThunk';
import { getStateAuth } from '../../redux/auth/selectors';

const Header = () => {
  const { profile } = useSelector(getStateAuth);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <header>
        {!profile && (
          <nav className="header">
            <NavLink to={'/'}>Home</NavLink>
            <div className="navigation">
              <NavLink to={'/register'} className="navigation-user">
                Register
              </NavLink>
              <NavLink to={'/login'} className="navigation-user">
                Login
              </NavLink>
            </div>
          </nav>
        )}
        {profile && (
          <div className="user-wrapper">
            <p className="user-info">{profile.email}</p>
            <button
              type="submit"
              className="logout-button"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </div>
        )}
      </header>
      <Suspense fallback={<span>Loading...</span>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
