import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
  codeString: string;
} & HTMLAttributes<HTMLDivElement>;

const HighLightCode = ({ codeString, className }: Props) => {
  return (
    <div className={cn("mt-5", className)}>
      <SyntaxHighlighter language="javascript" style={stackoverflowDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default HighLightCode;
