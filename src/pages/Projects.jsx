import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Container,
  VStack,
  Link,
} from '@chakra-ui/react';

const projects = [
  {
    title: 'Chasing Light',
    description: 'A 2D platformer game where a miner climbs back to the surface.',
    link: '#',
  },
  {
    title: 'CPU Scheduling Simulator',
    description: 'A GUI tool to visualize different CPU scheduling algorithms.',
    link: '#',
  },
  {
    title: 'Wildfire Relief DB',
    description: 'MySQL system for tracking wildfire relief data.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <Container maxW="6xl" py={10}>
      <Heading mb={6} textAlign="center">
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {projects.map((proj, idx) => (
          <Box
            key={idx}
            p={6}
            borderWidth="1px"
            borderRadius="xl"
            bg="gray.800"
            boxShadow="lg"
          >
            <VStack align="start" spacing={3}>
              <Heading fontSize="xl">{proj.title}</Heading>
              <Text color="gray.300">{proj.description}</Text>
              <Link href={proj.link} color="teal.300" isExternal>
                View Project →
              </Link>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
