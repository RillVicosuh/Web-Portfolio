import AnimatedText from "@/components/AnimatedText";
//import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import AiEye from "../../public/images/Ai_Eye5.png";
import profilePic from "../../public/images/profile/Ai_Suaveee.png";
import TransitionEffect from "@/components/TransitionEffect";
import ParticleContainer from "@/components/ParticleContainer";


export default function Home() {

  return (
    <>
      <Head>
        <title>Portfolio Built with Nextjs</title>
        <meta
          name="description"
          content="Explore Ricardo Villacana's portfolio and 
        discover the latest projects and skills I'm developing"
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >

        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="CodeBucks"
                className="h-auto w-full"
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hi,"
                className="!text-left !text-5xl xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl"
              />
              <AnimatedText
                text="I'm Ricardo."
                className="!text-left !text-5xl xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                I recently completed of Bachelor of Science, majoring in Computer Science at the University of California, Riverside. I have a passion for all things technology, from software to blockchain engineering. My north star is using innovative technologies to promote human flourishing.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  // whileHover={{
                  //   cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  // }}
                  href="/Ricardo_Villacana_Resume_Software_Engineer.pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="mailto:ricardovill77@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-exotic underline 
                  dark:text-primaryDark md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>


        <div className="absolute right-8 bottom-8 inline-block w-48 md:hidden">
          <Image
            className="relative h-auto w-full"
            src={AiEye}
            alt="Codebucks"
          />
        </div>
      </article>
    </>
  );
}
//<HireMe />
//<ParticleContainer />