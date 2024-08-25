import SectionSwitchBtn from "@/components/atoms/common/sectionSwitchBtn";
import ThemeText from "@/components/atoms/common/themeText";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Ls2Review = () => {
  const router = useRouter();
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
        Review And Reflect
      </ThemeText>
      <ThemeText className="mt-5">
        We&apos;ve seen how data structures are stored in computer memory with
        memory addresses. Instead of writing out the memory address each time,
        we use pointers and arrow notation.
      </ThemeText>
      <ThemeText className="mt-5">
        Next, you&apos;ll see how pointers are used in code.
      </ThemeText>
      <SectionSwitchBtn
        title="Finish lesson"
        className="relative mt-10"
        buttonWrapperStyle="mx-0"
        handleClick={() => {
          router.push("/learn");
        }}
      />
    </div>
  );
};

export default Ls2Review;
