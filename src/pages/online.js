import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RootLayout from '@/layouts/RootLayout';
import Hero from '@/components/Hero';
import HowToGetStarted from '@/components/HowToGetStarted';
import { HeroTypes } from '@/components/Hero/Hero';

const Online = () => (
  <RootLayout>
    <Hero heroType={HeroTypes.SECONDARY} />
    <HowToGetStarted />
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
