import { MemberCard } from "./member-card";

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
    name: "Tanya Chaturvedi",
    position: "Joint Secretary",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733644482/bash/members/IMG_3541_-_Tanya_Chaturvedi_qwfwza.jpg",
    teamSlug: "board",
  },
  {
    id: "3",
    name: "Hemansh Bhagtani",
    position: "Secretary",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733644684/bash/members/IMG-20240921-WA0012_-_HEMANSH_BHAGTANI_22BCE10673_bs1gee.jpg",
    teamSlug: "board",
  },
  {
    id: "4",
    name: "Nisarg Gajjar",
    position: "Treasurer",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733644795/bash/members/dp1_-_NISARG_VINODKUMAR_GAJJAR_22BCE11142_v0ig0f.jpg",
    teamSlug: "board",
  },
  {
    id: "5",
    name: "Madhuram Kulshrestha ",
    position: "Event Coordinator ",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733644935/bash/members/IMG-20241127-WA0100_-_MADHURAM_KULSHRESTHA_22BCE10828_rmaprm.jpg",
    teamSlug: "board",
  },
  {
    id: "6",
    name: "Siddharth Mohril",
    position: "Design Lead",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733645316/bash/members/20240623_094446_2_-_SIDDHARTH_MOHRIL_22BAI10132_pnnsij.jpg",
    teamSlug: "design",
  },
  {
    id: "7",
    name: "Shreyansh Uttam",
    position: "Social Media Lead",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733645539/bash/members/IMG_6217_-_Shreyansh_Uttam_lzrkpd.jpg",
    teamSlug: "social",
  },
  {
    id: "8",
    name: "Om Mishra",
    position: "Tech Lead",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733674921/bash/members/WhatsApp_Image_2024-12-08_at_1.49.25_PM_ncv6r7.jpg",
    teamSlug: "tech",
  },
  {
    id: "9",
    name: "Jayant Singh Rawat",
    position: "Event Management Lead",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733645670/bash/members/IMG_6702_-_Jayant_Singh_Rawat_23BCE11823_jjjver.jpg",
    teamSlug: "event",
  },
  {
    id: "10",
    name: "Aastha Adhikari ",
    position: "PR & Outreach Lead",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733646156/bash/members/photo2_-_Aastha_Adhikari_23bai10049_sffnoc.jpg",
    teamSlug: "outreach",
  },
  {
    id: "11",
    name: "Aryaman Jha",
    position: "Operations Lead",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1733646377/bash/members/WhatsApp_Image_2024-12-06_at_09.15.52_53ff4b01_-_aryaman_qklawh.jpg",
    teamSlug: "operations",
  },
  {
    id: "12",
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <MemberCard key={member.id} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}
