import * as React from "react";

const SvgComponent = ({ props, color }) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.931 13.998V8.534h1.844l.274-2.14H8.93V5.033c0-.617.172-1.04 1.058-1.04h1.123V2.085A14.89 14.89 0 0 0 9.467 2C7.838 2 6.72 2.995 6.72 4.82v1.57H4.888v2.14h1.835v5.468h2.208Z"
      fill={color}
    />
  </svg>
);

export default SvgComponent;
