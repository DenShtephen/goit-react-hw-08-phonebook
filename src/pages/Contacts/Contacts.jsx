import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Section } from 'components/Section/Section';

const Contacts = () => {
  return (
    <div>
      <Section title="PhoneBook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};

export default Contacts;
