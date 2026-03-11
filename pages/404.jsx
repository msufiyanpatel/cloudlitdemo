import dynamic from 'next/dynamic';

const NotFound = dynamic(() => import('../src/views/NotFound'), { ssr: false });

export default function NotFoundPage() {
  return <NotFound />;
}
