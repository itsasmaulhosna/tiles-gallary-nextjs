import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import TilesCard from '@/components/shared/TilesCard';
import TilesGallary from '@/components/TilesGallary';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TilesGallary></TilesGallary>
      <Footer></Footer>
    </div>
  );
}
