import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface MemberCardProps {
  id: string;
  name: string;
  position: string;
  image: string;
  teamSlug?: string;
}

export function MemberCard({
  id,
  name,
  position,
  image,
  teamSlug,
}: MemberCardProps) {
  return (
    <Link href={teamSlug ? `/teams/${teamSlug}` : "#"}>
      <Card className="group overflow-hidden rounded-xl border-2 bg-background transition-all hover:scale-105 hover:bg-background">
        <CardContent className="p-4">
          <div className="text-center">
            <h3 className="mb-2 text-lg font-semibold text-white">{name}</h3>
            <div className="relative mx-auto mb-4 aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
            </div>
            <p className="text-sm text-gray-300">{position}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
