import AppBrand from "@/components/atoms/marketing/appBrand";
import UserAuthStateButton from "@/components/atoms/marketing/userAuthStateButton";

export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <AppBrand />
        <UserAuthStateButton />
      </div>
    </header>
  );
};
