import dynamic from 'next/dynamic';

const ServicesDevOps = dynamic(() => import('../../src/views/ServicesDevOps'), { ssr: false });

export default function ServicesDevOpsPage() {
  return <ServicesDevOps />;
}
