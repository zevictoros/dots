import Image from 'next/image';
import Background from './styles/background';
import Navbar from './navbar';
import dashboard from '../../public/dashboard.jpg';
import mobile from '../../public/mobile.jpg';
import './styles/styles.css';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Background />
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
            <button className="px-10 py-3 border rounded-3xl border-white hover:bg-white hover:text-[#3C53F4] hover:border-[#3C53F4]">
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

      <div className="m-auto max-w-[980px] pl-10 mb-20">
        <h1 className="text-[#3C53F4] text-[58px] font-bold my-[50px]">
          Dados confiáveis sempre
        </h1>
        <div className="flex">
          <div className="flex flex-col justify-around w-1/2">
            <div>
              <h3 className="text-black text-3xl mb-10 font-bold">
                01. Rapidez e agilidade
              </h3>
              <p className="text-gray-500 text-base">
                Lorem ipsum dolor sit amet. Eos fugiat rerum vel galisum
                cupiditate est facilis quia ea iusto fuga.
              </p>
            </div>
            <div>
              <h3 className="text-black text-3xl mb-10 font-bold">
                02. Economia
              </h3>
              <p className="text-gray-500 text-base">
                Lorem ipsum dolor sit amet. Eos fugiat rerum vel galisum
                cupiditate est facilis quia ea iusto fuga.
              </p>
            </div>
            <div>
              <h3 className="text-black text-3xl mb-10 font-bold">
                03. Análises em tempo real
              </h3>
              <p className="text-gray-500 text-base">
                Lorem ipsum dolor sit amet. Eos fugiat rerum vel galisum
                cupiditate est facilis quia ea iusto fuga.
              </p>
            </div>
          </div>
          <div className="m-auto">
            <Image
              alt="background"
              src={mobile}
              quality={100}
              style={{
                border: '1px solid blue',
                borderRadius: '30px'
              }}
            />
          </div>
        </div>
      </div>

      <div className="avaliacao">
        <div className="flex flex-col h-screen justify-around items-center m-auto max-w-[45vw] py-12">
          <h1 className="text-[58px] text-center font-bold">
            Entenda melhor os seus usuários
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet. Ut accusantium error est voluptas
            ratione sed inventore expedita a quisquam magni ut dolores tempore
            eos repellat ipsam vel voluptatem quis. Cum maxime voluptatem qui
            laboriosam quam non dignissimos fugit ut repudiandae odio id numquam
            sunt et autem dolor et autem aliquam.
          </p>
          <div className="">
            <button className="px-10 py-3 border rounded-3xl border-white hover:bg-white hover:text-[#3C53F4] hover:border-[#3C53F4]">
              Avaliação
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
