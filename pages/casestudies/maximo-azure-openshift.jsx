import dynamic from 'next/dynamic';

const CaseStudyMaximo = dynamic(() => import('../../src/views/CaseStudyMaximo'), { ssr: false });

export default function MaximoPage() {
  return <CaseStudyMaximo />;
}
