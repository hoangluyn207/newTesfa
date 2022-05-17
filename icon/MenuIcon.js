import * as React from "react";

const SvgComponent = ({ props, color }) => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.625 15.75A1.125 1.125 0 0 1 4.5 14.625V5.627a1.125 1.125 0 0 1 1.125-1.125h9a1.125 1.125 0 0 1 1.125 1.125v8.998a1.125 1.125 0 0 1-1.125 1.125h-9Zm15.75 0a1.125 1.125 0 0 1-1.125-1.125V5.627a1.125 1.125 0 0 1 1.125-1.125h8.998a1.125 1.125 0 0 1 1.125 1.125v8.998a1.125 1.125 0 0 1-1.125 1.125h-8.998ZM5.625 31.5A1.125 1.125 0 0 1 4.5 30.375v-9a1.125 1.125 0 0 1 1.125-1.125h9a1.125 1.125 0 0 1 1.125 1.125v9a1.125 1.125 0 0 1-1.125 1.125h-9Zm15.75 0a1.125 1.125 0 0 1-1.125-1.125v-9a1.125 1.125 0 0 1 1.125-1.125h8.998a1.125 1.125 0 0 1 1.125 1.125v9a1.125 1.125 0 0 1-1.125 1.125h-8.998Z"
      fill={color}
    />
  </svg>
);

export default SvgComponent;