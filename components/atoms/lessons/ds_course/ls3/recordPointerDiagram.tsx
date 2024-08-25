import { cn } from "@/lib/utils";
import { SketchSVG } from "./svgSketchDiagram";
import { act, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ThemeText from "@/components/atoms/common/themeText";
import HighLightText from "@/components/atoms/common/highlightText";
import MultipleChoice from "@/components/atoms/common/multipleChoice";
import SectionSwitchBtn from "@/components/atoms/common/sectionSwitchBtn";

const RecordPointerDiagram = () => {
  const [activeItem, setActiveItem] = useState(1);
  const [colorHightlight, setColotHighlight] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setColotHighlight(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setColotHighlight(false);
    }, 500);
  }, [activeItem]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <SketchSVG />
        <div
          className={cn(
            "absolute top-[1px] right-[151px] w-[48px] h-[48px]",
            [1, 2].includes(activeItem) && colorHightlight
              ? "bg-orange-200"
              : "bg-white"
          )}
        >
          <ThemeText className="text-center mt-[10px]">
            <b>{activeItem == 1 ? 4 : 5}</b>
          </ThemeText>
        </div>
        <div
          className={cn(
            "absolute top-[61px] right-[151px] w-[48px] h-[48px]",
            activeItem == 3 && colorHightlight ? "bg-orange-200" : "bg-white"
          )}
        >
          <ThemeText className="text-center mt-[11px]">
            <b>{activeItem < 3 ? -9 : 2}</b>
          </ThemeText>
        </div>
        <div
          className={cn(
            "absolute top-[76px] right-[51.5px] w-[48px] h-[48px]",
            activeItem == 4 && colorHightlight ? "bg-orange-200" : "bg-white"
          )}
        >
          <ThemeText className="text-center mt-[11px]">
            <b>{activeItem == 4 ? 6 : 0}</b>
          </ThemeText>
        </div>
        <div
          className={cn("absolute top-[76px] right-[1px] w-[48px] h-[48px]")}
        >
          <ThemeText className="text-center mt-[11px]">
            <b>8</b>
          </ThemeText>
        </div>

        <div
          className={cn(
            "w-[270px] h-[52px] border rounded-md  absolute top-[190px] right-[23px]",
            activeItem == 2 ? "border-green-600 bg-green-50" : "border-gray-500"
          )}
        >
          <div className="ml-4 mt-[13px]">
            <ThemeText
              className={cn(
                "text-sm",
                activeItem == 2 ? "text-green-700" : "text-black"
              )}
            >
              <b>set</b> dogSpots <b>to</b> dogSpots + 1
            </ThemeText>
          </div>
        </div>
        <div
          className={cn(
            "w-[270px] h-[52px] border border-gray-500 rounded-md absolute top-[253px] right-[23px]",
            activeItem == 3 ? "border-green-600 bg-green-50" : "border-gray-500"
          )}
        >
          <div className="ml-4 mt-[13px]">
            <ThemeText
              className={cn(
                "text-sm",
                activeItem == 3 ? "text-green-700 " : "text-black"
              )}
            >
              <b>set</b> x <b>to</b> 7 - dogSpots
            </ThemeText>
          </div>
        </div>
        <div
          className={cn(
            "w-[270px] h-[52px] border border-gray-500 rounded-md absolute top-[313px] right-[23px]",
            activeItem == 4 ? "border-green-600 bg-green-50" : "border-gray-500"
          )}
        >
          <div className="ml-4 mt-3">
            <ThemeText
              className={cn(
                "text-sm",
                activeItem == 4 ? "text-green-700" : "text-black"
              )}
            >
              <b>set</b> {"catPosition->row"} <b>to</b> 4 + x
            </ThemeText>
          </div>
        </div>

        <div className="absolute top-[15px] right-[212px]">
          <ThemeText className="text-xs">dogSpots</ThemeText>
        </div>
        <div className="absolute top-[78px] right-[212px]">
          <ThemeText className="text-xs">x</ThemeText>
        </div>
        <div className="absolute top-[138px] right-[212px]">
          <ThemeText className="text-xs">catPosition</ThemeText>
        </div>
        <div className="absolute top-[58px] right-[75px]">
          <ThemeText className="text-xs">row</ThemeText>
        </div>
        <div className="absolute top-[58px] right-[5px]">
          <ThemeText className="text-xs">column</ThemeText>
        </div>
      </div>
      <div className="flex my-3">
        {[0, 0, 0, 0].map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "w-2 h-2 rounded-full mx-1",
              activeItem == idx + 1 ? "bg-black" : "bg-gray-300"
            )}
          ></div>
        ))}
      </div>
      <div className="flex mt-3">
        <div
          className="bg-black rounded-md mr-3 cursor-pointer active:opacity-75"
          onClick={() => {
            setActiveItem((item) => (item > 1 ? item - 1 : 1));
          }}
        >
          <ChevronLeft className="h-10 w-10 text-white" />
        </div>
        <div
          className="bg-black rounded-md ml-3 cursor-pointer active:opacity-75"
          onClick={() => {
            setActiveItem((item) => (item < 4 ? item + 1 : 4));
          }}
        >
          <ChevronRight className="h-10 w-10 text-white" />
        </div>
      </div>
    </div>
  );
};


export default RecordPointerDiagram;
