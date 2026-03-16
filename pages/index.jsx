import Home from '../src/views/Home';
import HomeServices from '../src/views/HomeServices';
import Benefits from '../src/views/Benefits';
import Locations from '../src/views/Locations';
import Roadmap from '../src/views/Roadmap';

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
