import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PropTypes from 'prop-types';
import RootLayout from '@/layouts/RootLayout';
import Hero from '@/components/Hero';
import HowToGetStarted from '@/components/HowToGetStarted';
import { HeroTypes } from '@/components/Hero/Hero';
import FormComponent from '@/components/FormComponent';
import { HeaderTypes } from '@/components/Header/Header';
import StrAPIService from '@/global/services/strapiService';
import Prices from '@/components/Prices';

const Online = ({ prices }) => (
  <RootLayout headerType={HeaderTypes.DARK}>
    <Hero heroType={HeroTypes.SECONDARY} />
    <HowToGetStarted />
    {prices && <Prices prices={prices} />}
    <FormComponent />
  </RootLayout>
);
export default Online;

export async function getServerSideProps({ locale }) {
  const priceData = await StrAPIService.getAllCitiesPrices();
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      prices: priceData,
    },
  };
}

Online.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  prices: PropTypes.any,
};

Online.defaultProps = {
  prices: null,
};
