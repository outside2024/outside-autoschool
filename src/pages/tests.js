import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RootLayout from '@/layouts/RootLayout';
import HeroSecondary from '@/components/HeroSecondary';
import FormComponent from '@/components/FormComponent/FormComponent';
import { HeaderTypes } from '@/components/Header/Header';

const Tests = () => (
  <RootLayout headerType={HeaderTypes.LIGHT}>
    <HeroSecondary />
    <FormComponent />
  </RootLayout>
);
export default Tests;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 60,
  };
}
