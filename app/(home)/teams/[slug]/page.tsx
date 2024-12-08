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
        quote: "Founder & President",
      },
      {
        id: "2",
        name: "Tanya Chaturvedi",

        image:
          "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733644482/bash/members/IMG_3541_-_Tanya_Chaturvedi_qwfwza.jpg",
        quote: "Joint Secretary",
      },
      {
        id: "3",
        name: "Hemansh Bhagtani",

        image:
          "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733644684/bash/members/IMG-20240921-WA0012_-_HEMANSH_BHAGTANI_22BCE10673_bs1gee.jpg",
        quote: "Secretary",
      },
      {
        id: "4",
        name: "Nisarg Gajjar",

        image:
          "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733644795/bash/members/dp1_-_NISARG_VINODKUMAR_GAJJAR_22BCE11142_v0ig0f.jpg",
        quote: "Treasurer",
      },
      {
        id: "5",
        name: "Madhuram Kulshrestha ",

        image:
          "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733644935/bash/members/IMG-20241127-WA0100_-_MADHURAM_KULSHRESTHA_22BCE10828_rmaprm.jpg",
        quote: "Event Coordinator",
      },
    ],
  },
  // Add other teams here
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
