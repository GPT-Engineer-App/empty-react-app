import React, { useEffect, useState } from "react";
import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { fetchBreeds } from "../api";

const DogDirectory = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const getBreeds = async () => {
      const breedsData = await fetchBreeds();
      setBreeds(breedsData);
    };
    getBreeds();
  }, []);

  return (
    <Box>
      <Heading as="h1" size="xl" textAlign="center" my={8}>
        Dog Breed Directory
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {breeds.map((breed) => (
          <Box key={breed.id} borderWidth={1} borderRadius="lg" p={4}>
            <Image src={breed.image.url} alt={breed.name} objectFit="cover" />
            <Heading as="h2" size="lg" mt={4}>
              {breed.name}
            </Heading>
            <Text mt={2}>
              <strong>Temperament:</strong> {breed.temperament}
            </Text>
            <Text>
              <strong>Life Span:</strong> {breed.life_span}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default DogDirectory;
