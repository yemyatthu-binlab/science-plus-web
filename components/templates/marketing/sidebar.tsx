import { SidebarItem } from "@/components/atoms/learning/sidebarItem";
import AppBrand from "@/components/atoms/marketing/appBrand";
import UserAuthStateButton from "@/components/atoms/marketing/userAuthStateButton";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  className?: string;
};

const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex bg-white h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <AppBrand />
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg" />
        <SidebarItem
          label="LeaderBoard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem label="Reminder" href="/quests" iconSrc="/quests.svg" />
        {/* <SidebarItem label="Shop" href="/shop" iconSrc="/shop.svg" /> */}
      </div>
      <div className="mb-3">
        <UserAuthStateButton />
      </div>
    </div>
  );
};

export default Sidebar;
