import { fetchContacts } from '../redux/contacts/ContactsThunk';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { Section } from './Section/Section';
import { useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicRoute from 'PublicRoute/PublicRoute';
import PrivateRoute from 'PrivateRoute/PrivateRoute';

const Header = lazy(() => import('./UserMenu/UserMenu'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterForm = lazy(() =>
  import('../pages/RegistrationForm/RegistrationForm')
);
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="app-container">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route
              index
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
          </Route>
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterForm />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};

// <Section title="PhoneBook">
//   <ContactForm />
// </Section>
// <Section title="Contacts">
//   <Filter />
//   <ContactList />
// </Section>
