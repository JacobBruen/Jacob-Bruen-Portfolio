import { Box, Heading, Text, Stack } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box
      textAlign="center"
      w="100%"
      flex="1"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4} // 👈 prevent text from overflowing on small screens
    >
      <Stack spacing={6}>
        <Heading fontSize="4xl">Jacob Bruen</Heading>
        <Text fontSize="xl" color="gray.300" textAlign="center">
          Aspiring Game Designer • Software Developer • Problem Solver
        </Text>
      </Stack>
    </Box>
  );
}
