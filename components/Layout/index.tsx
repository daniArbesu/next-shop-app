import Head from 'next/head';
import { Footer } from './styles';

const Layout = ({
  children,
  title,
  description,
}: Props): React.ReactElement => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>

      <Footer>
        Hecho con <span role="image">💖</span> por{' '}
        <a
          href="https://github.com/daniArbesu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Daniel Arbesú
        </a>
      </Footer>
    </>
  );
};

export type Props = {
  children: React.ReactNode;
  description: string;
  title: string;
};

export default Layout;
