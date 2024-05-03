import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React from "@heroicons/react";
import promotions from "../assets/images/untitled folder/promtion.png";
import digital from "../assets/images/untitled folder/web 650x400dm1.png";
import content from "../assets/images/untitled folder/content creation.png";
import production from "../assets/images/untitled folder/production.png";
import campaigns from "../assets/images/untitled folder/political.png";
import management from "../assets/images/untitled folder/event management.png";
import backgroundImage from "../assets/images/backgrounds/6938839_3409295.jpg"
import backImage from "../assets/images/backgrounds/5096160.jpg"
import backImages from "../assets/images/backgrounds/CHNAGED COLOR 1 2.jpg"


const Cards = () => {
  return (
    <div>
    <div style={{ 
      position: 'relative',
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      marginTop:'8px',
      paddingTop:'15px',
    }}>
      {/* <div className="absolute top-0 left-0 right-0 bottom-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}/> */}
     
        <div className="text-3xl font-semibold text-blue-50 p-2 m-2 pt-8 flex justify-center  ">
          We have multiple ways to help you grow:{" "}
        </div>
        <div className="font-semibold text-white m-2 flex justify-center  ">
          "Somthing About the whole card section presented over here"
        </div>

        <div className="m-4 flex flex-wrap justify-center">
          <Card className="mt-6 w-96 h-auto  bg-orange-50 m-4 ring-1 ring-indigo-500 hover:hover:transform hover:translate-x-1 hover:translate-y-1 transition-transform duration-100 ease-in-out">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={promotions}
                alt="Digital marketing icon sphere navigation"
                className="object-cover w-full h-full bg-white"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 text-m flex justify-center">
                College Branding and Promotions
              </Typography>
              <Typography className="flex  m-4 ">
                Specializes in crafting dynamic marketing strategies tailored to
                educational institutions. From innovative branding initiatives
                to targeted promotional campaigns, we elevate colleges'
                visibility and reputation to attract students, engage
                stakeholders, and foster a vibrant campus community.
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-96 m-4 ring-1 ring-indigo-500 hover:hover:transform hover:translate-x-1 hover:translate-y-1 transition-transform duration-100 ease-in-out">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={digital}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 flex justify-center">
                Digital marketing services{" "}
              </Typography>
              <Typography className="flex  m-4">
                Specializing in dynamic marketing strategies, we tailor our
                digital services to amplify your brand's reach and impact. From
                innovative campaigns to targeted initiatives, we enhance
                visibility and engagement, driving growth and success for your
                business.
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-96 m-4 bg-orange-50 ring-1 ring-indigo-500 hover:hover:transform hover:translate-x-1 hover:translate-y-1 transition-transform duration-100 ease-in-out">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={content}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 flex  justify-center">
                Content Creations
              </Typography>
              <Typography className="flex  m-4">
                Crafting dynamic content strategies customized to your brand's
                needs. From engaging storytelling to captivating visuals, we
                elevate your online presence, sparking connections and driving
                results.
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-96 m-4 ring-1 ring-indigo-500 hover:hover:transform hover:translate-x-1 hover:translate-y-1 transition-transform duration-100 ease-in-out">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={production}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 flex justify-center">
                Production
              </Typography>
              <Typography className="flex m-4">
                Your creative powerhouse, specializing in bringing visions to
                life. From concept to completion, we craft compelling content
                across platforms, setting the stage for unforgettable
                experiences.
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-96 m-4 bg-orange-50  ring-1 ring-indigo-500 hover:hover:transform hover:translate-x-1 hover:translate-y-1 transition-transform duration-100 ease-in-out">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={management}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 flex justify-center">
                Social media management
              </Typography>
              <Typography className="flex m-4">
                Your digital allies, dedicated to optimizing your online
                presence. With tailored strategies and captivating content, we
                drive engagement, nurture communities, and elevate your brand's
                influence in the digital realm.
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-6 w-96 m-4 ring-1 ring-indigo-500 hover:transform hover:translate-x-1 hover:translate-y-1 transition-transform duration-100 ease-in-out">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={campaigns}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 flex justify-center">
                Political campaigns
              </Typography>
              <Typography className="flex m-4">
                Where strategy meets impact. With meticulous planning and
                dynamic messaging, we mobilize supporters, influence voters, and
                navigate the path to success, ensuring your message resonates
                and your goals are achieved.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
      </div>

  );
};

export default Cards;
