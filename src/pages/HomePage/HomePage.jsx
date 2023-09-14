export const HomePage = () => {
  return (
    <section className="welcome-section">
      <h1 className="welcome-title">
        Welcome to 'Phonebook' your own world of contacts and possibilities!
      </h1>

      <div className="welcome-content">
        <ul className="welcome-list">
          <li className="welcome-item">
            <p className="welcome-text">
              Open your very own treasure chest of contacts. It all starts with
              opening the 'PhoneBook' app. This is your personal book with the
              most important people to you, ready to serve you.
            </p>
          </li>
          <li className="welcome-item">
            <p className="welcome-text">
              Add a new contact. Look for the 'Add Contact' button - this button
              opens the door to the magical world of storing information about
              important individuals.
            </p>
          </li>
          <li className="welcome-item">
            <p className="welcome-text">
              Fill in the fields as you wish. Imagine that you are filling a
              fairy tale book with your favorite story. Name, phone number,
              email address - these are all pieces of this story.
            </p>
          </li>
          <li className="welcome-item">
            <p className="welcome-text">
              Save your new magical page. Yes, your contact is created, and this
              information is now truly magical.
            </p>
          </li>
        </ul>
      </div>

      <p className="welcome-footer">&copy; 2023 Phonebook by DenShtephen</p>
    </section>
  );
};

export default HomePage;
