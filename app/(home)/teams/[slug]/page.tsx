import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { CodeCard } from "@/components/ui/code-card";

interface TeamMember {
  id: string;
  name: string;
  image: string;
  quote: string;
}

interface TeamData {
  [key: string]: {
    name: string;
    members: TeamMember[];
  };
}

const teamData: TeamData = {
  board: {
    name: "Board Members",
    members: [
      {
        id: "1",
        name: "Aditya Joshi",
        image:
          "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733644539/bash/members/IMG_7832_-_Aditya_sbfssh.jpg",
        quote:
          "Don't take yourself too seriously. You’re just a monkey with a plan",
      },
      {
        id: "2",
        name: "Tanya Chaturvedi",

        image:
          "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733644482/bash/members/IMG_3541_-_Tanya_Chaturvedi_qwfwza.jpg",
        quote:
          "Whether tackling complex problems or sharing insights with others, I take pleasure in contributing to projects that challenge and expand my skills as a learner.I'm endlessly curious, so be wary of my pestering.  When I'm not pondering life's big questions, you’ll find me rewatching Gilmore Girls, because who doesn’t love witty banter and questionable life decisions?",
      },
      {
        id: "3",
        name: "Hemansh Bhagtani",

        image:
          "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733644684/bash/members/IMG-20240921-WA0012_-_HEMANSH_BHAGTANI_22BCE10673_bs1gee.jpg",
        quote:
          "I am really passionate about trying the newest tech which is prominent in the industry, hence the reason for me joining the ever-exciting BashCraft Club.",
      },
      {
        id: "4",
        name: "Nisarg Gajjar",

        image:
          "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733644795/bash/members/dp1_-_NISARG_VINODKUMAR_GAJJAR_22BCE11142_v0ig0f.jpg",
        quote:
          "As the Treasurer of BashCraft Club, I want to effectively manage the club's financial  operations thus ensuring transparency. My responsibilities included overseeing the club's finances, managing accounts with other clubs, and proper authentication for event fees.",
      },
      {
        id: "5",
        name: "Madhuram Kulshrestha ",

        image:
          "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733644935/bash/members/IMG-20241127-WA0100_-_MADHURAM_KULSHRESTHA_22BCE10828_rmaprm.jpg",
        quote:
          "I’m a prefinal year CSE student and a tech enthusiast with a passion for Machine Learning and Backend Development. I love the competitive energy of hackathons and believe in working hard as a team to achieve great results. As an Event Coordinator at BashCraft, I focus on creating meaningful events that inspire collaboration and innovation.",
      },
    ],
  },
  tech: {
    name: "Tech Team",
    members: [
      {
        id: "1",
        name: "Om Mishra",
        quote: "Tech Lead",
        image:
          "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733674921/bash/members/WhatsApp_Image_2024-12-08_at_1.49.25_PM_ncv6r7.jpg",
      },
      // Add more members here
    ],
  },
  design: {
    name: "Design Team",
    members: [
      {
        id: "1",
        name: "Siddharth Mohril",
        quote: "Design Lead",
        image:
          "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733645316/bash/members/20240623_094446_2_-_SIDDHARTH_MOHRIL_22BAI10132_pnnsij.jpg",
      },
      // Add more members here
    ],
  },
  social: {
    name: "Social and Photography Team",
    members: [
      {
        id: "1",
        name: "Shreyansh Uttam",
        quote: "Social Media Lead",
        image:
          "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733645539/bash/members/IMG_6217_-_Shreyansh_Uttam_lzrkpd.jpg",
      },
      // Add more members here
    ],
  },
  event: {
    name: "Event Management Team",
    members: [
      {
        id: "1",
        name: "Jayant Singh Rawat",
        quote: "Event Management Lead",
        image:
          "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733645670/bash/members/IMG_6702_-_Jayant_Singh_Rawat_23BCE11823_jjjver.jpg",
      },
      // Add more members here
    ],
  },
  outreach: {
    name: "PR & Outreach Team",
    members: [
      {
        id: "1",
        name: "Aastha Adhikari ",
        quote: "PR & Outreach Lead",
        image:
          "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733646156/bash/members/photo2_-_Aastha_Adhikari_23bai10049_sffnoc.jpg",
      },
      // Add more members here
    ],
  },
  content: {
    name: "Content Team",
    members: [
      {
        id: "1",
        name: "Himanshu kumar singh ",
        quote: "Content Lead",
        image:
          "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733646249/bash/members/HKS_-_HIMANSHU_KUMAR_SINGH_22BCE10903_zelohe.jpg",
      },
    ],
    // Add more members here
  },
};

export default function TeamPage({ params }: { params: { slug: string } }) {
  const team = teamData[params.slug];

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm text-gray-400 hover:text-white"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="mb-12 text-4xl font-bold text-white">{team.name}</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.members.map((member) => (
            <CodeCard
              key={member.id}
              image={member.image}
              name={member.name}
              quote={member.quote}
              className="bg-background text-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
