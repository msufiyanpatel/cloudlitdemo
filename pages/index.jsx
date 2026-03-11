import dynamic from 'next/dynamic';

const Home = dynamic(() => import('../src/views/Home'), { ssr: false });
const HomeServices = dynamic(() => import('../src/views/HomeServices'), { ssr: false });
const Benefits = dynamic(() => import('../src/views/Benefits'), { ssr: false });
const Locations = dynamic(() => import('../src/views/Locations'), { ssr: false });
const Roadmap = dynamic(() => import('../src/views/Roadmap'), { ssr: false });

export default function IndexPage() {
  return (
    <>
      <Home />
      <HomeServices />
      <Benefits />
      <Locations />
      <Roadmap />
    </>
  );
}
