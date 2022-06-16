import '../styles/globals.css'
import Navbar from '../components/navbar'
import Head from 'next/dist/shared/lib/head';
function MyApp({ Component, pageProps }) {
  return (
  <>
  
  <Navbar/>
  <Component {...pageProps} />
  </>)
}

export default MyApp;
