import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilters } from '../../redux/auth/selectors';
import { deleteContacts } from '../../redux/contacts/ContactsThunk';

export const ContactList = () => {
  const items = useSelector(selectContacts);
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();
  const filteredContacts = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleContactDelete = contactId => {
    dispatch(deleteContacts(contactId));
  };

  return (
    <div>
      <ul className="contact-list">
        {filteredContacts.map(contact => (
          <li key={contact.id} className="contact-list-item">
            {contact.name}: {contact.number}
            <button
              type="button"
              className="delete-button"
              onClick={() => handleContactDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
