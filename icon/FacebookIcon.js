import * as React from "react";

const SvgComponent = ({ props, color, size }) => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.096 31.495V19.201h4.147l.617-4.813h-4.764v-3.066c0-1.389.387-2.34 2.38-2.34h2.526V4.69a33.504 33.504 0 0 0-3.7-.19c-3.666 0-6.184 2.238-6.184 6.347v3.532h-4.12v4.813h4.13v12.303h4.968Z"
      fill={color}
    />
  </svg>
);

export default SvgComponent;
