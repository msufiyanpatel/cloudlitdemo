import dynamic from 'next/dynamic';

const ServicesProvision = dynamic(() => import('../../src/views/ServicesProvision'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100vh' }} />,
});

export default function ServicesProvisionPage() {
  return <ServicesProvision />;
}
