import type { AppProps } from 'next/app';

import { Header } from '@/components/common/header/Header';
import { Footer } from '@/components/common/footer/Footer';

import '@/styles/globals.scss';
import styles from '@/styles/index.module.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
