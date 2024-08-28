import { cn } from "@/lib/utils";
import { HTMLAttributes, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

type Props = {
  codeString: string;
} & HTMLAttributes<HTMLDivElement>;

const HighLightCode = ({ codeString, className }: Props) => {
  const myHtml = hljs.highlight(codeString, { language: "javascript" }).value;
  return (
    <pre className={cn("p-3 rounded-md bg-black text-white", className)}>
      <code dangerouslySetInnerHTML={{ __html: myHtml }} />
    </pre>
  );
};

export default HighLightCode;
