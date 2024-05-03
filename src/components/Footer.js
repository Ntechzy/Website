import { Typography } from "@material-tailwind/react";

import logo1 from "../assets/images/social_media/Instagram logo.png";
import logo2 from "../assets/images/social_media/Youtube logo.png";
import logo3 from "../assets/images/social_media/facebook.png";
import logo4 from "../assets/images/social_media/linkedin logo.png";
import logo5 from "../assets/images/social_media/twitter logo.png";

const Footer = () => {
  return (
    <div>
    <div className=" mx-8 px-8 flex flex-wrap justify-around">
      <div className="pl-4 w-52 h-auto">
        <div className="text-1xl font-semibold">India</div>
        <p className="py-1 my-1">
          117/H-/1606, Near J.K. Temple, Pandu Nagar, Uttar Pradesh <br/>PIN:208005
        </p>
        <h2 className="text-1xl font-semibold">Follow Us</h2>
        <div className="flex flex-wrap justify-between py-2 my-2">
          <div className=" w-6 h-auto flex flex-wrap justify-normal">
            <img src={logo1} alt="Partner Logo" />
          </div>
          <div className=" w-6 h-auto flex flex-wrap justify-normal">
            <img src={logo2} alt="Partner Logo" />
          </div>
          <div className=" w-6 h-auto flex flex-wrap justify-normal">
            <img src={logo3} alt="Partner Logo" />
          </div>
          <div className=" w-6 h-auto flex flex-wrap justify-normal">
            <img src={logo4} alt="Partner Logo" />
          </div>
          <div className=" w-6 h-auto flex flex-wrap justify-normal">
            <img src={logo5} alt="Partner Logo" />
          </div>
        </div>
      </div>

      <div className="pl-4 w-52 h-auto ">
        <div className="text-1xl font-semibold">Contact Us</div>
       <div className="py-1 my-1"> <a href="mailto:ntechzy@gmail.com" >ntechzy@gmail.com</a>
       </div>
        <div className="text-1xl font-semibold">Scan To Chat</div>
      </div>

      <div>
        <div className="text-1xl font-semibold">Quick Links</div>
        <div className="py-2 my-2">
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
              About Us
            </Typography>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
              Portfolio
            </Typography>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
              About Us
            </Typography>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
              About Us
            </Typography>
            </div>
            
      </div>
      </div>
      <Typography color="blue-gray" className="text-center font-normal">
      &copy; 2023 NTechzy PVT.LMT
    </Typography>
      </div>
     
  );
};
export default Footer;
