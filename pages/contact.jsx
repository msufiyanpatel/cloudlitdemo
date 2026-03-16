import dynamic from 'next/dynamic';

const ChatForm = dynamic(() => import('../src/views/ChatForm'), { ssr: false });

export default function ContactPage() {
  return <ChatForm />;
}
