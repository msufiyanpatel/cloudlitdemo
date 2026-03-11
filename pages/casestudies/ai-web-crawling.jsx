import dynamic from 'next/dynamic';

const CaseStudyAiWebCrawling = dynamic(() => import('../../src/views/CaseStudyAiWebCrawling'), { ssr: false });

export default function AiWebCrawlingPage() {
  return <CaseStudyAiWebCrawling />;
}
