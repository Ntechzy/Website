import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import backGround from "../assets/images/backgrounds/6613574_17929.jpg"
import backGrounds from "../assets/images/backgrounds/2.jpg"

const AccordionUsage = () => {
  return (
    <div style={{ backgroundImage: `url(${backGrounds})`, backgroundSize: 'cover', backgroundPosition: 'center', marginTop:'8', paddingTop:'15px', backgroundColor:'black'}}>
      
              {/* <div className="absolute top-0 left-0 right-0 bottom-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}/> */}

      <div className="flex justify-center text-white text-3xl font-semibold mt-4 pt-6">
        Frequently Asked Questions:
      </div>
      <div className="w-full flex items-center justify-center my-2 py-8">
        <div className="w-1/2 h-auto justify-center">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="font-semibold ">
              Q. What is branding, and how does it impact my business?
            </AccordionSummary>
            <AccordionDetails className="font-sans">
              Ans: Branding involves creating a unique identity for your
              business through elements like logos, messaging, and visuals. It
              influences how customers perceive your company, products, or
              services, ultimately affecting your reputation and customer
              loyalty.
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="font-semibold">
              Q. How can political campaigns utilize digital marketing
              effectively?
            </AccordionSummary>
            <AccordionDetails>
              Ans: Political campaigns can leverage digital marketing to reach
              voters, raise awareness about candidates and issues, and mobilize
              supporters. Strategies may include targeted advertising, social
              media campaigns, email marketing, and website optimization to
              communicate effectively with voters.
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="font-semibold">
              Q. How does production contribute to successful marketing
              campaigns?
            </AccordionSummary>
            <AccordionDetails>
              Ans: Production encompasses the creation and execution of various
              marketing materials, including videos, ads, graphics, and other
              multimedia content. High-quality production enhances brand
              credibility, captures audience attention, and effectively
              communicates your message.
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="font-semibold">
              Q. What are the key aspects of event management in an educational
              context?
            </AccordionSummary>
            <AccordionDetails>
              Ans: In education, event management involves planning and
              organizing academic conferences, workshops, seminars,
              orientations, and other educational events. This includes
              coordinating logistics, managing attendees, securing speakers, and
              ensuring a smooth and engaging experience for participants.
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="font-semibold ">
              Q. How can ERP services benefit businesses in managing their
              operations?
            </AccordionSummary>
            <AccordionDetails className="font-sans">
              Ans: ERP (Enterprise Resource Planning) services streamline
              business processes by integrating various functions such as
              finance, HR, supply chain, and manufacturing into a centralized
              system. This improves efficiency, decision-making, and
              collaboration across the organization.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default AccordionUsage;
