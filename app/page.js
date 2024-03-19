import Image from 'next/image';
import Header from '@/components/Header';
import AWorldInTransition from '@/components/AWorldInTransition';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <div>
      <Header />
      <AWorldInTransition />
      <div className="h-60"></div>
      <Footer />
    </div>
  );
}
