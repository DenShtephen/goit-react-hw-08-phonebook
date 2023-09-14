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
        {!profile && <NavLink to={'/'}>Home</NavLink>}
        {profile && (
          <div>
            <p>{profile.email}</p>
            <button
              type="submit"
              className="delete-button"
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
