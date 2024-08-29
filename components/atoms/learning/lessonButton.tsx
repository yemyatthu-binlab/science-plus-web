"use client";

import { Atom, AtomIcon, Check, Crown, ShieldHalf, Star } from "lucide-react";
import Link from "next/link";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import "react-circular-progressbar/dist/styles.css";
import Image from "next/image";
import LessonPath from "../lessons/ds_course/ls3/lessonPath";
import LessonLeftPath from "../lessons/ds_course/ls3/lessonLeftPath";
import LessonRightPath from "../lessons/ds_course/ls3/lessonRightPath";
import ThemeText from "../common/themeText";

type LessonButtonProps = {
  id: number;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
  lessonRoute: string;
  lessonTitle: string;
};

export const LessonButton = ({
  id,
  index,
  totalCount,
  locked,
  current,
  percentage,
  lessonRoute,
  lessonTitle,
}: LessonButtonProps) => {
  const cycleLength = 2;
  const cycleIndex = index % cycleLength;

  let indentationLevel;

  if (cycleIndex <= 2) indentationLevel = cycleIndex;
  else if (cycleIndex <= 4) indentationLevel = 4 - cycleIndex;
  else if (cycleIndex <= 6) indentationLevel = 4 - cycleIndex;
  else indentationLevel = cycleIndex - 8;

  const rightPosition = indentationLevel * -80;

  const isFirst = index === 0;
  const isLast = index === totalCount;
  const isCompleted = !current && !locked;

  const Icon = isCompleted ? Check : isLast ? Crown : AtomIcon;

  return (
    <div style={{ pointerEvents: locked ? "none" : "auto", marginLeft: -75 }}>
      <div
        className="relative"
        style={{
          right: `${rightPosition}px`,
          marginTop: isFirst ? (!isCompleted ? 50 : 0) : 69,
        }}
      >
        {index % 2 == 0 && !isLast && (
          <div className={cn("absolute z-0 top-[32px] right-[-42px]")}>
            <LessonRightPath pathColor={isCompleted ? "#f8f8f8" : "#f8f8f8"} />
          </div>
        )}
        {index % 2 !== 0 && !isLast && (
          <div className={cn("absolute z-0 top-[32px] right-[-200px]")}>
            <LessonLeftPath pathColor={isCompleted ? "#f8f8f8" : "#f8f8f8"} />
          </div>
        )}
        <div className="absolute w-[180px] top-[79px] left-[-70px]">
          <ThemeText className="text-xs text-center text-gray-400">
            {lessonTitle}
          </ThemeText>
        </div>
        <Link
          href={{
            pathname: "/lesson/" + lessonRoute,
            query: {
              id: id,
            },
          }}
          aria-disabled={locked}
        >
          {current ? (
            <div className="relative h-[50px] w-[50px] z-10">
              <div className="absolute -top-12 -left-3 z-10 animate-bounce rounded-xl border-2 bg-white px-3 py-2.5 font-bold uppercase tracking-wide text-green-500">
                Start
                <div
                  className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 transform border-x-8 border-t-8 border-x-transparent"
                  aria-hidden
                />
              </div>
              <CircularProgressbarWithChildren
                value={Number.isNaN(percentage) ? 0 : percentage}
                styles={{
                  path: {
                    stroke: "#4ade80",
                  },
                  trail: {
                    stroke: "#f1f1f1",
                  },
                }}
              >
                <Button
                  size="rounded"
                  variant={locked ? "locked" : "secondary"}
                  className="h-[41px] w-[41px] border-b-8"
                >
                  <Icon
                    className={cn(
                      "h-5 w-5"
                      // locked
                      //   ? "fill-neutral-400 stroke-neutral-400 text-neutral-400"
                      //   : "fill-primary-foreground text-primary-foreground",
                      // isCompleted && "fill-none stroke-[4]"
                    )}
                  />
                </Button>
              </CircularProgressbarWithChildren>
            </div>
          ) : (
            <Button
              size="rounded"
              variant={locked ? "locked" : "secondary"}
              className="h-[41px] w-[41px] border-b-8"
            >
              <Icon
                className={cn(
                  "h-4 w-4",
                  locked
                    ? "fill-neutral-400 stroke-neutral-400 text-neutral-400"
                    : "fill-primary-foreground text-primary-foreground",
                  isCompleted && "fill-none stroke-[4]"
                )}
              />
            </Button>
          )}
        </Link>
      </div>
    </div>
  );
};
