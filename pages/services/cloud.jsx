import dynamic from 'next/dynamic';

const ServicesCloud = dynamic(() => import('../../src/views/ServicesCloud'), { ssr: false });

export default function ServicesCloudPage() {
  return <ServicesCloud />;
}
