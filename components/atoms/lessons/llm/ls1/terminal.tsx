import ThemeText from "@/components/atoms/common/themeText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { corpus } from "@/mock/smallLangModel";
import { useRect } from "@dnd-kit/core/dist/hooks/utilities";
import { randomBytes } from "crypto";
import { RefreshCcw } from "lucide-react";
import { useRef, useState } from "react";

const Terminal = () => {
  const [word, setWord] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [randomIndex, setRandomIdx] = useState<number>();
  const [isSearching, setIsSearching] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    setIsSearching(true);
    setWord(word.replace(/\s+/g, " ").trim());
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsSearching(false);
      word == "the" ? showRandomText() : showError();
    }, 1500);
  };

  const showRandomText = () => {
    setRandomIdx(Math.floor(Math.random() * 31));
  };

  const handleRegenerate = () => {
    console.log("randomIndex::", randomIndex);
    setIsSearching(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsSearching(false);
      word == "the" ? regenerateResponse() : showError();
    }, 1500);
  };

  const regenerateResponse = () => {
    if (randomIndex !== undefined && randomIndex < corpus.length - 1) {
      setRandomIdx(randomIndex + 1);
    } else {
      setRandomIdx(0);
    }
  };

  const handleReset = () => {
    console.log("aa");
    setIsSearching(false);
    setWord("");
    setIsError(false);
    setRandomIdx(undefined);
  };

  const showError = () => {
    setIsError(true);
    setRandomIdx(undefined);
  };

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
        {isSearching && (
          <div className="w-2 h-4 bg-white absolute top-10 left-4 animate-showHide"></div>
        )}
        {randomIndex !== undefined && !isSearching && (
          <div className=" absolute top-10 left-4 mr-2">
            <ThemeText className="text-white text-xs font-mono">
              {corpus[randomIndex]}
            </ThemeText>
          </div>
        )}
        {isError && (
          <div className=" absolute top-10 left-4">
            <ThemeText className="text-red-500 text-xs font-mono">
              Input error: Missing text in corpus
            </ThemeText>
          </div>
        )}
        <div
          className="h-[48px] rounded-lg flex items-center justify-end "
          style={{ background: "#1c1c1c" }}
        >
          {!isSearching && randomIndex == undefined && !isError && (
            <>
              <ThemeText className="font-mono text-white text-sm">
                {word.length}/30
              </ThemeText>
              <Button
                className="pt-1 lg:pt-2 px-2 pb-1 m-3 h-[30px] text-xs capitalize"
                disabled={word.length == 0 || isSearching}
                onClick={handleClick}
              >
                Submit
              </Button>
            </>
          )}
          {isSearching && (
            <div>
              <Button
                className="pt-1 lg:pt-2 px-2 pb-1 m-3 h-[30px] text-xs capitalize"
                onClick={() => {
                  setIsSearching(false);
                }}
              >
                Stop Generating
              </Button>
            </div>
          )}
          {randomIndex !== undefined && !isSearching && (
            <div className="flex flex-row items-center justify-between">
              <div
                className="flex flex-row items-center flex-1 active:opacity-50 hover:cursor-pointer"
                onClick={handleReset}
              >
                <ThemeText className="text-xs font-mono text-white">
                  Start Over
                </ThemeText>
                <RefreshCcw className="w-5 h-5 ml-2 text-white" />
              </div>

              <Button
                className="pt-1 lg:pt-2 px-2 pb-1 m-3 h-[30px] text-xs capitalize"
                onClick={handleRegenerate}
              >
                Regenerate
              </Button>
            </div>
          )}
          {isError && (
            <div className="flex flex-row items-center justify-between">
              <div
                className="flex flex-row items-center flex-1 active:opacity-50 hover:cursor-pointer"
                onClick={handleReset}
              >
                <ThemeText className="text-xs font-mono text-white">
                  Start Over
                </ThemeText>
                <RefreshCcw className="w-5 h-5 ml-2 text-white" />
              </div>

              <Button
                className="pt-1 lg:pt-2 px-2 pb-1 m-3 h-[30px] text-xs capitalize"
                onClick={() => setIsError(false)}
              >
                Ok
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
