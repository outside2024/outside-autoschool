import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import RootLayout from '@/layouts/RootLayout';
import Hero from '@/components/Hero';
import GoogleMap from '@/components/GoogleMap/GoogleMap';
import AboutUs from '@/components/AboutUs/AboutUs';
import FAQ from '@/components/FAQ';
import { HeroTypes } from '@/components/Hero/Hero';
import Documents from '@/components/Documents';
import FormComponent from '@/components/FormComponent/FormComponent';
import { HeaderTypes } from '@/components/Header/Header';
import StrAPIService from '@/global/services/strapiService';

const Home = ({ promotions }) => {
  const { locale } = useRouter();

  return (
    <RootLayout headerType={HeaderTypes.DARK}>
      <Hero heroType={HeroTypes.PRIMARY} />
      <Documents />
      <AboutUs />
      <GoogleMap activeBranch="dnipro" />
      <FAQ />
      <FormComponent />
    </RootLayout>
  );
};

export default Home;

export async function getServerSideProps({ locale }) {
  const data = await StrAPIService.getPromotions(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      promotions: data,
    },
  };
}
