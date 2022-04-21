import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
import ContactItems from '../ContactItems';

function ContactList() {
  const contacts = useSelector(state => state.contacts.contactsList);
  const filter = useSelector(state => state.filter);

  function contactsFiltering() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }

  return (
    <ul className={s.list}>
      {contactsFiltering().map(contact => {
        return <ContactItems key={contact.id} contact={contact} />;
      })}
    </ul>
  );
}

export default ContactList;
