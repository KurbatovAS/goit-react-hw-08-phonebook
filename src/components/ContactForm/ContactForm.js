import { useSelector, useDispatch } from 'react-redux';
import {
  Stack,
  InputGroup,
  Input,
  InputLeftElement,
  Button,
} from '@chakra-ui/react';
import { Icon, PhoneIcon } from '@chakra-ui/icons';
import { BsPerson } from 'react-icons/bs';
import { createContact } from 'redux/contacts/slice';

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
    <form name="contact_form" onSubmit={submitHandler}>
      <Stack w="400px" mx="auto" my="6" spacing={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={BsPerson} color="gray.300" />}
          />
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. 
            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="John Smith"
          />
        </InputGroup>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<PhoneIcon color="gray.300" />}
          />
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="226-48-26"
          />
        </InputGroup>

        <Button type="submit" colorScheme="blue">
          Add contact
        </Button>
      </Stack>
    </form>
  );
}

export default ContactForm;
