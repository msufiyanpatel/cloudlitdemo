import dynamic from 'next/dynamic';

const ServicesMonitor = dynamic(() => import('../../src/views/ServicesMonitor'), { ssr: false });

export default function ServicesMonitorPage() {
  return <ServicesMonitor />;
}
