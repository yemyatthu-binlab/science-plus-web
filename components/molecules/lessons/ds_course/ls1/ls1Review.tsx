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
        Computers collect, organize, access, and manipulate data with data
        structures. Arrays and records are two types of data structures.
      </ThemeText>
      <ThemeText className="mt-5 mb-10">
        Next, we'll investigate how computers store data structures in memory.
      </ThemeText>
      <SectionSwitchBtn title="Finish lesson" handleClick={() => {router.push("/learn")}} />
    </div>
  );
};

export default Lesson1Review;
