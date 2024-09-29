import ChoiceSelectionBox from "@/components/atoms/common/choiceSelectionBox";
import HighLightText from "@/components/atoms/common/highlightText";
import MultipleChoice from "@/components/atoms/common/multipleChoice";
import SectionSwitchBtn from "@/components/atoms/common/sectionSwitchBtn";
import ThemeText from "@/components/atoms/common/themeText";
import { useLessonChallenge } from "@/store/useLessonChallenge";
import Image from "next/image";
import { useState } from "react";

type Props = {
  handleClick: () => void;
};

const MemoryAddress = ({ handleClick }: Props) => {
  const [quesAState, setQuestA] = useState(quesADefaultState);
  const { initialLessonChallenges: challenges } = useLessonChallenge();

  return (
    <div className="mx-5 pb-10">
      <Image
        src={"/allocating_memory_1.png"}
        alt={"Allocating Memory"}
        height={"358"}
        width={"540"}
        className="mx-auto"
      />
      <ThemeText variant={"title"} className="mt-5">
        Memory Addresses
      </ThemeText>
      <ThemeText className="mt-5">
        အရင် သင်ခန်းစာမှာပြောသွား Array, Record အစရှိတဲ့ Data structure တွေ
        အားလုံးဟာ computer ရဲ့ram အပေါ်မှာ program run နေစဉ်အတွင်း သီးသန့်
        location address တစ်ခုစီဖြင့် တည်ရှိနေတာ ဖြစ်ပါတယ်။
      </ThemeText>
      <ThemeText className="mt-5">
        computer memory ကို Unique location address
        တစ်ခုစီရှိတဲ့အခန်းပေါင်းမြောက်များစွာ နဲ့ ဖွဲ့စည်းထား တဲ့နေရာတစ်ခုလို့
        ရှုမြင်နိုင်ပါတယ်။
      </ThemeText>
      <ThemeText className="mt-5">
        ကျွန်တော်တို့ ရေးထားတဲ့ programကို run လိုက်ပီဆိုတာနဲ့ computer ဟာ code
        ထဲမှာပါတဲ့ data structure တစ်ခုချင်းစီတိုင်းအတွက် ram ပေါ်က
        လွတ်တဲ့အခန်းတစ်ခုချင်းစီမှာသွားသိမ်းထားပါတယ်။
      </ThemeText>
      <div className="rounded-md border border-slate-200 my-5 p-5">
        <ThemeText>
          ဒီမှာ သတိပြုကမှာက code ရေးတဲ့အခါ ကျွန်တော်တို့ ကြေညာထားတဲ့
          variable,function,class စသည်တို့ဟာလည်း ramအပေါ်မှာ address တစ်ခုစီနဲ့
          တည်ရှိနေမှာ ဖြစ်ပါတယ်။
        </ThemeText>
      </div>
      <ThemeText className="mt-5">
        အောက်က diagram ဟာ contract information တွေပါတဲ့ record တစ်ခုကို{" "}
        <HighLightText title="theContract" /> ဆိုတဲ့ variable ထဲမှာ သိမ်းထားတဲ့
        ပုံစံဖြစ်ပါတယ်။
      </ThemeText>
      <Image
        src={"/allocating_memory_2.png"}
        alt={"Allocating Memory 2"}
        height={"270"}
        width={"540"}
        className="mx-auto my-10"
      />
      <ThemeText className="mb-5">
        ဆိုတော့အဲ့ record ဟာ ram ပေါ်ကဘယ် location address မှာတည်ရှိနေတာပါလဲ။
      </ThemeText>
      <ChoiceSelectionBox
        className="mb-14 grid-cols-1"
        strList={[
          "7801",
          "Contact(Ann, 555-1234, friend)",
          "1234",
          "We can't tell",
        ]}
        correctAnswer={[1]}
      />
      <ThemeText className="mb-5">
        ပုံအရ contract informationတွေပါတဲ့ အဆိုပါ record ဟာ ramရဲ့ 7801
        ဆိုတဲ့အခန်းမှာ တည်ရှိနေတာဖြစ်ပါတယ်။ theContract ဆိုတဲ့ variable ဟာ
        runtime မှာ record data structure ရဲ့ value တွေကိုသိမ်းထားတာမဟုတ်ပဲ
        record datastructure ရဲ့ value တည်ရှိတဲ့ memory address ကိုသိမ်းထားတာပါ။
      </ThemeText>
      <ThemeText>
        The variable <HighLightText title="theContact" /> does not contain our
        new contact — it contains the address at which the contact is stored.
      </ThemeText>
      <MultipleChoice
        questionList={questionA}
        questionState={quesAState}
        title="After creating the following contact, what's the value of
            new_contact?"
        challenge={challenges?.[0]}
        customHeader={
          <div>
            <ThemeText>
              After creating the following contact, what&apos;s the value of{" "}
              <HighLightText title="new_contact" /> ?
            </ThemeText>
            <div className="border border-gray-300 p-3 m-10 rounded-md">
              <ThemeText className="text-sm text-gray-600">
                <b>set</b> new_contact <b>to</b> Contact(Don, 555-8998, Dentist)
              </ThemeText>
            </div>
          </div>
        }
        setQuestionState={setQuestA}
        questionUniqueId="#memoryAddressQA1"
      />
      {quesAState.isAnswered && (
        <div>
          <ThemeText className="my-5">
            The actual address at which the contact is stored is arbitrary and
            could be many numbers. It has no use other than to help us find the
            record we created.
          </ThemeText>
          <ThemeText className="my-5">
            For this reason, instead of always referring to a record by its
            address, we use shortcuts.
          </ThemeText>
          <SectionSwitchBtn
            title="Continue"
            className="mt-10 relative"
            buttonWrapperStyle="mx-0"
            handleClick={handleClick}
          />
        </div>
      )}
    </div>
  );
};

const questionA: SciencePlus.MultiChoiceQuestion[] = [
  {
    label: "7801",
    value: "7801",
  },
  {
    label: "Contact(Don, 555-8998, Dentist)",
    value: "contact",
  },
  {
    label: "8791",
    value: "8791",
  },
  {
    label: "We can't tell",
    value: "cant",
  },
];

const quesADefaultState = {
  value: "",
  correctAnswer: "cant",
  isAnswered: false,
  isCorrect: false,
};

export default MemoryAddress;
