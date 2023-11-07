import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import RootLayout from '@/layouts/RootLayout';
import Hero from '@/components/Hero';
import GoogleMap from '@/components/GoogleMap/GoogleMap';
import AboutUs from '@/components/AboutUs/AboutUs';
import FAQ from '@/components/FAQ';
import { HeroTypes } from '@/components/Hero/Hero';
import Footer from "@/components/Footer";
import FormComponent from '@/components/FormComponent/FormComponent';

const Home = () => {
  const { locale } = useRouter();
  console.log(locale);

  return (
    <RootLayout>
      <Hero heroType={HeroTypes.PRIMARY} />
      <AboutUs />
      <GoogleMap activeBranch="dnipro" />
      <FAQ />
      <FormComponent />
      <Footer/>
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
