import Image from 'next/image';
import background from '../../../public/background.jpg';

export default function Background() {
  return (
    <Image
      alt="background"
      src={background}
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
