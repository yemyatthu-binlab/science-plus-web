import { FeedWrapper } from "@/components/atoms/learning/feedWrapper";
import StickyWrapper from "@/components/atoms/learning/stickyWrapper";
import { UserProgress } from "@/components/atoms/learning/userProgress";
import { Header } from "@/components/templates/learn/header";

const LearningPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[49px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{
            title: "Introduction to Algorithms",
            imageSrc: "/introToAlgo.png",
          }}
          hearts={5}
          points={100}
          hasActiveSubscription={true}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Introduction to Algorithms" />
      </FeedWrapper>
    </div>
  );
};

export default LearningPage;
