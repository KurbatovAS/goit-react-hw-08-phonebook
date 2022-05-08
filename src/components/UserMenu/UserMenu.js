import { useDispatch, useSelector } from 'react-redux';
import { Flex, Text, Button } from '@chakra-ui/react';
import { AtSignIcon } from '@chakra-ui/icons';
import { authSelectors, authOperations } from 'redux/auth';

function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <>
      <Flex justifyContent="end" alignItems="center">
        <AtSignIcon w={6} h={6} mr="2" />
        <Text mr="10">{email}</Text>
        <Button
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
          colorScheme="blue"
        >
          Log out
        </Button>
      </Flex>
    </>
  );
}

export default UserMenu;
