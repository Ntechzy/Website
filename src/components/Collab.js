import promotions from "../assets/images/untitled folder/promtion.png";
import think_big from "../assets/images/think big.jpg";
import starting from "../assets/images/start small.png";
import create from "../assets/images/creating value fast.jpg";
import innovative from "../assets/images/innovative scale image.webp";
import { Button } from "@material-tailwind/react";

const Collab = () => {
  return (
    <div className="m-4 p-4">
      <div className="text-3xl m-4 px-4 font-medium flex justify-center">
        We have multiple ways to help you grow{" "}
      </div>

      <div className="m-4 p-2 flex flex-wrap justify-center">
        <div className="mt-6 w-1/3 h-auto m-4 rounded-lg ring-1 ring-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="image-container">
              <img
                src={think_big}
                alt="Image description"
                className="w-auto h-40 object-cover rounded-lg "
              />
            </div>
            <div className="content-container ">
              <h2 className="text-1xl font-bold px-2">Thinking Big</h2>
              <p className="text-l leading-relaxed flex justify-center px-2">
                After digging deep to understand holistically your challenges
                and business objectives, we chart your technology path that will
                keep your business future-proof.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-1/3 h-auto m-4 rounded-lg ring-1 ring-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="image-container">
              <img
                src={starting}
                alt="Image description"
                className="w-auto h-40 object-cover rounded-lg"
              />
            </div>
            <div className="content-container">
              <h2 className="text-1xl font-bold px-2">Starting mail</h2>
              <p className="text-l leading-relaxed flex justify-center px-2">
                At the beginning of the transformation journey, we start with
                simple use cases that bring you immediate results.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-1/3 h-auto m-4 rounded-lg ring-1 ring-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="image-container">
              <img
                src={create}
                alt="Image description"
                className="w-auto h-44 object-cover rounded-lg"
              />
            </div>
            <div className="content-container">
              <h2 className="text-1xl font-bold px-2">Creating value fast</h2>
              <p className="text-l leading-relaxed flex justify-center px-2">
                We then build an MVP, testing the first use cases and collecting
                feedback. Along the way, we introduce enhancements to align
                business deliverables and add new use cases.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-1/3 h-auto m-4 rounded-lg ring-1 ring-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="image-container">
              <img
                src={innovative}
                alt="Image description"
                className="w-auto h-44 object-cover rounded-lg"
              />
            </div>
            <div className="content-container">
              <h2 className="text-1xl font-bold px-2">Innovating at scale</h2>
              <p className="text-l leading-relaxed flex justify-center px-2">
                We are expanding the functionality of your system, keeping it
                flexible on the tech stack, hugely adaptable to humans, and
                easily scalable to evolve along with your business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <Button className=" bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Let’s Collaborate
        </Button>
      </div>
    </div>
  );
};

export default Collab;
