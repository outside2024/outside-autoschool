import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RootLayout from '@/layouts/RootLayout';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs/AboutUs';
import { HeroTypes } from '@/components/Hero/Hero';
import Gallery from '@/components/Gallery/Gallery';
import FormComponent from '@/components/FormComponent/FormComponent';

const About = () => (
  <RootLayout>
    <Hero heroType={HeroTypes.TERTIARY} />
    <AboutUs />
    <Gallery />
    <FormComponent />
  </RootLayout>
);

export default About;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 60,
  };
}
