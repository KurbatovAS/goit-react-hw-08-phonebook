import { useSelector, useDispatch } from 'react-redux';
import { Stack, InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { BsPerson } from 'react-icons/bs';

import { set } from 'redux/filter/slice';

function Filter() {
  const dispatch = useDispatch();
  const Filter = useSelector(state => state.Filter);

  const onFilterInputHandler = e => {
    dispatch(set(e.target.value.toLowerCase()));
  };

  return (
    <Stack w="400px" mx="auto" my="6" spacing={4}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={BsPerson} color="gray.300" />}
        />
        <Input
          type="text"
          name="filter"
          required
          value={Filter}
          onInput={onFilterInputHandler}
          placeholder="Find contacts by name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </InputGroup>
    </Stack>
  );
}

export default Filter;
