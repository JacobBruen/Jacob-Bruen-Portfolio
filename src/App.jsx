import { Box, Heading, Text } from '@chakra-ui/react';

export default function App() {
  return (
    <Box bg="gray.800" color="white" minH="100vh" p={6}>
      <Heading>🔥 Chakra UI Working!</Heading>
      <Text fontSize="lg">If you see this, it's finally fixed.</Text>
    </Box>
  );
}
