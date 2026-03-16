import dynamic from 'next/dynamic';
import HomeServices from '../src/views/HomeServices';
import Benefits from '../src/views/Benefits';
import Locations from '../src/views/Locations';

const Home = dynamic(() => import('../src/views/Home'), { ssr: false });
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
