import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj0 from "../../public/images/projects/aiPortal.png";
import proj1 from "../../public/images/projects/nft-marketplace.png";
import proj2 from "../../public/images/projects/stablecoin.jpg";
import proj3 from "../../public/images/projects/ai-shipping5.jpg";
import proj4 from "../../public/images/projects/reddit-search.png";
import proj5 from "../../public/images/projects/embedded-setup.png";
import proj6 from "../../public/images/projects/fact-ai.png";
import TransitionEffect from "@/components/TransitionEffect";
import YouTubeEmbed from '@/components/YoutubeEmbed';
import TechBadge from '@/components/TechBadge';

const FramerImage = motion(Image);

const borderVariants = {
  initial: { scale: 0, borderColor: '#000' },
  animate: {
    scale: 1,
    borderColor: '#f00',
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9]
    }
  }
};

const FeaturedProject = ({ type, title, summary, img, link, github, techStack }) => {

  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline text-dark dark:text-light"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
          >
            Visit Project
          </Link>
        </div>
        <div className="mt-2 flex flex-wrap">
          {techStack.map((tech, index) => (
            <TechBadge key={index} name={tech} />
          ))}
        </div>
      </div>
    </article>
  );
};

const FeaturedProjectWithoutWebOrVid = ({ type, title, summary, img, github, techStack }) => {

  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={github}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={github}
          target={"_blank"}
          className="underline-offset-2 hover:underline text-dark dark:text-light"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Github link"
          >
            <GithubIcon />
          </Link>
        </div>
        <div className="mt-2 flex flex-wrap">
          {techStack.map((tech, index) => (
            <TechBadge key={index} name={tech} />
          ))}
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {

  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="w-8 md:w-6"
            aria-label={title}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Modern Portfolio Built with Nextjs | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest projects by Ricardo Villacana, a passionate software and blockchain developer"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="My Cool Projects!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type=""
                title="A.I. Fact Extractor"
                summary="Developed a platform for extracting a unique and malleable list of facts from documents based on user questions, improving document analysis and information retrieval processes. Implemented real-time data submission and processing using FastAPI and ReactJS for a smooth user experience. Utilized the OpenAI API for accurate and relevant fact extraction."
                img={proj6}
                link="http://factai-alb1-1373833785.us-east-2.elb.amazonaws.com/"
                github="https://github.com/RillVicosuh/Facts_AI"
                techStack={['Python', 'AWS', 'Docker', 'FastAPI', 'React', 'Tailwind CSS', 'OpenAI API']}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type=""
                title="A.I. Character Creation Portal"
                summary="Constructed an innovative companion platform by integrating OpenAI's API for real-time, customizable interactions with A.I. characters. To ensure efficient performance and future scalability, I employed a dual-database approach: PrismaDB for relational data and a specialized vector database for A.I. data storage. This optimized both read/write operations and scalability, making the platform both user-friendly and technically robust."
                img={proj0}
                link="https://www.zampai.com/"
                github="https://github.com/RillVicosuh/zamp-ai"
                techStack={['Typescript', 'MySQL', 'React', 'Next.js', 'Tailwind CSS', 'OpenAI API']}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type=""
                title="NFT Marketplace"
                summary="Built a user-centric decentralized NFT marketplace on the Ethereum Sepolia Testnet using Solidity and Javascript, providing a secure platform for the transaction of unique digital assets. Incorporated Apollo Client and TheGraph for efficient state management, facilitating real-time querying and indexing of blockchain data. Employed IPFS for decentralized storage and retrieval of NFT metadata. This project demonstrates my ability to engineer intuitive user interfaces, manage data efficiently, and ensure secure and decentralized data storage."
                img={proj1}
                link="https://nft-marketplace-next-js-frontend-using-the-graph.vercel.app/"
                github="https://github.com/RillVicosuh/NFT-Marketplace-NextJS-Frontend-using-TheGraph"
                techStack={['Solidity', 'React', 'Next.js', 'Ethers.js', 'Blockchain']}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type=""
                title="Decentralized Stablecoin Protocol"
                summary="Designed a Solidity-based Decentralized Finance(DeFi) protocol for a stablecoin, integrating real-time price feeds and employing algorithmic minting for stability. Utilized Forge for streamlined contract deployment on the Sepolia Testnet and comprehensive unit testing, highlighting proficiency in blockchain technologies and commitment to quality assurance."
                img={proj2}
                link="https://sepolia.etherscan.io/address/0x0bcd78eac4c55ce6f64b37db2b45abad5ad37e28#writeContract"
                github="https://github.com/RillVicosuh/Defi-Stablecoin-Foundry"
                techStack={['Solidity', 'Unit Tests', 'DSA', 'Blockchain', 'Ethereum']} // Should I include Ethers.js in here
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjectWithoutWebOrVid
                type=""
                title="AI Shipping Container Software"
                summary="Pioneered a Python algorithm to streamline shipping container operations, ensuring efficient loading/unloading processes and precise weight distribution. Effectively reduced operational risks and enhanced vessel stability. Incorporated a comprehensive logging system for improved traceability, and collaborated closely with a frontend team to integrate backend functionalities."
                img={proj3}
                github="https://github.com/RillVicosuh/Artificial-Intelligence---Shipping-Container-Software-Solution"
                techStack={['Python', 'DSA', 'Back-End', 'Artificial Intelligence']}
              />
            </div>
            <div className="col-span-12 mb-20">
              <YouTubeEmbed videoId="jZE7lWzeHM0" />
            </div>
            <div className="col-span-12">
              <FeaturedProjectWithoutWebOrVid
                type=""
                title="Reddit Search Engine"
                summary="Architected an efficient search engine for Reddit using Python's PRAW library and PyLucene, enabling optimal data extraction, organization, and ranking of posts from subreddits. The system mitigates API rate limitations and manages extensive data volumes, providing accurate and efficient information retrieval. The search engine was made user-friendly through a Flask-based web interface, presenting the top 10 relevant posts in response to user inquiries."
                img={proj4}
                github="https://github.com/RillVicosuh/Reddit-Search-Engine"
                techStack={['Python', 'DSA', 'Information Retrieval', 'Unix/Linux', 'API']}
              />
            </div>
            <div className="col-span-12 mb-20">
              <YouTubeEmbed videoId="a-o47FwY8mI" />
            </div>
            <div className="col-span-12">
              <FeaturedProjectWithoutWebOrVid
                type=""
                title="Emedded Systems Running Simulator"
                summary="The Embedded Systems Running Simulator, designed using the Arduino language, is a real-time athletic experience replicator. It captures the nuances of a runner's movement and environmental conditions. The project expertly integrates multiple hardware components, including breadboards, joysticks, LEDs, and various sensors, transforming real-time data into dynamic visual output on an LED display, and brings to life the interactive aspects of a runner's speed, direction, and rest periods."
                img={proj5}
                github="https://github.com/RillVicosuh/Running-Simulator-Embedded-Systems-LED-Project"
                techStack={['C++', 'Arduino', 'DSA', 'Hardware Integration', 'System Design']}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

/*<motion.div
                className="absolute top-1 w-full border-t-2"
                initial="initial"
                animate="animate"
                variants={borderVariants}
              />
*/
/*
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Blog Website"
                img={proj6}
                title="Bruh Project"
                link=""
                github="https://github.com/RillVicosuh"
              />
            </div>
*/
