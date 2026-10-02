"use client";

import { Marquee } from "../ui/marquee";
import { Poppins } from "next/font/google";

import MemberStack from "./MemberCard";
import { useEffect, useState } from "react";
import { MemberType } from "@/data/member";
import axiosInstance from "@/services/axios";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

const TeamSection = () => {
  const [team, setTeam] = useState<Record<string, MemberType[]>>({});

  useEffect(() => {
    const fetchTeamJson = async () => {
      try {
        const { data } = await axiosInstance.get("/teams", { withCredentials: true });
        setTeam(data);
      } catch (error: any) {
        setTeam({});
      }
    };

    fetchTeamJson();
  }, []);

  return (
    <section
      id="team"
      className=" relative w-screen h-[80vh] md:h-screen bg-[linear-gradient(to_bottom,black_0%,black_80%,white_100%)] overflow-hidden flex flex-col justify-center items-center"
    >
      <Marquee reverse>
        <h1
          className={`font-mono text-[10vh] md:text-[15vh] font-bold text-transparent [-webkit-text-stroke:2px_white] uppercase ${poppins.className}`}
        >
          <span className="hidden md:flex">Meet The Team</span>
          <span className="flex md:hidden">Team</span>
        </h1>
      </Marquee>

      <div className="h-[40vh] md:h-[50vh] w-full flex flex-row justify-center items-center">
        <Marquee className="[--duration:20s] h-full w-full">
          {Object.entries(team).map(([teamType, members]) => (
            <MemberStack key={teamType} memberArray={members} type={teamType} />
          ))}
        </Marquee>
      </div>
      <p className="absolute w-full md:max-w-[70%] px-1 font-medium capitalize bottom-4 left-1/2 -translate-x-1/2 text-xs md:text-lg text-black text-center md:x-4">
        Our members innovate, lead, collaborate, and inspire. They bring skills, energy, ideas, and dedication, making
        the committee unstoppable and thriving.
      </p>
    </section>
  );
};

export default TeamSection;
