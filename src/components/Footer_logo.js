import { Typography } from "@material-tailwind/react";

import logo from "../assets/images/NTECHZYY.png"

const FooterWithLogo = () => {
  return (
    <footer className="w-full bg-white p-2">
      <hr className="my-2 border-blue-gray-50" />
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-2 gap-x- bg-white text-center md:justify-between">
        <img
          src={logo}
          alt="logo-ct"
          className="w-auto h-14"
        />
      </div>
      
    </footer>
  );
}
export default FooterWithLogo;
