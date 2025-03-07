import '../styles/globals.css';
import { useEffect } from "react";
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "harrypotter");
  }, []);
  return (
    <Layout session={session}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
