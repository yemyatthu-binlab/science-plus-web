import { cn } from "@/lib/utils";
import { HTMLProps } from "react";

type Props = {
  title: string;
} & HTMLProps<HTMLDivElement>;

const UnOrderList = ({ title, ...props }: Props) => {
  return (
    <div className={cn("flex flex-row mb-4", props.className)}>
      <li></li>
      <p>{title}</p>
    </div>
  );
};
export default UnOrderList;
