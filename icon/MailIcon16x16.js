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
      d="M14.369 2.667a.889.889 0 0 0-.182 0H1.742a.89.89 0 0 0-.235.035l6.422 6.396 6.44-6.431Z"
      fill={color}
    />
    <path
      d="M15.027 3.284 8.556 9.73a.889.889 0 0 1-1.254 0L.89 3.333a.889.889 0 0 0-.031.223v8.889a.889.889 0 0 0 .889.888H14.19a.889.889 0 0 0 .889-.889V3.556a.888.888 0 0 0-.053-.272Zm-12.671 9.16h-.618v-.635l3.23-3.205.628.627-3.24 3.213Zm11.826 0h-.622l-3.24-3.213.627-.627 3.23 3.205.005.636Z"
      fill={color}
    />
  </svg>
);

export default SvgComponent;
