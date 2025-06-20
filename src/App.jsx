import {
  Box,
  Flex,
  Button,
  Text,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Socials from './pages/Socials';

function Navbar() {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/About', label: 'About' },
    { path: '/Projects', label: 'Projects' },
    { path: '/Socials', label: 'Contact' },
  ];

  return (
    <Flex
      as="nav"
      bg="gray.800"
      p={4}
      justify="center"
      gap={6}
      boxShadow="md"
      userSelect="none"
    >
      {links.map(({ path, label }) => (
        <Button
          key={path}
          as={Link}
          to={path}
          variant="ghost"
          colorScheme="teal"
          bg={location.pathname === path ? 'teal.700' : 'transparent'}
          _hover={{ bg: 'teal.600' }}
        >
          {label}
        </Button>
      ))}
    </Flex>
  );
}

function App() {
  return (
    <Router>
      <Flex
        direction="column"
        minH="100vh"
        bg="gray.900"
        color="white"
      >
        <Navbar />

        {/* Page content fills remaining height */}
        <Flex flex="1" align="center" justify="center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Socials" element={<Socials />} />
          </Routes>
        </Flex>

        <Box textAlign="center" py={6} borderTop="1px solid #2D3748">
          <Text fontSize="sm" color="gray.500">
            © {new Date().getFullYear()} Jacob Bruen. All rights reserved.
          </Text>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;
