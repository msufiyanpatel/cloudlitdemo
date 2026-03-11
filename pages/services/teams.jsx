import dynamic from 'next/dynamic';

const ServicesTeams = dynamic(() => import('../../src/views/ServicesTeams'), { ssr: false });

export default function ServicesTeamsPage() {
  return <ServicesTeams />;
}
