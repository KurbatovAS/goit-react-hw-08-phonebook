import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '@chakra-ui/react';
import { fetchContacts } from 'redux/contacts/slice';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContacList from 'components/ContactList';

function ContactsView() {
  const dispatch = useDispatch();

  const { contactsList, status } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <ContactForm />
      {contactsList.length >= 2 && <Filter />}
      {status === 'loading' && (
        <Text color="gray.500" my="auto" align="center">
          Loading...
        </Text>
      )}
      <ContacList />
    </main>
  );
}

export default ContactsView;
