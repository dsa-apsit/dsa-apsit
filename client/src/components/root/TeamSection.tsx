import { Marquee } from "../ui/marquee";
import { Poppins } from "next/font/google";

import MemberStack from "./MemberCard";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

const core = [
  {
    id: 1,
    type: "core",
    role: "president",
    name: "Aarav",
    year: "3rd Year",
    message: "Keeping the team moving in the right direction.",
    imgUrl: "/temp-sec1.png",
  },
  {
    id: 2,
    type: "core",
    role: "treasurer",
    name: "Mehul",
    year: "3rd Year",
    message: "Making sure every number adds up.",
    imgUrl: "/temp-treasurer.png",
  },
  {
    id: 3,
    type: "core",
    role: "secretary",
    name: "Ishita",
    year: "2nd Year",
    message: "Turning plans, meetings and ideas into action.",
    imgUrl: "/temp-sec1.png",
  },
];

const technical = [
  {
    id: 1,
    type: "technical",
    role: "member",
    name: "Karan",
    year: "3rd Year",
    message: "Building things that actually work.",
    imgUrl: "/temp-treasurer.png",
  },
  {
    id: 2,
    type: "technical",
    role: "member",
    name: "Ananya",
    year: "2nd Year",
    message: "Finding bugs where nobody thought to look.",
    imgUrl: "/temp-sec2.png",
  },
  {
    id: 3,
    type: "technical",
    role: "member",
    name: "Rohan",
    year: "3rd Year",
    message: "Turning ideas into something people can use.",
    imgUrl: "/temp-sec1.png",
  },
  {
    id: 4,
    type: "technical",
    role: "head",
    name: "Yash",
    year: "3rd Year",
    message: "Keeping the technical side from catching fire.",
    imgUrl: "/temp-sec1.png",
  },
];

const team = [core, technical];

const BoreTeam = async () => {
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
          <MemberStack memberArray={core} type="CORE" />
        </Marquee>
      </div>
      <p className="absolute w-full md:max-w-[70%] px-1 font-medium capitalize bottom-4 left-1/2 -translate-x-1/2 text-xs md:text-lg text-black text-center md:x-4">
        Our members innovate, lead, collaborate, and inspire. They bring skills, energy, ideas, and dedication, making
        the committee unstoppable and thriving.
      </p>
    </section>
  );
};

export default BoreTeam;
