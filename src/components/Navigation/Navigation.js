import { NavLink } from 'react-router-dom';
import { Box, Flex, Link } from '@chakra-ui/react';

function Navigation() {
  return (
    <Box as="nav" mx="4" minW={180}>
      <Flex justify="space-between">
        <Link
          as={NavLink}
          to="/"
          color="rgb(161, 199, 255)"
          fontSize={20}
          fontWeight="bold"
          textShadow="1px 1px rgba(255, 255, 255, 0.1)"
          _activeLink={{ color: 'white' }}
        >
          Home
        </Link>

        <Link
          as={NavLink}
          to="contacts"
          color="rgb(161, 199, 255)"
          fontSize={20}
          fontWeight="bold"
          textShadow="1px 1px rgba(255, 255, 255, 0.1)"
          _activeLink={{ color: 'white' }}
        >
          Contacts
        </Link>
      </Flex>
    </Box>
  );
}

export default Navigation;
