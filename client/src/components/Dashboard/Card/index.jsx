import React from 'react';
import { Card, CardBody, Heading, Text, Image } from '@chakra-ui/react';

const Dog = ({ dog }) => {
  const { img, name, age, zip_code, breed } = dog;

  return (
    <Card>
      <CardBody>
        <Image
          src={img}
          boxSize="300px"
          objectFit="cover"
          borderRadius="20px"
        />
        <Heading fontSize="lg" pt="4" textTransform="uppercase">
          {name}
        </Heading>
        <Text py="2" fontSize="md" textTransform="uppercase">
          {breed}
        </Text>
        <Text fontSize="xs" textTransform="uppercase">
          {age} years old
        </Text>
        <Text fontSize="xs" textTransform="uppercase">
          Located in {zip_code}
        </Text>
      </CardBody>
    </Card>
  );
};

export default Dog;
