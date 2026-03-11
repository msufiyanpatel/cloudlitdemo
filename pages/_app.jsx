import '../src/App.css';
import '../src/styles/Navbar.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
