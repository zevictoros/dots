import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Image
        src="/background-01.jpg"
        alt="background"
        className=""
        width={100}
        height={24}
        priority
      />
    </main>
  );
}
