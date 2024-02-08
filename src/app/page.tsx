import Image from 'next/image';
import BackgroundFirst from './styles/background';
import Navbar from './navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <BackgroundFirst />
      <div>
        <h1>Hello world</h1>
      </div>
    </main>
  );
}
