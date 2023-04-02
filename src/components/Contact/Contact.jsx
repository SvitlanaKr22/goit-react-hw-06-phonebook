//import PropTypes from 'prop-types';
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
        {/* </Button>  <Button type="button" onClick={onClickDelete}> */}
        Delete
      </Button>
    </ContactItem>
  );
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onClickDelete: PropTypes.func.isRequired,
// };
