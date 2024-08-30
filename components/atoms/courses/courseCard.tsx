import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  id: number;
  title: string;
  imageSrc: string;
  disabled?: boolean;
  active?: boolean;
  onCLick: (id: number) => void;
};
const CourseCard = ({
  title,
  onCLick,
  id,
  imageSrc,
  disabled,
  active,
}: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div
        onClick={() => {
          onCLick(id);
        }}
        className={cn(
          "border rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:opacity-70 flex flex-col items-center justify-between w-[150px] p-3 pb-6",
          disabled && "pointer-events-none opacity-50"
        )}
      >
        {/* <div className="min-[24px] w-full flex items-center justify-end">
        {active && (
          <div className="rounded-md bg-green-600 flex items-center justify-center p-1.5">
            <Check className="text-white stroke-[4] h-4 width-4" />
          </div>
        )}
      </div> */}
        <div className="relative">
          {active && (
            <div className="absolute right-[-27px] top-[-5px]">
              <div className="rounded-md bg-green-500 flex items-center justify-center p-1.5">
                <Check className="text-white stroke-[4] h-2 w-2" />
              </div>
            </div>
          )}
          <div>
            <Image
              src={imageSrc}
              alt={title}
              height={80}
              width={80}
              className="rounded-lg drop-shadow-md object-cover"
            />
          </div>
        </div>
      </div>
      <p className="text-gray-500 text-sm text-center font-bold mt-3">
        {title}
      </p>
    </div>
  );
};

export default CourseCard;
