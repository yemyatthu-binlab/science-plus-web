import MobileHeader from "@/components/atoms/learning/mobileHeader";
import Sidebar from "@/components/templates/marketing/sidebar";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Sidebar className="hidden lg:flex" />
      <MobileHeader />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="bg-white h-full">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
