import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RootLayout from '@/layouts/RootLayout';
import BranchesGallery from '@/components/BranchesGallery/BranchesGallery';

const Branches = () => (
  <RootLayout>
    <BranchesGallery />
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
