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
      d="M12.49 10.272v-.45h1.347v6.322h-.77a.576.576 0 0 1-.577-.573v.001a3.284 3.284 0 0 1-4.26-4.97 3.284 3.284 0 0 1 4.259-.33h.001ZM6.919 7.79v.205c0 .382-.051.694-.3 1.06l-.03.034a7.71 7.71 0 0 0-.242.285L2.024 14.8h4.895v.768a.576.576 0 0 1-.577.576H0v-.362c0-.443.11-.641.25-.847L4.857 9.23H.192V7.79H6.92h-.001Zm8.551 8.354a.48.48 0 0 1-.48-.48V7.79h1.441v8.354h-.961ZM20.693 9.6a3.306 3.306 0 1 1 .002 6.611 3.306 3.306 0 0 1-.002-6.611Zm-10.14 5.253a1.933 1.933 0 0 0 1.394-3.313 1.932 1.932 0 1 0-1.394 3.313Zm10.14-.003a1.945 1.945 0 1 0 0-3.89 1.945 1.945 0 0 0 0 3.89Z"
      fill="#3498DB"
    />
  </svg>
);

export default SvgComponent;
