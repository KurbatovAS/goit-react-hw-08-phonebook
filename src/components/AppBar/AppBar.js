import { useSelector } from 'react-redux';
import { Box, Flex, Container } from '@chakra-ui/react';

import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import authSelectors from 'redux/auth/auth-selectors';

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Box
      as="header"
      borderRadius="lg"
      boxShadow="md"
      py={5}
      bg="#3f51b5"
      color="white"
    >
      <Container maxW="container.lg">
        <Flex justifyContent="space-between" alignItems="center">
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
      </Container>
    </Box>
  );
}

export default AppBar;
