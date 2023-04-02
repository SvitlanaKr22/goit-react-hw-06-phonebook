//import PropTypes from 'prop-types';
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

// ContactList.propTypes = {
//   list: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   handleDelete: PropTypes.func.isRequired,
// };

// export default function ContactList({ list, handleDelete }) {
//   return (
//     <List>
//       {list.map(({ id, name, number }) => (
//         <Contact
//           key={id}
//           name={name}
//           number={number}
//           onClickDelete={() => handleDelete(id)}
//         ></Contact>
//       ))}
//     </List>
//   );
// }

// ContactList.propTypes = {
//   list: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   handleDelete: PropTypes.func.isRequired,
// };
