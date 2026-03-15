import dynamic from 'next/dynamic';

const Home = dynamic(() => import('../src/views/Home'), {
  ssr: false,
  loading: () => null,
});
const HomeServices = dynamic(() => import('../src/views/HomeServices'), {
  ssr: false,
  loading: () => null,
});
const Benefits = dynamic(() => import('../src/views/Benefits'), {
  ssr: false,
  loading: () => null,
});
const Locations = dynamic(() => import('../src/views/Locations'), {
  ssr: false,
  loading: () => null,
});
const Roadmap = dynamic(() => import('../src/views/Roadmap'), {
  ssr: false,
  loading: () => null,
});

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
