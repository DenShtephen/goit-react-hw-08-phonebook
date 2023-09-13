import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { ContactForm } from '../../components/ContactForm/ContactForm';

const Contacts = () => {
  return (
    <section>
      <ContactForm />
      <Filter />
      <ContactList />
    </section>
  );
};

export default Contacts;
