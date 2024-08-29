const LessonLeftPath = ({ pathColor }: { pathColor: string }) => {
  return (
    <svg
      viewBox="0 0 454 168"
      widths={100}
      height={150}
      focusable="false"
      fill="white"
    >
      <path
        d="M124 130L184.963 165.804C186.22 166.542 187.778 166.538 189.031 165.794L341.177 75.4576C343.794 73.9035 343.785 70.1114 341.161 68.5694L227 1.5"
         stroke={pathColor}
        stroke-width="3"
      ></path>
    </svg>
  );
};

export default LessonLeftPath;
