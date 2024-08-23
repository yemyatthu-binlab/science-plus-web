import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HTMLProps, useState } from "react";

type Props = {
  strList: string[];
  correctAnswer: number;
} & HTMLProps<HTMLDivElement>;

const ChoiceSelectionBox = ({ strList, correctAnswer, ...props }: Props) => {
  const [selectedState, setSelectedState] = useState<number>();
  return (
    <div className={cn("grid grid-cols-2 gap-5", props.className)}>
      {strList.map((item, idx) => (
        <div>
          <Button
            variant={"outlineGrey"}
            onClick={() => {
              setSelectedState(idx + 1);
            }}
            className={cn(
              selectedState == idx + 1 &&
                (selectedState == correctAnswer
                  ? "border-green-400 bg-green-50 hover:bg-green-100"
                  : "border-red-500 bg-red-50 hover:bg-red-100")
            )}
          >
            {item}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ChoiceSelectionBox;
