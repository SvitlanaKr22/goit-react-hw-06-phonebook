import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Layout, Header, HeaderContacts } from './Layout';

export const App = () => {
  return (
    <Layout>
      <Header>Phonebook</Header>
      <ContactForm />
      <HeaderContacts>Contacts</HeaderContacts>
      <Filter />
      <ContactList />
    </Layout>
  );
};
