import ThemeText from "@/components/atoms/common/themeText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Terminal = () => {
  const [word, setWord] = useState("");
  return (
    <div className="bg-black mt-14 rounded-lg">
      <div
        className="h-[47px] rounded-t-lg flex items-center"
        style={{ background: "#1c1c1c" }}
      >
        <div className="bg-black p-1 ml-4">
          <ThemeText className="text-green-400 text-xs" variant={"code"}>
            T&C
          </ThemeText>
        </div>
      </div>
      <div className="relative">
        <textarea
          maxLength={30}
          placeholder="Try typing 'the' and hit submit."
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className="bg-black w-full h-[200px] select-none resize-none text-green-400 text-xs font-mono p-4 caret-green-400 placeholder:text-muted-foreground focus-visible:outline-none"
        ></textarea>
        <div className="w-2 h-4 bg-white absolute top-10 left-4 animate-showHide"></div>
        <div
          className="h-[48px] rounded-lg flex items-center justify-end "
          style={{ background: "#1c1c1c" }}
        >
          <ThemeText className="font-mono text-white text-sm">
            {word.length}/30
          </ThemeText>
          <Button className="pt-1 lg:pt-2 px-2 pb-1 m-3 h-[30px] text-xs capitalize">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
