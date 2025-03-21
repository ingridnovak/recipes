import Image from "next/image";
import logo from "../../../public/logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-geist-sans">
      <Link href="/" className="container mx-auto flex flex-row items-center">
        <Image src={logo} alt="Logo" width={50} height={50} />
        <h1 className=" text-xl cursor-pointer">Cuisines</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
