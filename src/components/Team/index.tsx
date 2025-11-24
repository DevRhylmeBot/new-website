// src/components/Team/index.tsx
import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";
import Link from "next/link";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Durgesh Prajapati",
    designation: "Founder & CEO",
    image: "/images/team/Durgesh_Prajapati.jpg",
    linkedinLink: "https://www.linkedin.com/in/durgesh4993/",
    githubLink: "https://github.com/Durgesh4993",
  },
  {
    id: 2,
    name: "Ghanshyam Singh",
    designation: "Community Manager",
    image: "/images/team/Ghanshyam_Singh.jpg",
    linkedinLink: "https://www.linkedin.com/in/ghanshyam-singh-b014232b2/",
    githubLink: "https://github.com/ghanshyam2005singh",
  },
  {
    id: 3,
    name: "Anjali Gautam",
    designation: "Community Manager",
    image: "/images/team/Anjali_Gautam.jpeg",
    linkedinLink: "https://www.linkedin.com/in/anjali-gautam-414700296/",
    githubLink: "https://github.com/GautamAnjali569",
  },
  {
    id: 4,
    name: "Ramakrushna Biswal",
    designation: "Graphic Team Lead",
    image: "/images/team/Ramakrushna.jpg",
    linkedinLink: "https://www.linkedin.com/in/ramakrushna-biswal/",
    githubLink: "https://github.com/RamakrushnaBiswal",
  },
  {
    id: 4,
    name: "Aditya D",
    designation: "Technical Lead",
    image: "/images/team/Aditya D.jpg",
    linkedinLink: "https://www.linkedin.com/in/aditya-d-23453a179/",
    githubLink: "https://github.com/adi271001",
  },
  {
    id: 6,
    name: "Ayushmaan Singh Yadav",
    designation: "Software Developer",
    image: "/images/team/Ayushmaan.jpg",
    linkedinLink: "https://www.linkedin.com/in/ayushmaansinghyadav/",
    githubLink: "https://github.com/asteriskayush007",
  },
  {
    id: 7,
    name: "Sayan Rakshit",
    designation: "Software Developer",
    image: "/images/team/Sayan_Rakshit.jpg",
    linkedinLink: "https://www.linkedin.com/in/sayandotcom/",
    githubLink: "https://github.com/devsayanR",
  },
  {
    id: 8,
    name: "Piyush Prasad",
    designation: "Software Developer",
    image: "/images/team/Piyush_prasad.jpeg",
    linkedinLink: "https://www.linkedin.com/in/piyzard/",
    githubLink: "https://github.com/piyzard",
  },
  {
    id: 9,
    name: "Anushka Tiwari",
    designation: "Software Developer",
    image: "/images/team/Anushka_Tiwari.jpg",
    linkedinLink: "https://www.linkedin.com/in/anushka-tiwari-a2693526b/",
    githubLink: "https://github.com/anushka226",
  },
  {
    id: 10,
    name: "Yash Kumar Saini",
    designation: "Software Developer",
    image: "/images/team/Yash_ku_saini.jpg",
    linkedinLink: "https://www.linkedin.com/in/yashksaini/",
    githubLink: "https://github.com/yashksaini-coder",
  },
  {
    id: 11,
    name: "Harshit Verma",
    designation: "Software Developer",
    image: "/images/team/Harshit_verma.png",
    linkedinLink: "https://www.linkedin.com/in/therealharshit",
    githubLink: "https://github.com/therealharshit",
  },
  {
    id: 12,
    name: "Yashika Sheawat",
    designation: "Content Creator",
    image: "/images/team/yashika.jpg",
    linkedinLink: "https://www.linkedin.com/in/yashika-722899321",
    githubLink: "https://github.com/Yashika-sherawat",
  },
  {
    id: 13,
    name: "Sneha Shrivastav",
    designation: "Discord Manager",
    image: "/images/team/Sneha_kumari.jpg",
    linkedinLink: "https://www.linkedin.com/in/sneha-kumari1/",
    githubLink: "https://github.com/Snehsk",
  },
  {
    id: 14,
    name: "Sanchit Sehgal",
    designation: "Marketing and Outreach coordinator",
    image: "/images/team/sachit_sehgal.jpg",
    linkedinLink: "https://www.linkedin.com/in/sanchitsehgal/",
    githubLink: "https://github.com/Sanchit-aiml",
  },
  {
    id: 15,
    name: "Alok Yadav",
    designation: "Video Editor",
    image: "/images/team/alok.jpg",
    linkedinLink: "https://www.linkedin.com/in/alok-yadav-632418347",
    githubLink: "https://github.com/aloky8055",
  },
  {
    id: 16,
    name: "Sanskriti",
    designation: "Tech Team",
    image: "/images/team/sanskriti.jpg",
    linkedinLink: "https://www.linkedin.com/in/sanskriti-s/",
    githubLink: "https://github.com/sanskriti2005",
  },
];

const Team = ({ showAll }: { showAll: boolean }) => {
  const visibleTeam = showAll ? teamData : teamData.slice(0, 4);

  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph="Meet our passionate team driving innovation and excellence."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {visibleTeam.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>

        {/* Show the button only if not showing all members */}
        {!showAll && (
          <div className="flex justify-center mt-8">
            <Link href="/about">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-md">
                Show More
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
