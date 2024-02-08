import Image from 'next/image';
import BackgroundFirst from './styles/background';
import Navbar from './navbar';
import dashboard from '../../public/dashboard.jpg';

export default function Home() {
  return (
    <main>
      <Navbar />
      <BackgroundFirst />
      <div className="flex justify-between max-w-[980px] m-auto pt-[110px] items-center">
        <h1 className="text-[68px] font-bold pl-5">
          Dados rápidos <br /> e seguros
        </h1>
        <div className="max-w-[420px]">
          <p className="text-[16px]">
            Lorem ipsum dolor sit amet. Eos fugiat rerum vel galisum cupiditate
            est facilis quia ea iusto fuga.
          </p>
          <div className=" mt-10">
            <button className="px-10 py-3 border rounded-3xl border-white">
              Começar
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[50px]">
        <div className="border-[2px] border-blue-500 rounded-[30px]">
          <Image
            alt="background"
            src={dashboard}
            quality={100}
            style={{
              border: '20px solid white',
              borderRadius: '30px'
            }}
          />
        </div>
      </div>
    </main>
  );
}
