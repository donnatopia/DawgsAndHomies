import React from 'react';
import { useFilter } from '../../../contexts/FilterContext.jsx';
import { BsSortDownAlt, BsSortDown } from 'react-icons/bs';
import { Button } from '@chakra-ui/react';

const Sort = () => {
  const { sortDesc, setSortDesc, setCurr } = useFilter();

  const handleClick = (e) => {
    e.preventDefault();
    setCurr(0);
    setSortDesc(!sortDesc);
  };

  return (
    <Button
      leftIcon={sortDesc ? <BsSortDown /> : <BsSortDownAlt />}
      onClick={handleClick}
      colorScheme="teal"
    ></Button>
  );
};

export default Sort;
