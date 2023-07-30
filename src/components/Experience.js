import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-dark dark:text-light">
          {position}{" "}
          <a
            className="capitalize text-exotic dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm text-dark dark:text-light"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 text-dark dark:text-light">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Community Blockchain Moderator(Volunteer)"
            company="Impact Theory Studios"
            companyLink="https://Impacttheory.com"
            time="Aug 2022 - May 2023"
            address="Los Angeles, CA"
            work="In a volunteer role, I dedicated 12-15 hours weekly as a Community Moderator for Impact Theory Studios' 85,000+ member Discord server, an emerging web3 company. I played a pivotal role in the launch of Project Kyzen, a cutting-edge NFT-based game, providing key technical assistance during the implementation of the avatar creation portal. Regularly engaged in troubleshooting user queries and technical issues, I leveraged my blockchain and NFT expertise to foster a seamless user experience. This role further developed my communication and problem-solving skills in a fast-paced, blockchain-driven environment, reinforcing my capacity to handle user concerns and enhance community engagement."
          />

        </ul>
      </div>
    </div>
  );
};

export default Experience;
