import SectionSwitchBtn from "@/components/atoms/common/sectionSwitchBtn";
import ThemeText from "@/components/atoms/common/themeText";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Lesson1Review = () => {
  const router = useRouter();
  return (
    <div className="mx-5 pb-10">
      <Image
        src={"/ds_ls1_intro1.png"}
        alt={"Data Structure Intro"}
        height={"250"}
        width={"460"}
      />
      <ThemeText variant={"title"} className="mb-5 mt-10">
        Review and Reflect
      </ThemeText>
      <ThemeText className="mt-5">
        ဒီသင်ခန်းစာမှာ data structure ဆိုတာ ဘာလဲရယ် basic data structure
        တွေဖြစ်ကြတဲ့ array၊ record တို့အကြောင်းအကြမ်းဖျင်း
        ရှင်းပြသွားတာဖြစ်ပါတယ်။
      </ThemeText>
      <ThemeText className="mt-5 mb-10">
        နောက်သင်ခန်းစာမှာတော့ array တို့ record တို့ memory ပေါ်မှာ
        ဘယ်လိုနေရာယူလဲဆိုတာ ဆက်လက်ရှင်းသွားမှာဖြစ်ပါတယ်။
      </ThemeText>
      <SectionSwitchBtn
        title="Finish lesson"
        handleClick={() => {
          router.push("/learn");
        }}
      />
    </div>
  );
};

export default Lesson1Review;
