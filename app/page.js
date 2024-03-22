import Image from 'next/image';
import Header from '@/components/Header';
import AWorldInTransition from '@/components/AWorldInTransition';
import Footer from '@/components/Footer';
import Overview from '@/components/Overview';
import companyPitches from '@/components/companyPitches';
import Organised from '@/components/Organisedby';
import Imae from '@/components/Image';
import Company from '@/components/companyPitches';
export default function Home() {
  return (
    <div>
      <Header />
      <AWorldInTransition />
      <Overview />
      <Organised />
      <Imae />
      <Company />
      <Footer />
    </div>
  );
}
