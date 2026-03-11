import dynamic from 'next/dynamic';

const Benefits = dynamic(() => import('../src/views/Benefits'), { ssr: false });

export default function BenefitsPage() {
  return <Benefits variant="light" />;
}
