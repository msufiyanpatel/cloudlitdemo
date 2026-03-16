import dynamic from 'next/dynamic';

const About = dynamic(() => import('../src/views/About1'), { ssr: false });

export default function AboutPage() {
  return <About />;
}
