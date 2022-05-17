import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.553 4c-.09-.01-.182-.01-.273 0H2.613c-.12.002-.238.02-.353.053l9.633 9.594L21.553 4Z"
      fill="#000"
    />
    <path
      d="m22.54 4.927-9.707 9.666a1.333 1.333 0 0 1-1.88 0L1.333 5c-.03.109-.045.22-.046.333v13.334A1.333 1.333 0 0 0 2.62 20h18.667a1.334 1.334 0 0 0 1.333-1.333V5.333a1.333 1.333 0 0 0-.08-.406ZM3.533 18.667h-.926v-.954l4.846-4.806.94.94-4.86 4.82Zm17.74 0h-.933l-4.86-4.82.94-.94 4.847 4.806.006.954Z"
      fill="#000"
    />
  </svg>
);

export default SvgComponent;
