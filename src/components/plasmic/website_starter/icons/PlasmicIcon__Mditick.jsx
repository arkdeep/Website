// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MditickIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.684 3.934a.623.623 0 010 .882L7.04 10.46a2 2 0 01-2.828 0L2.628 8.878a.624.624 0 01.881-.882l1.41 1.405a1 1 0 001.412 0l5.472-5.467a.623.623 0 01.881 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MditickIcon;
/* prettier-ignore-end */
