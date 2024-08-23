import ThemeText from "@/components/atoms/common/themeText";

const CodeListWithInput = () => {
  return (
    <div className="bg-gray-100 p-5 rounded-md">
      <ThemeText>What value will be announced when this code is run?</ThemeText>
      <div className="border border-gray-400 m-3 rounded-md w-auto p-2">
        <ThemeText>
          <b>set</b> x <b>to</b> 12
        </ThemeText>{" "}
      </div>
      <div className="border border-gray-400 m-3 rounded-md w-auto p-2">
        <ThemeText>
          <b>set</b> y <b>to</b> 24
        </ThemeText>{" "}
      </div>
      <div className="border border-gray-400 m-3 rounded-md w-auto p-2">
        <ThemeText>
          <b>set</b> z <b>to</b> 4
        </ThemeText>{" "}
      </div>
      <div className="border border-gray-400 m-3 rounded-md w-auto p-2">
        <ThemeText>
          <b>set</b> x <b>to</b> 0
        </ThemeText>{" "}
      </div>
      <div className="border border-gray-400 m-3 rounded-md w-auto p-2">
        <ThemeText>
          <b>set</b> x <b>to</b> y - z
        </ThemeText>{" "}
      </div>
      <div className="border border-gray-400 m-3 rounded-md w-auto p-2">
        <ThemeText>
          <b>set</b> x <b>to</b> x - 10
        </ThemeText>{" "}
      </div>
      <div className="border border-gray-400 m-3 rounded-md w-auto p-2">
        <ThemeText>
          <b>print</b> x
        </ThemeText>{" "}
      </div>
    </div>
  );
};

export default CodeListWithInput;
