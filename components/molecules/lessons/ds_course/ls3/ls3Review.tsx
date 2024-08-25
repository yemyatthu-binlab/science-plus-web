import SectionSwitchBtn from "@/components/atoms/common/sectionSwitchBtn";
import ThemeText from "@/components/atoms/common/themeText";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Ls3Review = () => {
  const router = useRouter();
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
        Review And Reflect
      </ThemeText>
      <ThemeText className="mt-5">
        We&apos;ve seen how we can manipulate records and pointers in code.
        Understanding how pointers work in memory is key to understanding how
        more complex data structures are designed.
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

export default Ls3Review;
