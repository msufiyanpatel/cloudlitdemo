import dynamic from 'next/dynamic';

const ServicesOpenShift = dynamic(() => import('../../src/views/ServicesOpenShift'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100vh' }} />,
});

export default function ServicesOpenShiftPage() {
  return <ServicesOpenShift />;
}
