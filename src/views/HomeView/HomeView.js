import { Heading, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <main>
      <Heading size="xl" align="center">
        PHONEBOOK
      </Heading>
      {isLoggedIn ? (
        <Text fontSize="3xl" align="center">
          Thank's for using our service.
        </Text>
      ) : (
        <Text fontSize="4xl" align="center">
          For using your phonebook you need to Login.
        </Text>
      )}
    </main>
  );
}

export default HomeView;
