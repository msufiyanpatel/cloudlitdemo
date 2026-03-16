import dynamic from 'next/dynamic';

const Roadmap = dynamic(() => import('../src/views/Roadmap'), { ssr: false });

export default function RoadmapPage() {
  return <Roadmap />;
}
