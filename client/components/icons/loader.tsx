import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const LoaderIcon = React.forwardRef<React.ComponentRef<typeof Svg>, SvgProps>(
  (props, ref) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 21 21"
      ref={ref}
      {...props}
    >
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.198 1.96a1.25 1.25 0 0 1-.83 1.561 6.75 6.75 0 1 0 8.457 8.335 1.25 1.25 0 0 1 2.4.696 9.249 9.249 0 0 1-17.783-.056A9.25 9.25 0 0 1 7.637 1.13a1.25 1.25 0 0 1 1.561.83Z"
        clipRule="evenodd"
      />
    </Svg>
  )
);

LoaderIcon.displayName = "LoaderIcon";

export { LoaderIcon };
