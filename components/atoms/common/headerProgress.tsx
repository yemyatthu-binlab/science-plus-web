"use client";

import { InfinityIcon, Loader, X } from "lucide-react";
import Image from "next/image";

import { Progress } from "@/components/ui/progress";
import { useExitModal } from "@/store/use-exit-modal";
import { useRouter } from "next/navigation";

type HeaderProps = {
  hearts?: number;
  percentage: number;
  hasActiveSubscription: boolean;
};

export const HeaderProgress = ({
  hearts,
  percentage,
  hasActiveSubscription,
}: HeaderProps) => {
  const router = useRouter();

  return (
    <div className="shadow-md flex flex-row  pb-5">
      <header className="flex w-full items-center justify-between mx-4 pt-[20px] lg:pt-[30px]">
        <X
          onClick={() => {
            router.push("/learn");
          }}
          className="cursor-pointer text-slate-500 transition hover:opacity-75"
        />

        <div className="flex flex-1 mx-4 justify-center">
          <Progress value={percentage} />
        </div>

        <div className="flex items-center font-bold text-rose-500">
          <Image
            src="/heart.svg"
            height={28}
            width={28}
            alt="Heart"
            className="mr-2"
          />
          {hearts == undefined ? (
            <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
          ) : hasActiveSubscription ? (
            <InfinityIcon className="h-6 w-6 shrink-0 stroke-[3]" />
          ) : (
            hearts
          )}
        </div>
      </header>
    </div>
  );
};
