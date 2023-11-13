import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PropTypes from 'prop-types';
import RootLayout from '@/layouts/RootLayout';
import HeroSecondary from '@/components/HeroSecondary';
import FormComponent from '@/components/FormComponent/FormComponent';
import { HeaderTypes } from '@/components/Header/Header';
import StrAPIService from '@/global/services/strapiService';
import Prices from '@/components/Prices';

const Tests = ({ prices }) => (
  <RootLayout headerType={HeaderTypes.LIGHT}>
    <HeroSecondary />
    {prices && <Prices prices={prices} />}
    <FormComponent />
  </RootLayout>
);
export default Tests;

export async function getServerSideProps({ locale }) {
  const priceData = await StrAPIService.getAllCitiesPrices();
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      prices: priceData,
    },
  };
}

Tests.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  prices: PropTypes.any,
};

Tests.defaultProps = {
  prices: null,
};
