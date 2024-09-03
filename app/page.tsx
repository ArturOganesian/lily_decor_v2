import Banner from '@/app/components/Banner/index';
import Features from '@/app/components/Work/index';
import Cook from '@/app/components/Cook/index';
import  Contact from '@/app/components/Contact/index';
import Gallery from '@/app/components/Gallery/index';
import Newsletter from '@/app/components/Newsletter/Newsletter';



export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <Cook />
      <Contact />
      <Gallery />
      <Newsletter />
    </main>
  )
}
