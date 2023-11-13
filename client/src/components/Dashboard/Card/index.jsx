import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Heading,
  Text,
  Image,
  Flex,
  Box,
  Icon,
} from '@chakra-ui/react';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { useMatch } from '../../../contexts/MatchContext.jsx';

const Dog = ({ dog, likeDisabled }) => {
  const { id, img, name, age, zip_code, breed } = dog;
  const { matchedDogs, setMatchedDogs } = useMatch();
  const [isLiked, setIsLiked] = useState(id in matchedDogs);

  const toggleLike = (e) => {
    e.preventDefault();
    const updatedDogs = matchedDogs;

    if (id in matchedDogs) {
      delete updatedDogs[id];
      setMatchedDogs(updatedDogs);
    } else {
      updatedDogs[id] = true;
      setMatchedDogs(updatedDogs);
    }

    setIsLiked(!isLiked);
  };

  const LikeButton = () => (
    <Icon
      as={isLiked ? GoHeartFill : GoHeart}
      boxSize={6}
      onClick={toggleLike}
      _hover={{ cursor: 'pointer' }}
    />
  );

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
        <Flex justify="space-between">
          <Box>
            <Text fontSize="xs" textTransform="uppercase">
              {age} years old
            </Text>
            <Text fontSize="xs" textTransform="uppercase">
              Located in {zip_code}
            </Text>
          </Box>
          {likeDisabled ? null : <LikeButton />}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Dog;
