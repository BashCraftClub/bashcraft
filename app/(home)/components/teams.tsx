import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Faculty Cordinatior",
      src: "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1727955924/Dr.-Dheresh-Soni-C_elwdbf.jpg",
    },
    {
      title: "President",
      src: "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1727956017/IMG_4002_rmbp9j.jpg",
    },
    {
      title: "Tech Lead",
      src: "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1727956499/WhatsApp_Image_2024-09-28_at_7.39.36_PM_1_ho7idq.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}
