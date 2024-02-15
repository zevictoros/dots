import Image from 'next/image';
import logo from '../../public/logo.png';

export default function Navbar() {
  return (
    <header className="h-[90px] bg-white text-black">
      <div className="flex justify-between m-auto items-center h-full max-w-[1200px]">
        <div className="flex items-center">
          <Image alt="logo" src={logo} width={50} height={50} />
          <h1 className="ml-3 text-3xl">Dots</h1>
        </div>
        <nav className="w-1/3">
          <ul className="flex justify-around">
            <li className="hover:text-blue-500 cursor-pointer py-1">Produto</li>
            <li className="hover:text-blue-500 cursor-pointer py-1">Sobre</li>
            <li className="hover:text-blue-500 cursor-pointer py-1">
              Parceiros
            </li>
            <li className="bg-black text-white rounded-full hover:bg-white hover:text-black py-2 px-4 cursor-pointer">
              Obter demo
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
