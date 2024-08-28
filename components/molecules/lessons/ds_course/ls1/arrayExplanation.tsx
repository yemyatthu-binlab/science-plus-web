import HighLightCode from "@/components/atoms/common/highlightCode";
import HighLightText from "@/components/atoms/common/highlightText";
import MultipleChoice from "@/components/atoms/common/multipleChoice";
import SectionSwitchBtn from "@/components/atoms/common/sectionSwitchBtn";
import ThemeText from "@/components/atoms/common/themeText";
import UnOrderList from "@/components/atoms/common/unOrderList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useLessonChallenge } from "@/store/useLessonChallenge";
import { ClassValue } from "clsx";
import Image from "next/image";
import { FormEvent, useState } from "react";

type Props = {
  handleClick: () => void;
};

const ArrayExplanation = ({ handleClick }: Props) => {
  const [qa1, setQa1] = useState(quesAdefault);
  const [qa2, setQa2] = useState(quesBdefault);
  const { initialLessonChallenges: challenges } = useLessonChallenge();

  return (
    <div className="mx-5 pb-10">
      <ThemeText variant={"title"}>Arrays</ThemeText>
      <ThemeText className="my-5">
        Array ဟာ linear data structure type တစ်မျိုးဖြစ်ပြီး သူ့ထဲမှာ
        မြောက်များစွာသော value တွေကို အစဉ်လိုက်တန်းစီပြီး သိမ်းပါတယ်။ ဘာလို့
        array ကိုသုံးသလဲဆိုတဲ့မေးခွန်းကို အရှင်းဆုံးဖြေရရင် မြောက်များစွာသော
        value တွေကို တစ်နေရာထဲမှာ သိမ်းနိုင်လို့ပါ။
        <br />
        <br />
        <br /> ဉပမာ - ကျောင်းသား 5 ယောက်ရဲ့ PE score တွေကို program လေးတစ်ခုနဲ့
        သိမ်းထားပြီး လစဉ်တိုင်းမှာ update လုပ်မယ်ဆိုပါစို့။ ကျွန်တော်တို့ဟာ
        ကျောင်းသားတစ်ယောက်စီအတွက် variable တစ်ခု declare ပြီး variable 5 ခုနဲ့
        သီးခြားသိမ်းထားလို့ရပါတယ်။
        <br />
        <br />
        <br />
        ဒါဟာ လောလောဆယ် အခြေအနေမျိုးမှာ အဆင်ပြေပင်မဲ့ ကျောင်းသားအရေအတွက်ဟာ 1000
        လောက်ရှိမယ်ဆို ဘယ်လိုမှ အဆင်ပြေနိုင်မှာမဟုတ်ပါဘူး။ ဒီနေရာမှာ Array ကိုသာ
        သုံးမယ်ဆို
        <br />
        <br />
      </ThemeText>
      <HighLightCode codeString="const peResultList = [7, 0, -2, 10, 6];" />
      <ThemeText className="my-10">
        နောက်ထပ် ကျောင်းသားတွေအတွက်ထပ်ထည့်ချင်ရင်လည်း
      </ThemeText>
      <HighLightCode codeString="peResultList.push (5);" />
      <ThemeText className="my-10">
        ဆိုပြီး ထပ်တိုးထည့်လို့ရမှာ ဖြစ်ပါတယ်။ ဒီနေရာမှာ သတိပြုရမှာက Array
        Declaration မှာ အသုံးပြုတဲ့ language ပေါ်မူတည်ပြီး Array ရဲ့ size limit
        ကို ထည့်ပေးဖို့လို မလို ဆိုပြီး ကွာသွားမှာပဲဖြစ်ပါတယ်။
        <br />
        <br />
        <br />
        strong type programming language တွေဖြစ်ကြတဲ့ C languages တွေနဲ့ Java
        တို့မှာတော့ array declare လုပ်ချိန်ထဲက size limit ကိုထည့်ပေးရမှာ
        ဖြစ်ပြီး ထို limit ပမာဏထက် ကျော်လွန်သွားရင် ArrayIndexOutOfBound
        exception error မျိုး တက်မှာဖြစ်ပါတယ်။
        <br />
        <br />
        <br /> Dynamic Type Programming Language တွေဖြစ်ကြတဲ့ PHP, Javascript,
        Python စသည်တို့မှာတော့ size limit ကို ထည့်ပေးစရာမလိုပဲ array ကို
        initialize လုပ်ပြီးတာနဲ့ ကြိုက်သလောက်ထည့်လို့ရမှာ ဖြစ်ပါတယ်။ကျွန်တော့
        သင်ခန်းစာတွေရဲ့ code example တွေမှာတော့ Javascript ကို အဓိက
        အသုံးပြုသွားမှာဖြစ်ပါတယ်။
      </ThemeText>
      <Image
        src={"/array_explanation.png"}
        alt={"Array Explanation"}
        height={"250"}
        width={"460"}
      />
      <Image
        src={"/array_explanation2.png"}
        alt={"Array Explanation 2"}
        height={"250"}
        width={"460"}
        className="mt-14"
      />
      <ThemeText className="mb-5 mt-10">
        Diagram 1 ဟာ student 5 ယောက်အတွက် PE score တွေကို array ထဲမှာ
        သိမ်းထားတဲ့ diagram ဖြစ်ပြီး၊ diagram 2 ကတော့ array ထဲမှာရှိတဲ့ အဲ့
        value တွေရဲ့ location ဖြစ်ပါတယ်။ အပေါ်က 0,1,2,3,4 စတဲ့ နံပါတ်တွေဟာ Array
        ထဲမှာ သိမ်းထားတဲ့ value တွေရဲ့ အခန်းနံပါတ်ဖြစ်ပြီး index (အများကိန်း
        indices) လို့ခေါ်ပါတယ်။ဒီ index တွေကို အသုံးပြုပြီး ကျွန်တော်တို့ဟာ
        Array ထဲက value တွေကို manipulate လုပ်တာဖြစ်ပါတယ်။
        <br />
        <br />
        ဉပမာ - အပေါ်က PE score တွေသိမ်းထားတဲ့ array ရဲ့ variable name ကို A
        လို့ပေးထားတယ်ဆိုပါစို့။ Array ထဲက 7 ဆိုတဲ့ value ကို လိုချင်ရင်{" "}
        <HighLightText title="A[0]" /> ဆိုပြီး ယူရမှာဖြစ်ပြီး 0 ဆိုတဲ့ value
        လိုချင်ရင် <HighLightText title="A[1]" /> ဆိုပြီး access
        လုပ်ကမှာဖြစ်ပါတယ်။ index 1 က 0 ဆိုတဲ့ value နေရာမှာ 3 ဆိုပြီး update
        လုပ်ချင်ရင်တော့ <HighLightText title="A[1] = 3" /> ဆိုပြီး update
        လုပ်ကမှာဖြစ်ပါတယ်။
      </ThemeText>
      <div className="rounded-md bg-gray-100 mt-14 p-5">
        <ThemeText>ထို့ကြောင့် A[2] ရဲ့ value က ဘာဖြစ်နိုင်မလဲ?</ThemeText>
        <Image
          src={"/array_explanation2.png"}
          alt={"Array Explanation 2"}
          height={"250"}
          width={"460"}
          className="mt-5"
        />
        <div className="flex">
          <Input
            type="text"
            value={qa1.value}
            onChange={(e) =>
              setQa1((qa1) => ({ ...qa1, value: e.target.value }))
            }
            className={cn(
              "mt-5 mr-5",
              qa1.isAnswered &&
                (qa1.isCorrect ? "border-green-500" : "border-red-500")
            )}
            disabled={qa1.isAnswered}
          />
          {!qa1.isAnswered && (
            <Button
              onClick={() => {
                if (qa1.value) {
                  setQa1((qa1) => ({
                    ...qa1,
                    isAnswered: true,
                    isCorrect: qa1.value == qa1.correctAnswer,
                  }));
                }
              }}
              variant="black"
              className="capitalize w-auto mt-5"
            >
              Submit
            </Button>
          )}
        </div>
        {qa1.isAnswered && !qa1.isCorrect && (
          <ThemeText className="mt-5 text-sm">Ans: -2</ThemeText>
        )}
      </div>
      <ThemeText className="mt-14">
        ကျွန်တော်တို့ဟာ ကျွန်တော်တို့ရေးတဲ့ code တွေ အကောင်းဆုံးနဲ့ အမြန်ဆုံး
        execute နိုင်ဖို့ data strucutre ကို ရွေးချယ်တဲ့ နေရာမှာ
        အချက်နှစ်ချက်ကို အဓိက ကြည့်ပြီး ရွေးချယ်ရပါတယ်။ အဲ့တာကတော့
      </ThemeText>
      <UnOrderList
        className="mt-5"
        title="ကျွန်တော်တို့ သိမ်းမည့် data တွေက ဘယ်လိုပုံစံမျိုးလဲ?"
      />
      <UnOrderList title="ကျွန်တော်တို့ ရေးမည့် programက ဘာကိုလုပ်ချင်တာလဲ?" />
      <ThemeText>
        ထိုအချက်များ အပေါ် မူတည်ပြီး အသင့်တော်ဆုံးဖြစ်မည့် data strucutre ကို
        ရွေးချယ်ရမှာဖြစ်ပါတယ်။
        <br />
        <br />
        အထက်တွင်ဖော်ပြခဲ့သော ဉပမာမှာအရဆိုလျှင် ကျွန်တော်တို့ သိမ်းချင်တဲ့ data က
        student တွေရဲ့ PE score တွေဖြစ်ပြီး၊ ကျွန်တော်တို့ program က
        ကျောင်းသားတစ်ယောက်ချင်းစီရဲ့ monthly PE result တွေကို update
        လုပ်ချင်တာဖြစ်ပါတယ်။
        <br />
        <br />
        သိမ်းချင်တဲ့ data ကလည်း ရမှတ် တစ်ခုတည်းဖြစ်ပြီး student တွေအတွက်လည်း
        roll no 1 student ရဲ့ data ကို <HighLightText title="Array index 0" />,
        roll 2 student ရဲ့ data ကို <HighLightText title="Array index 1" /> ထဲ
        သိမ်း။အဲလိုနည်းဖြင့် ကျွန်တော်တို့ program အတွက် array data structure က
        အဆင်ပြေဆုံးဖြစ်သွားပါတယ်။
      </ThemeText>
      <Image
        src={"/array_explanation3.png"}
        alt={"Array Explanation 3"}
        height={"191"}
        width={"400"}
        className="mt-5"
      />
      <ThemeText className="mt-14">
        ဒီတစ်ခါမှာတော့ ကျောင်းသားရမှတ်ကို သိမ်းတာမျိုးမဟုတ်ဘဲ Window တို့ Mac
        တို့မှာ built in ပါလာတဲ့ paint တို့ freeform တို့လို 2D ပုံတွေဆွဲတဲ့
        application program တစ်ခုအနေနဲ့ စဉ်းစားကြည့်ကြရအောင်။
        <br /> <br />
        အဲ့တော့ user screen ပေါ်မှာဆွဲလိုက်သမျှ ပုံတွေကို data အနေနဲ့
        ပြန်သိမ်းမယ်ဆို 2D canvas တစ်ခုအတွက် အနည်းဆုံး
        ဒီအချက်တွေလိုမှာဖြစ်ပါတယ်။ စဆွဲတဲ့ အမှတ်ရဲ့ x coordinate, y coordinate၊
        ဆုံးမှတ်ရဲ့ x coordinate, y coordinate၊ ဆွဲလိုက်တဲ့မျဉ်းရဲ့အထူ stroke
        width၊ မျဉ်းအရောင် stroke color၊ အထဲကနောက်ခံ color စသည်ဖြင့် 2D convas
        တစ်ခုအတွက် data တွေအများကြီးလိုမှာဖြစ်ပါတယ်။
        <br /> <br />
        ဆိုတော့ ကျွန်တော်တို့ရေးမည့် program ရဲ့ အဓိကရည်ရွယ်ချက်က user screen
        ပေါ် လျှောက်ခြစ်ထားတဲ့ 2D convas တွေအားလုံးကို သိမ်းထားပြီး user
        နောက်တစ်ကြိမ် ပြန်ဖွင့်တဲ့အခါ screen ပေါ်မှာ ဆွဲထားသမျှတွေကို
        ပြန်ပြချင်တာမျိုးဖြစ်ပါတယ်။ ဒီလို အခြေအနေမျိုးမှာ array data structure
        တစ်ခုထဲ သုံးရုံနဲ့ အဆင်မပြေလောက်တော့ဘူးဆိုတာ သင်လည်းရိပ်မိမှာဖြစ်ပါတယ်။
        <br /> <br />
      </ThemeText>
      <Image
        src={"/array_explanation4.png"}
        alt={"Array Explanation 4"}
        height={"191"}
        width={"300"}
        className="mt-10 mx-auto"
      />
      <ThemeText className="mt-14">
        နောက်ထပ် problem တစ်ခုနဲ့တွေးကြည့်ကြရအောင်။ phone တွေမှာ default ပါတဲ့
        contact application လိုမျိုးတစ်ခုရေးတယ်ဆိုပါစို့။ကျွန်တော်တို့ရဲ့ အဓိက
        data ဖြစ်တဲ့ contact မှာ အနည်းဆုံး contact မှာ phone number ရယ် name ရယ်
        လိုမှာဖြစ်ပါတယ်။
        <br />
        <br />
        ဆိုတော့ ကျွန်တော်တို့ contact program လေးက contact အသစ်တွေ create မယ်၊
        contact list တွေပြမယ်၊ မှတ်ပြီးသား contact တွေကို name (or) phone number
        ကိုသုံးပြီး ရှာလို့ရမယ်ဆိုပါစို့။ <br />
        <br />
        အဲ့အတွက် contact အသစ် create တဲ့အခါ ထို contact တွေကို သိမ်းဖို့ data
        structure ကို ဘယ်လိုမျိုးစီမံသင့်လဲ တွေးကြည့်လိုက်ရအောင်။ တကယ်လို့ array
        data structure ကိုပဲသုံးမယ်ဆို ကျွန်တော်တို့ parallel array တစ်ခုကို
        ဒီလိုcreate လို့ရပါတယ်။
      </ThemeText>
      <Image
        src={"/array_explanation5.png"}
        alt={"Array Explanation 5"}
        height={"154"}
        width={"540"}
        className="mt-10 mx-auto"
      />
      <ThemeText className="mt-10">
        Name အတွက် array တစ်ခုနဲ့ Phone အတွက် array တစ်ခု သတ်မှတ်ပြီး၊ ဉပမာ -
        Ann&apos;s phone number လိုချင်လျှင် Ann ရဲ့ index ကိုရှာပြီး ထို index
        ရဲ့ phone array ထဲက Phone[index] နဲ့ သွားထုတ်လိုက်လျှင် Ann&apos;s phone
        number ကိုရပြီပဲဖြစ်ပါတယ်။
      </ThemeText>
      <MultipleChoice
        questionList={qurstionA}
        questionState={qa2}
        title="ထို့နည်းတူ Bea's phone number ကိုလိုချင်လျှင် Array နှစ်ခုထဲက  ဘယ်Array ထဲမှာ ဘယ်index နဲ့ access လုပ်ရမည်နည်း?"
        setQuestionState={setQa2}
        questionUniqueId="#arrayQA2"
        challenge={challenges?.[0]}
      />
      <ThemeText className="mt-14">
        ဒါဟာ phone number နဲ့ name နှစ်ခုထဲဆို အဆင်ပြေပင်မဲ့ တစ်ခြား fields
        (email, profile image, zip code) တွေ ထပ်တိုးလာမည်ဆို linear ထားရမဲ့
        Array အရေအတွက်တွေများလာပြီး contact တစ်ခုရဲ့ data ကို access လုပ်ဖို့နဲ့
        ရှာဖို့အတွက် ရေးကမဲ့ lines of code လည်းများလာမှာဖြစ်ပြီး read လုပ်ရမည့်
        time လည်းများလွန်းတာကြောင့် performance အရလည်း အဆင်ပြေမှာမဟုတ်ပါဘူး။
      </ThemeText>
      <ThemeText className="mt-5">
        drawing ဉပမာမှာဟာလည်း ထိုနည်းတူပါပဲ။ Linear Array နဲ့ထားမယ်ဆို canvas 2D
        တစ်ခုအတွက် သုံးရမဲ့ Array အရေအတွက်ဟာ အများကြီး ဖြစ်နေမှာဖြစ်ပါတယ်။
        ဆိုတော့ ဒီ problem နှစ်ခုအတွက် Beginner level မှာ
        အကောင်းဆုံးဖြစ်နိုင်မဲ့ data structure ဟာ ဘာများဖြစ်နိုင်မလဲ ?
        <br />
        <br />
        အဖြေကတော့ ရှင်းပါတယ်။ Array အခန်းတစ်ခုထဲမှာ value တစ်ခုထဲ မထည့်ဘဲ လိုတဲ့
        data တွေ အားလုံး‌ပေါင်းထည့်လိုက်မှာ ဖြစ်ပါတယ်။ ဉပမာ - Arary ၏
        တစ်ခန်းချင်းစီတိုင်းမှာ ( name, contact, email, zip) စသည်ဖြင့် data
        အားလုံးကို ပေါင်းထည့်လိုက်မှာဖြစ်ပါတယ်။ Drawing problem အတွက်လည်း
        ထိုနည်းတူ (Start X, Start Y, End X, End Y, Stroke Width, Stroke Color)
        စသဖြင့် အားလုံးကို တစ်ခန်းချင်းစီမှာ လိုက်ထည့်ရမှာဖြစ်ပါတယ်။
        ထိုသို့ထည့်ဖို့အတွက် ကျွန်တော်တို့ဟာ နောက် data structure တစ်ခုကို
        သိထားဖို့လိုလာပါတယ်။ အဲ့တာဟာ Record ပဲဖြစ်ပါတယ်။
      </ThemeText>
      <SectionSwitchBtn
        title="Continue"
        className="mt-10 relative"
        buttonWrapperStyle="mx-0"
        handleClick={handleClick}
      />
    </div>
  );
};

export default ArrayExplanation;

const qurstionA: SciencePlus.MultiChoiceQuestion[] = [
  {
    label: "Name[0]",
    value: "Name[0]",
  },
  {
    label: "Name[1]",
    value: "Name[1]",
  },
  {
    label: "Bea[0]",
    value: "Bea[0]",
  },
  {
    label: "Phone[1]",
    value: "Phone[1]",
  },
];

const quesAdefault = {
  value: "",
  correctAnswer: "-2",
  isAnswered: false,
  isCorrect: false,
};

const quesBdefault = {
  value: "",
  correctAnswer: "Phone[1]",
  isAnswered: false,
  isCorrect: false,
};
