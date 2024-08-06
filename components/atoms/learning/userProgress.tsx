import { Button } from "@/components/ui/button";
import { InfinityIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  activeCourse: any;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  points,
  hearts,
  hasActiveSubscription,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href={"/courses"}>
        <Button variant={"ghost"}>
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            // className="rounded-md"
            width={"32"}
            height={"32"}
          />
        </Button>
      </Link>
      <Link href={"/shop"}>
        <Button variant={"ghost"} className="text-orange-500">
          <Image
            src={"points.svg"}
            alt={activeCourse.title}
            className="mr-2"
            width={"28"}
            height={"28"}
          />
          {points}
        </Button>
      </Link>
      <Link href={"/shop"}>
        <Button variant={"ghost"} className="text-orange-500">
          <Image
            src={"heart.svg"}
            alt={activeCourse.title}
            className="mr-2"
            width={"28"}
            height={"28"}
          />
          {hasActiveSubscription ? (
            <InfinityIcon className="h-4 w-4 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
};
