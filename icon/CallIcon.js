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
      d="M30 16.498h3C33 8.803 27.19 3 19.485 3v3C25.578 6 30 10.415 30 16.498Z"
      fill={color}
    />
    <path
      d="M19.5 12c3.154 0 4.5 1.345 4.5 4.5h3c0-4.838-2.663-7.5-7.5-7.5v3Zm5.133 8.165a1.502 1.502 0 0 0-2.086.064l-3.59 3.692c-.864-.165-2.601-.707-4.389-2.49-1.788-1.79-2.33-3.532-2.49-4.39l3.689-3.59a1.5 1.5 0 0 0 .064-2.087l-5.542-6.095a1.5 1.5 0 0 0-2.087-.13L4.947 7.93a1.5 1.5 0 0 0-.435.974c-.022.375-.451 9.258 6.436 16.149 6.01 6.008 13.537 6.447 15.61 6.447.302 0 .489-.009.538-.012.367-.02.713-.176.972-.436l2.79-3.257a1.5 1.5 0 0 0-.129-2.087l-6.096-5.543Z"
      fill={color}
    />
  </svg>
);

export default SvgComponent;
