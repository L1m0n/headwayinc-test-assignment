interface Props {
  position?: 'left' | 'right';
}

export default function HexagonBorder({ position = 'right' }: Props) {
  return (
    <svg
      className={`hexagonBorder-${position}`}
      width="211"
      height="72"
      viewBox="0 0 211 72"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path className="stroke" d="M194 36L211 36" stroke="#D0D0D8" />
        <path
          className="outline"
          d="M0 0.5H161.928C165.541 0.5 168.945 2.19845 171.117 5.08594L194.374 36L171.117 66.9141C168.945 69.8015 165.541 71.5 161.928 71.5H0C0 71.5 0 69.8015 0 66.9141L0 36L0 5.08594C0 2.19845 0 0.5 0 0.5Z"
          fill="transparent"
          stroke="#D0D0D8"
        />
      </g>
    </svg>
  );
}
