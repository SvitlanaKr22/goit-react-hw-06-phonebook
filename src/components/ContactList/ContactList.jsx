import Contact from 'components/Contact/Contact';
import { List } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

const getSearchContacts = (contacts, filter) => {
  const normalizeFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
};

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const list = getSearchContacts(contacts, filter);

  return (
    <List>
      {list.map(contact => (
        <Contact key={contact.id} contact={contact}></Contact>
      ))}
    </List>
  );
}
