import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Section from './Section/Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import Notitfication from './Notitfication';
import ContactList from './ContactList';
import { fetchContacts } from 'redux/contacts/slice';

function App() {
  const dispatch = useDispatch();

  const { contactsList, status, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        {status === 'loading' && <h2>Loading...</h2>}
        {error !== 'null' && <h2>An error occured: {error}</h2>}

        {!contactsList.length ? (
          <Notitfication message="There is no contacts in you contact list" />
        ) : (
          <ContactList />
        )}
      </Section>
    </>
  );
}

export default App;
