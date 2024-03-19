import Image from 'next/image';
import Header from '@/components/Header';
import AWorldInTransition from '@/components/AWorldInTransition';
export default function Home() {
  return (
    <div>
      <Header />
      <AWorldInTransition />
    </div>
  );
}
