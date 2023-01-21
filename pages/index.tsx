import Layout from '@/components/Layout';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

const TITLE = 'Dani | Next Phone Shop';

export default function Home() {
  return (
    <Layout title={TITLE} description={TITLE}>
      <h1>{TITLE}</h1>
    </Layout>
  );
}
