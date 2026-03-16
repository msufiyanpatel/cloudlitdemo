import dynamic from 'next/dynamic';

const ServicesMonitor = dynamic(() => import('../../src/views/ServicesMonitor'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100vh' }} />,
});

export default function ServicesMonitorPage() {
  return <ServicesMonitor />;
}
