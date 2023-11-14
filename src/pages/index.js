import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PropTypes from 'prop-types';
import RootLayout from '@/layouts/RootLayout';
import Hero from '@/components/Hero';
import GoogleMap from '@/components/GoogleMap/GoogleMap';
import AboutUs from '@/components/AboutUs/AboutUs';
import FAQ from '@/components/FAQ';
import { HeroTypes } from '@/components/Hero/Hero';
import Documents from '@/components/Documents';
import FormComponent from '@/components/FormComponent/FormComponent';
import { HeaderTypes } from '@/components/Header/Header';
import Discount from '@/components/Discount/Discount';
import StrAPIService from '@/global/services/strapiService';
import Prices from '@/components/Prices';

const Home = ({ promotions, prices }) => (
  <RootLayout headerType={HeaderTypes.DARK}>
    <Hero heroType={HeroTypes.PRIMARY} />
    {promotions && <Discount discounts={promotions.attributes.promotion_items.data} />}
    {prices && <Prices prices={prices} />}
    <Documents />
    <AboutUs />
    <GoogleMap />
    <FAQ />
    <FormComponent />
  </RootLayout>
);

export default Home;

export async function getServerSideProps({ locale }) {
  const data = await StrAPIService.getPromotions(locale);
  const priceData = await StrAPIService.getAllCitiesPrices();
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      promotions: data,
      prices: priceData,
    },
  };
}

Home.propTypes = {
  promotions: PropTypes.shape({
    attributes: PropTypes.shape({
      promotion_items: PropTypes.shape({
        // eslint-disable-next-line react/forbid-prop-types
        data: Discount.propTypes.discounts,
      }),
    }),
  }),
  // eslint-disable-next-line react/forbid-prop-types
  prices: PropTypes.any,
};

Home.defaultProps = {
  promotions: null,
  prices: null,
};
