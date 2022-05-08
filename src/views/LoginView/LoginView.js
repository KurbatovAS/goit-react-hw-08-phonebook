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
import { EmailIcon } from '@chakra-ui/icons';
import { authOperations } from 'redux/auth';

function LoginView() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => setShow(!show);

  function handleChange({ target: { name, value } }) {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  }

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Stack w="400px" mx="auto" my="6" spacing={4}>
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
            Login
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default LoginView;
