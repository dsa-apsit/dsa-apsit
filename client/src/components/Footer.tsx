"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/dsa_apsit",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/dsa-apsit",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/p/Data-Science-Association-APSIT-100085633250918/",
    },
    {
      name: "Github",
      link: "https://github.com/dsa-apsit",
    },
  ];

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Register", link: "/register" },
    { name: "Login", link: "/login" },
    { name: "Profile", link: "/profile" },
  ];

  return (
    <footer id="socials" className="w-full px-4 md:px-8 pb-10 overflow-hidden">
      <div className="border-b border-current/20 pb-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <Link
          href="https://ssb.is-a.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-[0.3em] hover:text-red-600 transition"
        >
          made by shree
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 py-12">
        <motion.div
          initial={{ letterSpacing: "-0.08em" }}
          whileInView={{ letterSpacing: "-0.03em" }}
          viewport={{ once: true }}
          className="text-[25vw] md:text-[15vw] leading-[0.7] font-black text-red-600 select-none"
        >
          DSA
        </motion.div>

        <div className="w-full md:w-[45%] flex justify-start md:justify-between gap-12">
          <div className="flex flex-col">
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] opacity-40">Navigate</p>

            <div className="flex flex-col flex-wrap gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  className="group flex items-center gap-2 text-base md:text-lg hover:text-red-600 transition-colors"
                >
                  <span className="w-0 overflow-hidden opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all">
                    →
                  </span>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] opacity-40">Connect</p>

            <div className="flex flex-col gap-2">
              {socialLinks.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-base md:text-lg hover:text-red-600 transition-colors"
                >
                  <span className="w-0 overflow-hidden opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all">
                    ↗
                  </span>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <p className="hidden lg:block text-black max-w-[180px] text-xs leading-relaxed">
            A student-driven community exploring technology, data, and everything interesting.
          </p>
        </div>
      </div>

      <div className="border-t pt-2 border-current/20">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-40">Data Science Association</span>

          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-40">APSIT</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
