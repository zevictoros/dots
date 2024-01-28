import Image from 'next/image';
import BackgroundFirst from './styles/background';

export default function Home() {
  return (
    <main>
      <BackgroundFirst />
      <div>
        <h1>Hello world</h1>
      </div>
    </main>
  );
}
