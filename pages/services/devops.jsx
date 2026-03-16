import dynamic from 'next/dynamic';

const ServicesDevOps = dynamic(() => import('../../src/views/ServicesDevOps'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100vh' }} />,
});

export default function ServicesDevOpsPage() {
  return <ServicesDevOps />;
}
