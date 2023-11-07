import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RootLayout from '@/layouts/RootLayout';
import HeroSecondary from '@/components/HeroSecondary';
import FormComponent from '@/components/FormComponent/FormComponent';

const Tests = () => (
  <RootLayout>
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
