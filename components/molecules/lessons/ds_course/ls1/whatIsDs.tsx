import ChoiceSelectionBox from "@/components/atoms/common/choiceSelectionBox";
import SectionSwitchBtn from "@/components/atoms/common/sectionSwitchBtn";
import ThemeText from "@/components/atoms/common/themeText";
import UnOrderList from "@/components/atoms/common/unOrderList";
import CodeListWithInput from "@/components/atoms/lessons/ds_course/ls1/codeListWithInput";
import Image from "next/image";

type Props = {
  handleClick: () => void;
};

const WhatIsDs = ({ handleClick }: Props) => {
  return (
    <div className="mx-5 pb-5">
      <h1 className="text-center font-bold text-2xl">
        Data Structures ဆိုတာဘာလဲ
      </h1>
      <div className="flex items-center justify-center my-20">
        <Image
          src={"/ds_ls1_intro.png"}
          alt={"Data Structure Intro"}
          height={"250"}
          width={"460"}
        />
      </div>
      <ThemeText className=" mt-2 mb-14">
        Computers have the difficult task of collecting, storing, organizing,
        rearranging, and manipulating data to solve problems.
      </ThemeText>
      <p className=" mt-2 mb-5">
        Suppose you are using a computer to search for documents with your
        license plate number, LIC 1234. 1234. Let&apos;s assume the following:
      </p>
      <UnOrderList title="Your computer can store around 50000 documents." />
      <UnOrderList
        className="mb-5"
        title="Your computer takes about one second to read through 500 documents"
      />
      <p className="mt-2 mb-5">
        Approximately how long will it take your computer to read through all of
        its stored data to find the files that contain LIC 1234 ?
      </p>
      <ChoiceSelectionBox
        className="mb-14"
        strList={[
          "A fraction of a second",
          "About a second",
          "About 100 seconds",
          "About an hour",
        ]}
        correctAnswer={3}
      />
      <p className="mt-2 mb-14">
        The computer can read through 500 documents in a second, so in one
        hundred seconds the computer can read 500 × 100 = 50 000 documents.
      </p>
      <p className="mt-2 mb-5">
        But if you've ever used the search feature on your computer, you know
        that it's much faster than this. It organizes data in a way that doesn't
        require reading through its entire storage each time.
      </p>
      {/* <p className="mt-2 mb-14">
        Computers execute instructions through code, rather than through
        imprecise instructions like “search through these documents.“
      </p>
      <CodeListWithInput /> */}
      <p className="mt-2 mb-5">
        Next, we'll investigate a data structure for storing multiple values
        together.
      </p>
      <SectionSwitchBtn
        className="mb-5 relative"
        buttonWrapperStyle="mx-0"
        title="Continue"
        handleClick={handleClick}
      />
    </div>
  );
};

export default WhatIsDs;
