import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Box, Flex, Button } from '@chakra-ui/react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Box bg="gray.800" color="white" px={4} py={3}>
        <Flex as="nav" gap="4" justify="center">
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
      </Box>

      <Box p={6}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
