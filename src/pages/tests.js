import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RootLayout from '@/layouts/RootLayout';
import HeroSecondary from '@/components/HeroSecondary';

const Tests = () => (
  <RootLayout>
    <HeroSecondary />
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
