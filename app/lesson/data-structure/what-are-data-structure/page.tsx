"use client";

import { HeaderProgress } from "@/components/atoms/lessons/headerProgress";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const DSLesson = () => {
  return (
    <div>
      <HeaderProgress
        hearts={100}
        percentage={10}
        hasActiveSubscription={false}
      />
      <div className="max-w-[560px] mx-auto mt-5">
        <div className="flex items-center justify-center my-20">
          <Image
            src={"/ds_ls1_intro1.png"}
            alt={"Data Structure Intro"}
            height={"250"}
            width={"460"}
          />
        </div>
        <div className="mx-5">
          <h1 className="text-left font-bold text-2xl">
            Data Structures ဆိုတာဘာလဲ
          </h1>
          <p className="text-sm mt-2">
            ဒီသင်ခန်းစာမှာတော့ data structure ဟာဘာလဲဆိုတာကို ကျွန်တော်နဲ့အတူ
            လေ့လာကြည့်ကြရအောင်။
          </p>
          <div className="my-5 w-full absolute bottom-0 right-0 md:relative">
            <div className="flex-shrink items-center mx-4 md:mx-0">
              <Button variant="black" className="capitalize">
                Start Lesson
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSLesson;
