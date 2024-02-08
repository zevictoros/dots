import Image from 'next/image';
import backgrond_first from '../../../public/background-02.jpg';

export default function BackgroundFirst() {
  return (
    <Image
      alt="background"
      src={backgrond_first}
      placeholder="blur"
      quality={100}
      style={{
        position: 'absolute',
        inset: '0px',
        width: '100%',
        height: '170%',
        objectFit: 'cover',
        zIndex: '-1'
      }}
    />
  );
}
