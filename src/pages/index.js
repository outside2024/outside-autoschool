import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import RootLayout from '@/layouts/RootLayout';
import Hero from '@/components/Hero';
import AboutUs from "@/components/AboutUs/AboutUs";

const Home = () => {
  const { locale } = useRouter();
  console.log(locale);

  return (
    <RootLayout>
      <Hero />
      <AboutUs/>
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
