import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Stack,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { Icon, EmailIcon } from '@chakra-ui/icons';
import { BsPerson } from 'react-icons/bs';
import { authOperations } from 'redux/auth';

function RegisterView() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => setShow(!show);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Stack w="400px" mx="auto" my="6" spacing={4}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={BsPerson} color="gray.300" />}
            />
            <Input
              type="text"
              name="name"
              required
              value={name}
              onChange={handleChange}
              placeholder="John Smith"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              mb="3"
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.300" />}
            />
            <Input
              type="email"
              name="email"
              required
              value={email}
              onChange={handleChange}
              placeholder="Email"
            />
          </InputGroup>

          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              name="password"
              required
              value={password}
              onChange={handleChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button type="submit" colorScheme="blue">
            Register
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default RegisterView;
