const LessonRightPath = ({ pathColor }: { pathColor: string }) => {
  return (
    <svg
      viewBox="0 0 228 263"
      widths={150}
      height={200}
      focusable="false"
      fill="white"
    >
      <path
        d="M124 1.5L10.4044 68.5038C7.76628 70.0599 7.78428 73.8823 10.4369 75.4134L168.977 166.927C170.227 167.648 171.769 167.64 173.011 166.906L227 135"
        stroke={pathColor}
        stroke-width="3"
      ></path>
    </svg>
  );
};

export default LessonRightPath;
