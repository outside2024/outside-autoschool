import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RootLayout from '@/layouts/RootLayout';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs/AboutUs';
import { HeroTypes } from '@/components/Hero/Hero';

const About = () => (
  <RootLayout>
    <Hero heroType={HeroTypes.TERTIARY} />
    <AboutUs />
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
