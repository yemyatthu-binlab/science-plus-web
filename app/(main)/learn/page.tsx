import { FeedWrapper } from "@/components/atoms/learning/feedWrapper";
import StickyWrapper from "@/components/atoms/learning/stickyWrapper";
import { Unit } from "@/components/atoms/learning/Unit";
import { UserProgress } from "@/components/atoms/learning/userProgress";
import { Header } from "@/components/templates/learn/header";
import {
  getCourseProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress,
} from "@/database/queries";
import { redirect } from "next/navigation";
const LearningPage = async () => {
  const userPorgess = await getUserProgress();
  const units = await getUnits();
  const courseProgress = await getCourseProgress();
  const lessonPercentage = await getLessonPercentage();

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
        <div className="">
          {units.map((unit) => (
            <div key={unit.id} className="mb-10">
              <Unit
                id={unit.id}
                order={unit.order}
                description={unit.description}
                title={unit.title}
                lessons={unit.lessons}
                activeLesson={courseProgress?.activeLesson}
                activeLessonPercentage={lessonPercentage}
              />
            </div>
          ))}
        </div>
      </FeedWrapper>
    </div>
  );
};

export default LearningPage;
