import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const About = () => {
  return (
    <Box
      textAlign="center"
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={4}>
        <Heading>About Me</Heading>
        <Text color="gray.300" fontSize="lg">
          I'm Jacob Bruen, a Computer Science student passionate about game design and software development.
          My goal is to build immersive, meaningful games and help others learn along the way.
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
