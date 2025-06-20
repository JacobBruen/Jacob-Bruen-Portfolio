import {
  Box,
  Flex,
  Button,
  Heading,
  Text,
  Stack,
  Container,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Box bg="gray.900" color="white" minH="100vh">
        {/* NAVBAR */}
        <Flex
          as="nav"
          bg="gray.800"
          p={4}
          justify="center"
          gap={6}
          boxShadow="md"
        >
          <Button as={Link} to="/" variant="ghost" colorScheme="teal">
            Home
          </Button>
          <Button as={Link} to="/About" variant="ghost" colorScheme="teal">
            About
          </Button>
          <Button as={Link} to="/Projects" variant="ghost" colorScheme="teal">
            Projects
          </Button>
        </Flex>

        {/* PAGE ROUTES */}
        <Box p={6}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </Box>

        {/* FOOTER */}
        <Box textAlign="center" py={6} mt={12} borderTop="1px solid #2D3748">
          <Text fontSize="sm" color="gray.500">
            © {new Date().getFullYear()} Jacob Bruen. All rights reserved.
          </Text>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
