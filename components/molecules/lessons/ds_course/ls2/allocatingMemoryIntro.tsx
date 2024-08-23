import SectionSwitchBtn from "@/components/atoms/common/sectionSwitchBtn";
import ThemeText from "@/components/atoms/common/themeText";
import Image from "next/image";

type Props = {
  handleClick: () => void;
};
const AllocatingMemoryIntro = ({ handleClick }: Props) => {
  return (
    <div className="mx-5 pb-10">
      <Image
        src={"/allocating_memory.png"}
        alt={"Data Structure Intro"}
        height={"200"}
        width={"300"}
        className="mx-auto"
      />
      <ThemeText variant={"title"} className="mt-14">
        Allocating Memory
      </ThemeText>
      <ThemeText className="mt-5">
        In this lesson, we'll investigate how data structures are stored in
        memory.
      </ThemeText>
      <SectionSwitchBtn
        title="Start lesson"
        className="relative mt-10"
        buttonWrapperStyle="mx-0"
        handleClick={handleClick}
      />
    </div>
  );
};

export default AllocatingMemoryIntro;
