import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import RootLayout from '@/layouts/RootLayout';
import Hero from '@/components/Hero';
import GoogleMap from '@/components/GoogleMap/GoogleMap';
import AboutUs from '@/components/AboutUs/AboutUs';
import FAQ from '@/components/FAQ';
import { HeroTypes } from '@/components/Hero/Hero';
import HowToGetStarted from '@/components/HowToGetStarted';
import Documents from '@/components/Documents';
import FormComponent from '@/components/FormComponent/FormComponent';

const Home = () => {
  const { locale } = useRouter();
  console.log(locale);

  return (
    <RootLayout>
      <Hero heroType={HeroTypes.PRIMARY} />
      <Documents />
      <HowToGetStarted />
      <AboutUs />
      <GoogleMap activeBranch="dnipro" />
      <FAQ />
      <FormComponent />
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
