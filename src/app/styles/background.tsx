import Image from 'next/image';
import backgrond_first from '../../../public/background-01.jpg';

export default function BackgroundFirst() {
  return (
    <Image
      alt="background"
      src={backgrond_first}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
        zIndex: '-1'
      }}
    />
  );
}
