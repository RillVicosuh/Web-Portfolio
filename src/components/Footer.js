import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base"
    >
      <Layout className="py-8 flex flex-row sm:flex-col items-center justify-between lg:py-6 text-dark dark:text-light">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <div className="flex flex-row sm:flex-col items-center lg:py-2 text-dark dark:text-light">
          Built by Ricardo Villacana
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
/*<Link
          href="https://devdreaming.com/about"
          target="_blank"
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
*/