import Image from 'next/image';
import Header from '@/components/Header';
import AWorldInTransition from '@/components/AWorldInTransition';
import Overview from '@/components/Overview';
import Organised from '@/components/Organised';
export default function Home() {
  return (
    <div>
      <Header />
      <AWorldInTransition />
      <Overview />
      <Organised />
    </div>
  );
}
