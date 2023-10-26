import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RootLayout from '@/layouts/RootLayout';
import { useRouter } from 'next/router';
import Hero from '@/components/Hero';

export default function Home() {
  const { locale } = useRouter();
  console.log(locale);

  return (
    <RootLayout>
      <Hero />
    </RootLayout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 60,
  };
}
