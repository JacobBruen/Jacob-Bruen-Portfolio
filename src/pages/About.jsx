import { Box, Heading, Text, VStack, Link, Icon, HStack } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <Box
      textAlign="center"
      w="100%"
      flex="1"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      <VStack spacing={6}>
        <Heading>About Me</Heading>
        <Text fontSize="lg" color="gray.300" maxW="600px">
          I'm Jacob Bruen, a Computer Science student passionate about game design and software development.
          My goal is to build immersive, meaningful games and help others learn along the way.
        </Text>

        <HStack spacing={6}>
          <Link href="https://instagram.com/jacobrbruen" isExternal>
            <Icon as={FaInstagram} w={8} h={8} color="pink.400" />
          </Link>
          <Link href="https://www.linkedin.com/in/jacob-bruen-423851289/" isExternal>
            <Icon as={FaLinkedin} w={8} h={8} color="blue.500" />
          </Link>
          <Link href="mailto:Jrbruen18@gmail.com" isExternal>
            <Icon as={FaEnvelope} w={8} h={8} color="gray.300" />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default About;
