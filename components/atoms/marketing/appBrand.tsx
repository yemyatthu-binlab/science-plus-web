import Image from "next/image";

const AppBrand = () => {
  return (
    <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
      <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
      <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
        Science Plus
      </h1>
    </div>
  );
};

export default AppBrand;
