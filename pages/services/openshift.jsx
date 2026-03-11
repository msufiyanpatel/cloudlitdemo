import dynamic from 'next/dynamic';

const ServicesOpenShift = dynamic(() => import('../../src/views/ServicesOpenShift'), { ssr: false });

export default function ServicesOpenShiftPage() {
  return <ServicesOpenShift />;
}
