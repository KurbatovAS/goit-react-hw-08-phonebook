import { useSelector } from 'react-redux';
import { UnorderedList } from '@chakra-ui/react';

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
    <UnorderedList
      listStyleType="none"
      color="#1967d2"
      fontSize="md"
      fontWeight="bold"
    >
      {contactsFiltering().map(contact => {
        return <ContactItems key={contact.id} contact={contact} />;
      })}
    </UnorderedList>
  );
}

export default ContactList;
