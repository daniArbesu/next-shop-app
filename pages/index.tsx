import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

const TITLE = 'Dani | Next Phone Shop';

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={TITLE} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{TITLE}</h1>
      </main>

      <footer>
        Hecho con <span role="image">💖</span> por{' '}
        <a
          href="https://github.com/daniArbesu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Daniel Arbesú
        </a>
      </footer>
    </>
  );
}
