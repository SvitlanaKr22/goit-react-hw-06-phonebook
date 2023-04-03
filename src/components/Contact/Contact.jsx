import PropTypes from 'prop-types';
import { ContactItem, Button } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <ContactItem>
      <p>{contact.name + ': '}</p>
      <p>{contact.number}</p>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </ContactItem>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
