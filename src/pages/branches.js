import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RootLayout from '@/layouts/RootLayout';
import BranchesGallery from '@/components/BranchesGallery/BranchesGallery';
import { cities } from '../components/BranchesGallery/constants';
import FormComponent from '@/components/FormComponent';
import AboutUs from '@/components/AboutUs/AboutUs';
import HeroSecondary from '@/components/HeroSecondary';

const Branches = () => (
  <RootLayout>
    <HeroSecondary city={cities.sovhozna} />
    <BranchesGallery data={cities.sovhozna} />
    <AboutUs />
    <FormComponent />
  </RootLayout>
);

export default Branches;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 60,
  };
}
