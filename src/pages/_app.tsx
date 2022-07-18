import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { Header } from 'components/common/header/Header';
import { Footer } from 'components/common/footer/Footer';

import 'styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fallback: pageProps.fallback }}>
      <div className="container">
        <main className="main">
          <Header />
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </SWRConfig>
  );
};

export default MyApp;