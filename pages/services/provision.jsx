import dynamic from 'next/dynamic';

const ServicesProvision = dynamic(() => import('../../src/views/ServicesProvision'), { ssr: false });

export default function ServicesProvisionPage() {
  return <ServicesProvision />;
}
