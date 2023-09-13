import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/auth/AuthThunk';
import { getStateAuth } from '../../redux/auth/selectors';
import { clearAuthToken } from '../../redux/auth/AuthThunk';

const Header = () => {
  const { profile } = useSelector(getStateAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/');
    clearAuthToken();
  };

  return (
    <>
      <header>
        {!profile && <NavLink to={'/'}>Home</NavLink>}
        {profile && (
          <div>
            <p>{profile.email}</p>
            <button type="submit" onClick={handleLogOut}>
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
