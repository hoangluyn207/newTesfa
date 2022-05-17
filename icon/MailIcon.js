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
      d="M32.33 6a2 2 0 0 0-.41 0h-28a2 2 0 0 0-.53.08l14.45 14.39L32.33 6Z"
      fill={color}
    />
    <path
      d="m33.81 7.39-14.56 14.5a2 2 0 0 1-2.82 0L2 7.5a2 2 0 0 0-.07.5v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2.003 2.003 0 0 0-.12-.61ZM5.3 28H3.91v-1.43l7.27-7.21 1.41 1.41L5.3 28Zm26.61 0h-1.4l-7.29-7.23 1.41-1.41 7.27 7.21.01 1.43Z"
      fill={color}
    />
  </svg>
);

export default SvgComponent;
