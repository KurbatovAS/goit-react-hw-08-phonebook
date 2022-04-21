import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/slice';
import s from './ContactItems.module.css';

function ContactItems({ contact }) {
  const dispatch = useDispatch();

  const { id, name, number } = contact;

  return (
    <li className={s.item}>
      {name}: {number}
      <button
        type="button"
        name={name}
        className={s.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
}

ContactItems.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItems;
