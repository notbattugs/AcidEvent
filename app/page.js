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
    <div className="fixed top-0 w-screen h-screen overflow-y-scroll overflow-x-none">
      <Header />
      <AWorldInTransition />
      <Overview />
      <div className="w-screen h-20 bg-gradient-to-b from-slate-50 to-bg[#000]"></div>
      <Organised />
      <Imae />
      <Company />
      <Footer />
    </div>
  );
}
