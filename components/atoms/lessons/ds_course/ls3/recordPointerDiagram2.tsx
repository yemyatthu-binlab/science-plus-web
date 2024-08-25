import Image from "next/image";
import SVGSketch2 from "./svgSketchDiagram2";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import ThemeText from "@/components/atoms/common/themeText";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RecordPointerDiagram2 = () => {
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

  const showNo = () => {
    if (activeItem == 2) return 2;
    else if (activeItem == 3) return 5;
    else if (activeItem >= 4) return 6;
    return "";
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <SVGSketch2 />
        {activeItem >= 2 && (
          <div
            className={cn(
              "w-[48px] h-[48px] absolute top-[51px] right-[51px]",
              activeItem <= 4 && colorHightlight ? "bg-orange-200" : "bg-white"
            )}
          >
            <ThemeText className="text-center mt-[10px]">{showNo()}</ThemeText>
          </div>
        )}

        <div
          className={cn(
            "w-[270px] h-[52px] border border-gray-500 rounded-md absolute top-[130px] right-[23px]",
            activeItem !== 5 && activeItem == 2
              ? "border-green-600 bg-green-50"
              : "border-gray-500"
          )}
        >
          <div className="ml-4 mt-[13px]">
            <ThemeText
              className={cn(
                "text-sm",
                activeItem !== 5 && activeItem == 2 ? "text-green-700 " : "text-black"
              )}
            >
              <b>set</b>
              {" dogPosition->row"} <b>to</b> 2
            </ThemeText>
          </div>
        </div>
        <div
          className={cn(
            "w-[270px] h-[52px] border border-gray-500 rounded-md absolute top-[192px] right-[23px]",
            activeItem !== 5 && activeItem == 3 ? "border-green-600 bg-green-50" : "border-gray-500"
          )}
        >
          <div className="ml-4 mt-[13px]">
            <ThemeText
              className={cn(
                "text-sm",
                activeItem !== 5 && activeItem == 3 ? "text-green-700 " : "text-black"
              )}
            >
              <b>set</b> {" catPosition->row"} <b>to</b> 5
            </ThemeText>
          </div>
        </div>
        <div
          className={cn(
            "w-[270px] h-[70px] border border-gray-500 rounded-md absolute top-[254px] right-[23px]",
            activeItem !== 5 && activeItem == 4 ? "border-green-600 bg-green-50" : "border-gray-500"
          )}
        >
          <div className="ml-4 mt-[13px]">
            <div className="flex flex-col">
              <ThemeText
                className={cn(
                  "text-sm",
                  activeItem !== 5 && activeItem == 4 ? "text-green-700 " : "text-black"
                )}
              >
                <b>set</b> {" catPosition->row"}
              </ThemeText>
              <ThemeText
                className={cn(
                  "text-sm",
                  activeItem !== 5 && activeItem == 4 ? "text-green-700 " : "text-black"
                )}
              >
                <b>to</b> {" dogPosition->row + 1"}
              </ThemeText>
            </div>
          </div>
        </div>
      </div>
      <div className="flex my-3">
        {[0, 0, 0, 0, 0].map((item, idx) => (
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
            setActiveItem((item) => (item < 5 ? item + 1 : 5));
          }}
        >
          <ChevronRight className="h-10 w-10 text-white" />
        </div>
      </div>
    </div>
  );
};

export default RecordPointerDiagram2;
