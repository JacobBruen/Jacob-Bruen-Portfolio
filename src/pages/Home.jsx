import { Box, Heading, Text, Stack } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box
      textAlign="center"
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Stack spacing={6}>
        <Heading fontSize="4xl">Jacob Bruen</Heading>
        <Text fontSize="xl" color="gray.300">
          Aspiring Game Designer • Software Developer • Problem Solver
        </Text>
      </Stack>
    </Box>
  );
}
