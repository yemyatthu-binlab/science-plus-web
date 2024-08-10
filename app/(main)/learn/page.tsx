import { FeedWrapper } from "@/components/atoms/learning/feedWrapper";
import StickyWrapper from "@/components/atoms/learning/stickyWrapper";
import { UserProgress } from "@/components/atoms/learning/userProgress";
import { Header } from "@/components/templates/learn/header";
import { getUserProgress } from "@/database/queries";
import { redirect } from "next/navigation";
const LearningPage = async () => {
  const userPorgess = await getUserProgress();
  if (!userPorgess || !userPorgess.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[49px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userPorgess.activeCourse}
          hearts={userPorgess.hearts}
          points={userPorgess.points}
          hasActiveSubscription={true}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userPorgess.activeCourse.title} />
      </FeedWrapper>
    </div>
  );
};

export default LearningPage;
