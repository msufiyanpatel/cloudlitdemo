import dynamic from 'next/dynamic';

const ServicesTeams = dynamic(() => import('../../src/views/ServicesTeams'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100vh' }} />,
});

export default function ServicesTeamsPage() {
  return <ServicesTeams />;
}
