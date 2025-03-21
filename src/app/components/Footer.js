import Image from "next/image";
import logo from "../../../public/logo.svg";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center h-full bg-white text-black relative shadow-sm font-geist-sans">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <Image src={logo} alt="Logo" width={50} height={50} />
          <h1 className=" text-xl cursor-pointer">Cuisines</h1>
        </div>
        <p className=" py-8 text-center text-sm text-black">
          © 2025 - Present Cuisines. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
