import SectionSwitchBtn from "@/components/atoms/common/sectionSwitchBtn";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {
  handleClick: () => void;
};

const DSIntro = ({ handleClick }: Props) => {
  return (
    <div>
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
        <SectionSwitchBtn title="Continue" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default DSIntro;
