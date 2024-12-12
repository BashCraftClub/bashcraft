import { Card, CardContent } from "@/components/ui/card";
import { MemberCard } from "./member-card";
import Image from "next/image";
import Link from "next/link";
import { UserRoundPlus } from "lucide-react";

const teamMembers = [
  {
    id: "1",
    name: "Aditya Joshi",
    position: "Founder & President ",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733644539/bash/members/IMG_7832_-_Aditya_sbfssh.jpg",
    teamSlug: "board",
  },
  {
    id: "2",
    name: "Prakhar Pande",
    position: "Vice President",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1734022419/bash/members/WhatsApp_Image_2024-12-11_at_13.57.04_6f9e42ab_-_Prakhar_Pande_w8zf2p.jpg",
    teamSlug: "board",
  },
  {
    id: "3",
    name: "Tanya Chaturvedi",
    position: "Joint Secretary",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733644482/bash/members/IMG_3541_-_Tanya_Chaturvedi_qwfwza.jpg",
    teamSlug: "board",
  },
  {
    id: "4",
    name: "Hemansh Bhagtani",
    position: "Secretary",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733644684/bash/members/IMG-20240921-WA0012_-_HEMANSH_BHAGTANI_22BCE10673_bs1gee.jpg",
    teamSlug: "board",
  },
  {
    id: "5",
    name: "Aryaman Jha",
    position: "Operations Lead",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733646377/bash/members/WhatsApp_Image_2024-12-06_at_09.15.52_53ff4b01_-_aryaman_qklawh.jpg",
    teamSlug: "board",
  },
  {
    id: "6",
    name: "Nisarg Gajjar",
    position: "Treasurer",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733644795/bash/members/dp1_-_NISARG_VINODKUMAR_GAJJAR_22BCE11142_v0ig0f.jpg",
    teamSlug: "board",
  },
  {
    id: "7",
    name: "Madhuram Kulshrestha ",
    position: "Event Coordinator ",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733644935/bash/members/IMG-20241127-WA0100_-_MADHURAM_KULSHRESTHA_22BCE10828_rmaprm.jpg",
    teamSlug: "board",
  },
  {
    id: "8",
    name: "Brajesh Mohanty",
    position: "Assistant Operations Lead",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1734022708/bash/members/IMG-20241017-WA0136_1_zksh1z.jpg",
    teamSlug: "board",
  },
  {
    id: "9",
    name: "Siddharth Mohril",
    position: "Design Lead",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733645316/bash/members/20240623_094446_2_-_SIDDHARTH_MOHRIL_22BAI10132_pnnsij.jpg",
    teamSlug: "design",
  },
  {
    id: "10",
    name: "Shreyansh Uttam",
    position: "Social Media Lead",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733645539/bash/members/IMG_6217_-_Shreyansh_Uttam_lzrkpd.jpg",
    teamSlug: "social",
  },
  {
    id: "11",
    name: "Om Mishra",
    position: "Tech Lead",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733674921/bash/members/WhatsApp_Image_2024-12-08_at_1.49.25_PM_ncv6r7.jpg",
    teamSlug: "tech",
  },
  {
    id: "12",
    name: "Jayant Singh Rawat",
    position: "Event Management Lead",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733645670/bash/members/IMG_6702_-_Jayant_Singh_Rawat_23BCE11823_jjjver.jpg",
    teamSlug: "event",
  },
  {
    id: "13",
    name: "Aastha Adhikari ",
    position: "PR & Outreach Lead",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733646156/bash/members/photo2_-_Aastha_Adhikari_23bai10049_sffnoc.jpg",
    teamSlug: "outreach",
  },

  {
    id: "14",
    name: "Himanshu kumar singh ",
    position: "Content Lead",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733646249/bash/members/HKS_-_HIMANSHU_KUMAR_SINGH_22BCE10903_zelohe.jpg",
    teamSlug: "content",
  },
];

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-center text-4xl font-bold text-white">
          MEET OUR TEAM
        </h1>
        <div className="flex justify-center mb-6">
          <Link href="#" className="w-full sm:w-1/2 lg:w-1/3">
            <Card className="group overflow-hidden rounded-xl border-2 bg-background transition-all hover:scale-105 hover:bg-background">
              <CardContent className="p-4">
                <div className="text-center">
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Dr. Dheresh Soni
                  </h3>
                  <div className="relative mx-auto mb-4 aspect-square w-full overflow-hidden rounded-lg">
                    <Image
                      src="https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733728911/dhiresh-soni_kmrlpx.jpg"
                      alt="Dr. Dheresh Soni"
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <p className="text-sm text-gray-300">Faculty Cordinator</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <MemberCard key={member.id} {...member} />
          ))}
          <Card className="group overflow-hidden rounded-xl border-2 bg-background transition-all hover:scale-105 hover:bg-background">
            <CardContent className="p-4">
              <div className="text-center">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  This Could Be You
                </h3>
                <div className="relative mx-auto mb-4 aspect-square w-full overflow-hidden rounded-lg">
                  <Link href={"/"}>
                    <UserRoundPlus className="w-full h-full text-gray-300 opacity-20" />
                  </Link>
                </div>
                <p className="text-sm text-gray-300">
                  We Will Be Hiring Soon ...
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
