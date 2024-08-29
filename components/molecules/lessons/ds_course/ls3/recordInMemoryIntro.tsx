import DragAndDrop from "@/components/atoms/common/dragAndDrop";
import SectionSwitchBtn from "@/components/atoms/common/sectionSwitchBtn";
import ThemeText from "@/components/atoms/common/themeText";
import Image from "next/image";

type Props = {
  handleClick: () => void;
};
const RecordInMemoryIntro = ({ handleClick }: Props) => {
  return (
    <div className="mx-5 pb-10">
      <Image
        src={"/record_in_memory_1.png"}
        alt={"record in memory intro"}
        height={"200"}
        width={"300"}
        className="mx-auto"
      />
      <ThemeText variant={"title"} className="mt-14">
        Record In Memory
      </ThemeText>
      <ThemeText className="mt-5">
        In this lesson, we&apos;ll investigate how data structures are stored in
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

export default RecordInMemoryIntro;
