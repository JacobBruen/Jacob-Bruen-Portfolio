import { Heading, Text, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <VStack spacing={4} align="center">
      <Heading>Welcome to Jacob Bruen's Portfolio</Heading>
      <Text fontSize="lg">Explore my projects and learn more about me below.</Text>
    </VStack>
  );
}
