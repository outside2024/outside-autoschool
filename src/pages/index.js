import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import RootLayout from '@/layouts/RootLayout';
import Hero from '@/components/Hero';
import HowToGetStarted from '@/components/HowToGetStarted';
import AboutUs from '@/components/AboutUs/AboutUs';
import Gallery from '@/components/Gallery/Gallery';

const Home = () => {
  const { locale } = useRouter();
  console.log(locale);

  return (
    <RootLayout>
      <Hero />
      <HowToGetStarted />
      <AboutUs />
      <Gallery />
    </RootLayout>
  );
};

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 60,
  };
}
