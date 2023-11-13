import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RootLayout from '@/layouts/RootLayout';
import BranchesGallery from '@/components/BranchesGallery/BranchesGallery';
import { cities } from '@/global/constants/branchesData';
import FormComponent from '@/components/FormComponent';
import AboutUs from '@/components/AboutUs/AboutUs';
import HeroSecondary from '@/components/HeroSecondary';
import { HeaderTypes } from '@/components/Header/Header';
import GoogleMap from '@/components/GoogleMap/GoogleMap';

const Branch = ({ cityData }) => (
  <RootLayout headerType={HeaderTypes.LIGHT}>
    <HeroSecondary city={cityData} />
    <GoogleMap activeBranch={cityData.city} />
    <BranchesGallery data={cityData} />
    <AboutUs />
    <FormComponent />
  </RootLayout>
);

export default Branch;

export async function getServerSideProps({ locale, params }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      cityData: cities[params.branch],
    },
  };
}
