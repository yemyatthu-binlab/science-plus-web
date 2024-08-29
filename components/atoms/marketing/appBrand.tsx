import { AtomIcon } from "lucide-react";
import Image from "next/image";

const AppBrand = () => {
  return (
    <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
      {/* <Image src="/science.svg" height={60} width={60} alt="Scince Plus" /> */}
      <div className="p-2 bg-green-500 rounded-full">
        <AtomIcon className="h-6 w-6 animate-spin-slow text-white" />
      </div>
      <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
        Science Plus
      </h1>
    </div>
  );
};

export default AppBrand;
