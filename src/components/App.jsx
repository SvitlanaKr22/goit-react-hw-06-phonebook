import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Layout, Header, HeaderContacts } from './Layout';

const LS_CONTACT = 'contacts';

export const App = () => {
  const getFromLocalStorage = () => {
    const stateFromStorage = JSON.parse(localStorage.getItem(LS_CONTACT));
    if (stateFromStorage === null) return [];
    return stateFromStorage;
  };

  const [contacts, setContacts] = useState(getFromLocalStorage);
  const [filter, setFilter] = useState('');
  const [contactsFilter, setContactsFilter] = useState([]);

  useEffect(() => {
    localStorage.setItem(LS_CONTACT, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (contacts.find(({ name }) => name === newContact.name)) {
      alert(`${newContact.name} is already is contact`);
      return;
    }
    setContacts([...contacts, newContact]);
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const serchContact = () => {
    const normalizeFilter = filter.toLowerCase();
    setContactsFilter(
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter)
      )
    );
  };

  useEffect(serchContact, [contacts, filter]);

  const handleDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Layout>
      <Header>Phonebook</Header>
      <ContactForm onSave={addContact} />
      <HeaderContacts>Contacts</HeaderContacts>
      <Filter value={filter} changeFilter={changeFilter} />
      <ContactList
        list={filter ? contactsFilter : contacts}
        handleDelete={handleDeleteContact}
      />
    </Layout>
  );
};
