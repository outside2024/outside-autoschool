import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import RootLayout from '@/layouts/RootLayout';
import Hero from '@/components/Hero';
import HowToGetStarted from '@/components/HowToGetStarted';
import AboutUs from '@/components/AboutUs/AboutUs';
import { HeroTypes } from '@/components/Hero/Hero';

const Online = () => {
  const { locale } = useRouter();
  console.log(locale);

  return (
    <RootLayout>
      <Hero heroType={HeroTypes.SECONDARY} />
      <HowToGetStarted />
    </RootLayout>
  );
};

export default Online;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 60,
  };
}
