import { Heading, SimpleGrid, Box, Text } from '@chakra-ui/react';

const Projects = () => {
  return (
    <Box>
      <Heading mb={4}>Projects</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        <Box p={4} bg="gray.100" rounded="md" shadow="md">
          <Text fontWeight="bold">Chasing Light</Text>
          <Text>A rage-platformer game with a deep narrative and environmental storytelling.</Text>
        </Box>
        {/* Add more projects similarly */}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
