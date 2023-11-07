import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RootLayout from '@/layouts/RootLayout';
import Hero from '@/components/Hero';
import HowToGetStarted from '@/components/HowToGetStarted';
import { HeroTypes } from '@/components/Hero/Hero';
import Footer from '@/components/Footer';
import FormComponent from '@/components/FormComponent';

const Online = () => (
  <RootLayout>
    <Hero heroType={HeroTypes.SECONDARY} />
    <HowToGetStarted />
    <FormComponent />
    <Footer />
  </RootLayout>
);
export default Online;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 60,
  };
}
