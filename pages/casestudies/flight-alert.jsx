import dynamic from 'next/dynamic';

const CaseStudyFlightAlert = dynamic(() => import('../../src/views/CaseStudyFlightAlert'), { ssr: false });

export default function FlightAlertPage() {
  return <CaseStudyFlightAlert />;
}
