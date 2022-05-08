import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Flex, Button } from '@chakra-ui/react';

import { deleteContact } from 'redux/contacts/slice';

function ContactItems({ contact }) {
  const dispatch = useDispatch();

  const { id, name, number } = contact;

  return (
    <li>
      <Flex
        justifyContent="space-between"
        w="400px"
        m="auto"
        alignItems="center"
        py="1"
        px="2"
        borderRadius="25"
        _hover={{
          background: 'rgb(228, 228, 228)',
          color: '#183e74',
        }}
      >
        {name}: {number}
        <Button
          type="button"
          name={name}
          py="1"
          px="5"
          borderRadius="25"
          bg="white"
          borderWidth="2px"
          borderStyle="solid"
          transition="all 250ms cubic-bezier(0.4, 0, 0.2, 1)"
          _hover={{
            background: '#d6e0ec',

            // transform: scale(1.1),
            color: 'white',
          }}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </Button>
      </Flex>
    </li>
  );
}

ContactItems.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItems;
