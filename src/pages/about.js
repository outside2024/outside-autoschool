import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RootLayout from '@/layouts/RootLayout';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs/AboutUs';
import { HeroTypes } from '@/components/Hero/Hero';
import Gallery from '@/components/Gallery/Gallery';
import FormComponent from '@/components/FormComponent/FormComponent';
import Awards from '@/components/Awards/Awards';
import HeroDescription from '@/components/HeroDescription';
import { HeaderTypes } from '@/components/Header/Header';

const About = () => (
  <RootLayout headerType={HeaderTypes.DARK}>
    <Hero heroType={HeroTypes.TERTIARY} />
    <HeroDescription />
    <Awards />
    <AboutUs />
    <Gallery />
    <FormComponent />
  </RootLayout>
);

export default About;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
