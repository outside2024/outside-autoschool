import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RootLayout from '@/layouts/RootLayout';
import BranchesGallery from '@/components/BranchesGallery/BranchesGallery';
import { data } from '../components/BranchesGallery/constants';

const Branches = () => (
  <RootLayout>
    <BranchesGallery data={data} />
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
