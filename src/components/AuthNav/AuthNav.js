import { Flex, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

function AuthNav() {
  return (
    <Flex gap="10">
      <Link
        as={NavLink}
        to="register"
        color="rgb(161, 199, 255)"
        fontSize={20}
        fontWeight="bold"
        textShadow="1px 1px rgba(255, 255, 255, 0.1)"
        _activeLink={{ color: 'white' }}
      >
        Register
      </Link>
      <Link
        as={NavLink}
        to="login"
        color="rgb(161, 199, 255)"
        fontSize={20}
        fontWeight="bold"
        textShadow="1px 1px rgba(255, 255, 255, 0.1)"
        _activeLink={{ color: 'white' }}
      >
        Login
      </Link>
    </Flex>
  );
}

export default AuthNav;
