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
      {/* <ThemeText className=" mt-2 mb-14">
        Computers have the difficult task of collecting, storing, organizing,
        rearranging, and manipulating data to solve problems.
      </ThemeText> */}
      <ThemeText className=" mt-2 mb-5">
        သင်ဟာ computer ရဲ့ file explorer ကနေ သင်လိုချင်တဲ့ file တစ်ခုကို search
        bar မှ file name ဖြင့် search လိုက်တယ်ဆိုပါစို့။
      </ThemeText>
      <UnOrderList title="သင့်ရဲ့ computer မှာ file ပေါင်း ‌5000 ကျော်  ရှိပြီး" />
      <UnOrderList
        className="mb-5"
        title="သင့် computer ဟာ 1 second ကို file 500 ထိ read လုပ်နိုင်တယ်လို့ တွေးကြည့်လိုက်ပါ။"
      />
      <ThemeText className="mt-2 mb-14">
        သင့် computer ဟာ ရှာလိုက်သော file ကို တွေ့နိုင်ဖို့ အကြမ်းဖျဉ်းအားဖြင့်
        အချိန်မည်မျှယူမည်နည်း။
      </ThemeText>
      <ChoiceSelectionBox
        className="mb-14"
        strList={[
          "မီလီစက္ကန့်လောက်",
          "တစ်စက္ကန့်လောက်",
          "၁၀၀စက္ကန့်လောက်",
          "တစ်နာရီလောက်",
        ]}
        correctAnswer={3}
      />
      <ThemeText className="mt-2 mb-14">
        သင့် computer က တစ်စက္ကန့်ကို file 500 နှုန်းနဲ့ read နိုင်ပါတယ်။ file
        50000 ကို read ဖို့ဆို 500*100 = 50000။ အဲ့တော့ ၁၀၀စက္ကန့် ထိ အများဆုံး
        ကြာမြင့်နိုင်မှာဖြစ်ပါတယ်။
      </ThemeText>
      <ThemeText className="mt-2 mb-5">
        လက်တွေ့မှာဆိုရင်တော့ အဲ့လောက်မကြာမှန်း သင်လည်း သတိထားမိမှာသေချာပါတယ်။
        ပြီးတော့ file တစ်ခုကို ရှာတိုင်းမှာ computer ဟာ သူ့ထဲမှာရှိသမျှ file တွေ
        အားလုံးကို ပတ်ပြီးလိုက်ရှာတာမျိုးလည်း မဟုတ်ပါဘူး။ <br />
        <br />
        <br />
        ဉပမာ - သင်ရှာလိုက်တဲ့ file name ဟာ cat ဆိုပါစို့။ computer ဟာ file 50000
        ထဲက &quot;cat&quot; နဲ့စတဲ့ file တွေကို အရင် ရှာမှာဖြစ်ပါတယ်။
        အဲ့မှာမတွေ့ခဲ့လျှင် &quot;c&quot; ပါတဲ့ file စုစုပေါင်းရယ်၊
        &quot;a&quot; ပါတဲ့ file စုစုပေါင်းရယ် နဲ့ &quot;t&quot; ပါတဲ့ file
        စုစုပေါင်းရယ် ထဲကပဲ search လုပ်မှာမျိုးဖြစ်ပါတယ်။ (ဒါဟာ ဉပမာပဲ ဖြစ်ပြီး
        လက်တွေ့မှာတော့ operating system တွေမှာ default ပါတဲ့ file explorer
        တွေရဲ့ searching logics တွေဟာ ဒီထက်အများကြီး ပိုရှုပ်ထွေးတယ်ဆိုတာကို
        သတိပြုကမှာဖြစ်ပါတယ်။)
        <br />
        <br />
        <br />
        အဲ့တော့ computer ဟာ file တစ်ခုကို စသိမ်းထားထဲက နောင်တစ်ချိန်
        ပြန်ရှာရလွယ်အောင် စနစ်တကျ organize ဖြစ်ဖြစ် သိမ်းစည်းထားမှာဖြစ်ပါတယ်။
        သင် search bar ကနေ ရှာလိုက်တဲ့ အချိန်မှာတော့ အမြန်ဆုံး တွေ့အောင် search
        keyword နဲ့စတဲ့ file တွေထဲက အရင်ရှာတာမျိုး၊ အဲ့တာမတွေ့မှ search keyword
        ထဲမှာ အစဉ်လိုက်ဖြစ်နေတဲ့အတိုင်း ပါတဲ့ file တွေကို search တာမျိုး
        လုပ်မှာဖြစ်ပါတယ်။
        <br />
        <br />
        <br />
        အဲ့လို နောင်တစ်ချိန်မှာ read/write/update/delete/search/sort စတဲ့
        operation တွေကို အမြန်ဆုံး ပြီးမြောက်အောင် လုပ်ဆောင်နိုင်ဖို့ စသိမ်းထဲက
        organize ဖြစ်အောင် စနစ်တကျ သိမ်းပုံသိမ်းနည်းတွေကို data stucture
        လို့ခေါ်တာဖြစ်ပါတယ်။ ထို operation တွေအမြန်ဆုံး ပြီးမြောက်ဖို့အတွက်
        အပေါ်က ဉပမာလို ဘယ်လိုအရင်ရှာမယ်၊ ဘယ်လိုမှမတွေ့မှ ဘယ်လိုထပ်ရှာမယ်ဆိုတဲ့
        နည်းလမ်းတွေကို algorithmလို့ အလွယ်မှတ်ယူနိုင်ပါတယ်။ အသေးစိတ်ကို
        နောက်လာမဲ့ သင်ခန်းစာများမှာ ဆက်ရှင်းသွားမှာဖြစ်ပါတယ်။
      </ThemeText>
      <ThemeText className="mt-10 mb-14">
        အဲ့တော့ အခြေခံ data structure တွေထဲကမှ array နဲ့ record အကြောင်း
        အကြမ်းဖျင်း ဆက်လေ့လာကြည့်ကြရအောင်။
      </ThemeText>
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
