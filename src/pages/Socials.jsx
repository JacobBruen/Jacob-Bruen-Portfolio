import { Box, Heading, VStack, Link, Icon, Text } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Socials = () => {
  return (
    <Box
      textAlign="center"
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={8}>
        <Heading>Contact & Socials</Heading>

        <Link href="https://instagram.com/your_instagram" isExternal>
          <VStack>
            <Icon as={FaInstagram} w={10} h={10} color="pink.400" />
            <Text>Instagram</Text>
          </VStack>
        </Link>

        <Link href="https://linkedin.com/in/your_linkedin" isExternal>
          <VStack>
            <Icon as={FaLinkedin} w={10} h={10} color="blue.500" />
            <Text>LinkedIn</Text>
          </VStack>
        </Link>

        <Link href="mailto:your.email@example.com" isExternal>
          <VStack>
            <Icon as={FaEnvelope} w={10} h={10} color="gray.300" />
            <Text>Email Me</Text>
          </VStack>
        </Link>
      </VStack>
    </Box>
  );
};

export default Socials;
