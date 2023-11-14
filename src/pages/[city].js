import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PropTypes from 'prop-types';
import RootLayout from '@/layouts/RootLayout';
import BranchesGallery from '@/components/BranchesGallery/BranchesGallery';
import { cities } from '@/global/constants/branchesData';
import FormComponent from '@/components/FormComponent';
import AboutUs from '@/components/AboutUs/AboutUs';
import HeroSecondary from '@/components/HeroSecondary';
import { HeaderTypes } from '@/components/Header/Header';
import GoogleMap from '@/components/GoogleMap/GoogleMap';
import StrAPIService from '@/global/services/strapiService';
import Prices from '@/components/Prices';
import { routsBranches } from '@/global/constants/routes';

const City = ({ cityData, city, prices }) => (
  <RootLayout headerType={HeaderTypes.LIGHT}>
    <HeroSecondary city={cityData} />
    {prices?.[city] && <Prices prices={prices} city={city} />}
    <GoogleMap activeBranch={cityData.city} />
    <BranchesGallery data={cityData} />
    <AboutUs />
    <FormComponent />
  </RootLayout>
);

export default City;

export async function getStaticPaths() {
  return {
    paths: routsBranches.map((page) => `${page.path}`) || [],
    fallback: false,
  };
}

export async function getStaticProps({ locale, params }) {
  try {
    const priceData = await StrAPIService.getAllCitiesPrices();
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
        cityData: cities[params.city],
        prices: priceData,
        city: params.city,
      },
    };
  } catch (err) {
    return {
      props: { ...(await serverSideTranslations(locale, ['common'])) },
      notFound: true,
      revalidate: 30,
    };
  }
}

City.propTypes = {
  city: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  cityData: PropTypes.any.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  prices: PropTypes.any,
};

City.defaultProps = {
  prices: null,
};
