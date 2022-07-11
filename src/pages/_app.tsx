import type { AppProps } from 'next/app';
import { Header } from 'components/common/header/Header';
import { Footer } from 'components/common/footer/Footer';

import '@/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container">
        <main className="main">
          <Header />
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
