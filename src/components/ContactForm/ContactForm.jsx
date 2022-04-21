import { useSelector, useDispatch } from 'react-redux';
import { createContact } from 'redux/contacts/slice';
import s from './ContactForm.module.css';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contactsList);

  const submitHandler = e => {
    e.preventDefault();

    const newContactName = e.target.elements.name.value;
    const newContactNumber = e.target.elements.number.value;

    if (contactСheck(newContactName)) {
      alert(`${newContactName} is already in you contacts`);
      return;
    }

    const newContact = {
      name: newContactName,
      number: newContactNumber,
    };

    addNewContact(newContact);

    e.target.reset();
  };

  function addNewContact(newContact) {
    dispatch(createContact(newContact));
  }

  function contactСheck(name) {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  }

  return (
    <form name="contact_form" onSubmit={submitHandler} className={s.form}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. 
            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="John Smith"
          className={s.input}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="226-48-26"
          className={s.input}
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
