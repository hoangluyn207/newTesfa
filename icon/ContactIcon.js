import * as React from "react";

const SvgComponent = ({ props, color }) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.667 6.667a3.322 3.322 0 0 0-3.334-3.334A3.322 3.322 0 0 0 5 6.667 3.322 3.322 0 0 0 8.333 10a3.322 3.322 0 0 0 3.334-3.333Zm5.316.833c-.683 0-1.266.417-1.533 1.05a4.955 4.955 0 0 1-4.617 3.117h-5a2.497 2.497 0 0 0-2.5 2.5v4.166h10v-3.766a8.26 8.26 0 0 0 5.2-4.85c.434-1.067-.4-2.217-1.55-2.217Zm14.684 20.833A3.322 3.322 0 0 0 35 25a3.322 3.322 0 0 0-3.333-3.333A3.322 3.322 0 0 0 28.333 25a3.322 3.322 0 0 0 3.334 3.333Zm2.5 1.667h-5a4.955 4.955 0 0 1-4.617-3.117 1.643 1.643 0 0 0-1.533-1.05c-1.15 0-1.984 1.15-1.567 2.217a8.3 8.3 0 0 0 5.2 4.85v3.767h10V32.5a2.472 2.472 0 0 0-2.483-2.5ZM28.75 18.483s0-.016.017 0A5.035 5.035 0 0 0 25.15 22.1v-.017a1.685 1.685 0 0 1-1.633 1.25c-.917 0-1.667-.75-1.667-1.666 0-.084.033-.234.033-.234a8.317 8.317 0 0 1 6.25-6.216c.067 0 .134-.017.2-.017.917 0 1.667.75 1.667 1.667a1.68 1.68 0 0 1-1.25 1.616ZM30 10.1c0 .85-.617 1.533-1.433 1.65-5.317.65-9.5 4.85-10.15 10.167a1.67 1.67 0 0 1-3.317-.25v-.15c.833-6.867 6.317-12.3 13.2-13.084h.017c.933 0 1.683.75 1.683 1.667Z"
      fill={color}
    />
  </svg>
);

export default SvgComponent;
