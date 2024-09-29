import ChoiceSelectionBox from "@/components/atoms/common/choiceSelectionBox";
import SectionSwitchBtn from "@/components/atoms/common/sectionSwitchBtn";
import ThemeText from "@/components/atoms/common/themeText";
import UnOrderList from "@/components/atoms/common/unOrderList";
import Terminal from "@/components/atoms/lessons/llm/ls1/terminal";
import Image from "next/image";

type Props = {
  handleClick: () => void;
};
const NgramModelIntro = ({ handleClick }: Props) => {
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
        Predicting the Next Word
      </ThemeText>
      <ThemeText className="mt-5">
        Imagine you are writing an email. You start a sentence “Thanks for the
        update…”
        <br />
        What would you predict the next word to be?
      </ThemeText>
      <ChoiceSelectionBox
        className="grid grid-cols-4 gap-1 mt-5"
        strList={["On", "About", "Truck", "Info"]}
        correctAnswer={[1, 2, 4]}
      />
      <ThemeText className="mt-10">
        “On” , “about” and “Info“ do make sense, but “truck” does not, even if
        you wrote a lot of emails about trucks.
      </ThemeText>
      <ThemeText className="mt-10">
        Language models predict the next word by assigning a probability to each
        possible next word.
      </ThemeText>
      <ThemeText className="mt-5">
        N-gram language models, while not the same as large language models
        (LLMs), are surprisingly simple and offer a good model to understand how
        this works.
      </ThemeText>
      <ThemeText className="mt-10">
        We trained three different n-gram models, each on one of the following
        corpora:
      </ThemeText>
      <UnOrderList title="Julia Child's Mastering the Art of French Cooking" />
      <UnOrderList title="Terms and Conditions (T&C) agreements of Big Tech companies" />
      <UnOrderList title="Lyrics from Taylor Swift songs" />
      <ThemeText>
        Pick a model and enter some starting words into the prompt. Try “the” if
        you&apos;re lacking inspiration and see what each model gives you.
      </ThemeText>
      <Terminal languageModelType={["Cooking", "T&C", "TSwift"]} />
      {/* <SectionSwitchBtn
        title="Start lesson"
        className="relative mt-10"
        buttonWrapperStyle="mx-0"
        handleClick={handleClick}
      /> */}
    </div>
  );
};

export default NgramModelIntro;
