import dynamic from 'next/dynamic';

const ServicesCloud = dynamic(() => import('../../src/views/ServicesCloud'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100vh' }} />,
});

export default function ServicesCloudPage() {
  return <ServicesCloud />;
}
