import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="flex flex-row items-center justify-evenly mx-auto max-w-screen-lg h-full">
        <div className="flex items-center mx-3">
          <Image src="./cs.svg" width={30} height={30} alt="computer science" />
          <p className="text-slate-600 ml-2">Computer Science</p>
        </div>
        <div className="flex items-center mx-3">
          <Image
            src="./programming.svg"
            width={30}
            height={30}
            alt="programming"
          />
          <p className="text-slate-600 ml-2">Programming & AI</p>
        </div>
        <div className="flex items-center mx-3">
          <Image src="./science.svg" width={30} height={30} alt="computer science" />
          <p className="text-slate-600 ml-2">Science & Engineering</p>
        </div>
        <div className="flex items-center mx-3">
          <Image src="./math.svg" width={30} height={30} alt="computer science" />
          <p className="text-slate-600 ml-2">Math</p>
        </div>
      </div>
    </footer>
  );
};
