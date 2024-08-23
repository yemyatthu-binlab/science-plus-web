import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { title } from "process";
import { HTMLAttributes } from "react";

type Props = {
  handleClick: () => void;
  title: string;
  buttonWrapperStyle?: ClassValue;
} & HTMLAttributes<HTMLDivElement>;

const SectionSwitchBtn = ({
  handleClick,
  className,
  title,
  buttonWrapperStyle,
  ...props
}: Props) => {
  return (
    <div
      className={cn(
        "my-5 w-full absolute bottom-0 right-0 md:relative",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex-shrink items-center mx-4 md:mx-0",
          buttonWrapperStyle
        )}
      >
        <Button onClick={handleClick} variant="black">
          {title}
        </Button>
      </div>
    </div>
  );
};

export default SectionSwitchBtn;
