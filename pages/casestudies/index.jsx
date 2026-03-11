import dynamic from 'next/dynamic';

const CaseStudiesPage = dynamic(() => import('../../src/views/CaseStudiesPage'), { ssr: false });

export default function CaseStudiesIndexPage() {
  return <CaseStudiesPage />;
}
