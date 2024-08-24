import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type Props = {
  title: string;
} & HTMLAttributes<HTMLDivElement>;
const HighLightText = ({ title, className, ...props }: Props) => {
  return (
    <span
      className={cn(
        "bg-gray-200 p-1 text-sm rounded-sm py-1 px-2 leading-7 ",
        className
      )}
    >
      {title}
    </span>
  );
};

export default HighLightText;
