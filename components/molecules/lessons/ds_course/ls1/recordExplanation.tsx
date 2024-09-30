import HighLightCode from "@/components/atoms/common/highlightCode";
import HighLightText from "@/components/atoms/common/highlightText";
import MultipleChoice from "@/components/atoms/common/multipleChoice";
import SectionSwitchBtn from "@/components/atoms/common/sectionSwitchBtn";
import ThemeText from "@/components/atoms/common/themeText";
import { useLessonChallenge } from "@/store/useLessonChallenge";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  handleClick: () => void;
};

const RecordExplanation = ({ handleClick: moveToNextSection }: Props) => {
  const [quesAState, setQuesAState] = useState(quesADefaultState);
  const [quesBState, setQuesBState] = useState(quesBDefaultState);
  const { initialLessonChallenges: challenges } = useLessonChallenge();
  const [showSectionSwitchBtn, setShowSectionSwitchBtn] = useState(false);
  const [lessonSegment, setLessonSegment] = useState(1);

  useEffect(() => {
    if (lessonSegment == 1) {
      setShowSectionSwitchBtn(quesAState.isAnswered);
    }
    if (lessonSegment == 2) {
      setShowSectionSwitchBtn(quesBState.isAnswered);
    }
  }, [quesAState, quesBState, lessonSegment]);

  const codeString = `const recordEg = {
    name: 'Ann',
    phone: '555-1234',
    relationship: 'friend',
  };`;

  const codeString1 = `console.log(recordEg.name); //Ann`;

  const codeString2 = `console.log(recordEg["name"]) //Ann;
console.log(recordEg.phone) //555-1234;
recordEg.name = "Bea";
console.log(recordEg.name) //Bea`;

  return (
    <div className="mx-5 pb-10">
      <ThemeText variant={"title"}>Records</ThemeText>
      <ThemeText className="my-5">
        အဲ့တော့ ကျွန်တော်တို့က name, phone,relation 3 ခုပါတဲ့ record တစ်ခုအရင်
        create ပီး အဲ့လို record တစ်ခုချင်းစီကို array
        ခန်းတစ်ခန်းချင်းစီမှာသိမ်းထားမှာဖြစ်ပါတယ်။
      </ThemeText>
      <HighLightCode codeString={codeString} />
      <ThemeText className="my-5">
        ဒါဟာ JS မှာ name, phone, relationship field 3 ခုပါတဲ့ record တစ်ခု
        create တဲ့နည်းဖြစ်ပါတယ်။ record data structure ကို JS မှာ object
        လို့ခေါ်ပီး အချို့သော Language တွေမှာ Dictionary လို့ခေါ်ကြပါတယ်။
        အဲ့လို့ <HighLightText title="name : Annn" /> ,{" "}
        <HighLightText title="phone : 555-124" />
        တို့လို key value pair တစ်ခုချင်းစီကို field လို့ခေါ်ပါတယ်။ Arrayခန်း
        တစ်ခန်းချင်းစီက Value ကိုလိုချင်ရင် array ရဲ့ indexကိုသုံးပီးထုတ်ကသလို
        recordထဲမှာ field တစ်ခုချင်းစီရဲ့ value ကိုတော့အဲ့ fieldရဲ့ key
        ကိုသုံးပီး ထုတ်ကမှာ ဖြစ်ပါတယ်။
      </ThemeText>
      <HighLightCode className="my-5" codeString={codeString2} />
      <Image
        src={"/record_explanation.png"}
        alt={"Array Explanation"}
        height={"176"}
        width={"540"}
      />
      <div className="border border-slate-200 rounded-md p-6 mt-5">
        <ThemeText className="text-sm">
          record ဟာ field လို့ခေါ်တဲ့ key value pair တွေအများကြီးကို စုပီး
          သိမ်းလို့ရတဲ့ data structure တစ်ခု ဖြစ်ပါတယ်။
        </ThemeText>
      </div>
      <ThemeText className="mt-10">
        အောက်ပုံဟာ name, phone, relation field 3 ခုစီပါတဲ့ record 3 ခုပါ။
      </ThemeText>
      <Image
        src={"/course-record_explanation2.png"}
        alt={"Record Explanation"}
        height={"176"}
        width={"540"}
        className="mt-5"
      />
      <MultipleChoice
        questionList={questionA}
        questionState={quesAState}
        title="အဲ့တော့ record 3 ခုထဲက Bea ရဲ့ relationship value က ဘာပါလဲ။"
        setQuestionState={setQuesAState}
        questionUniqueId="#recordQA1"
        challenge={challenges?.[2]}
      />
      {lessonSegment >= 2 && (
        <>
          <ThemeText className="mt-10">
            အပေါ်က drawing program မှာ circle canvas တစ်ခုဆွဲမယ်ဆိုပါစို့။
            အဲ့တော့ circle အတွက််််် record တစ်ခု createပီး၊ လိုအပ်တဲ့
            Valueတွေကို record ရဲ့ field တစ်ခုချင်းစီမှာသိမ်းမှာဖြစ်ပါတယ်။
          </ThemeText>

          <Image
            src={"/array_explanation3.png"}
            alt={"Record Explanation"}
            height={"176"}
            width={"540"}
            className="mt-5"
          />

          <MultipleChoice
            questionList={questionB}
            questionState={quesBState}
            title="အဲ့တော့အောက်က value တွေထဲမှာ circle record ထဲမပါနိုင်တဲ့ field name ကဘာဖြစ်နိုင်ပါသလဲ။"
            setQuestionState={setQuesBState}
            questionUniqueId="#recordQA2"
            challenge={challenges?.[3]}
          />
        </>
      )}
      {showSectionSwitchBtn && (
        <SectionSwitchBtn
          title="Continue"
          className="mt-10 relative"
          buttonWrapperStyle="mx-0"
          handleClick={() => {
            lessonSegment < 2
              ? setLessonSegment(lessonSegment + 1)
              : moveToNextSection();
          }}
        />
      )}
    </div>
  );
};

const questionA: SciencePlus.MultiChoiceQuestion[] = [
  {
    label: "Coworker",
    value: "coworker",
  },
  {
    label: "Family",
    value: "family",
  },
  {
    label: "Dentist",
    value: "dentist",
  },
  {
    label: "Impossible to tell",
    value: "impossible",
  },
];

const questionB: SciencePlus.MultiChoiceQuestion[] = [
  {
    label: "Color",
    value: "color",
  },
  {
    label: "Location",
    value: "location",
  },
  {
    label: "Phone Number",
    value: "points",
  },
  {
    label: "Size",
    value: "size",
  },
];

const quesADefaultState = {
  value: "",
  correctAnswer: "family",
  isAnswered: false,
  isCorrect: false,
};

const quesBDefaultState = {
  value: "",
  correctAnswer: "points",
  isAnswered: false,
  isCorrect: false,
};

export default RecordExplanation;
