// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group73Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.082 3.375l6.929 12a1.25 1.25 0 01-1.083 1.875H5.072a1.25 1.25 0 01-1.083-1.875l6.929-12a1.25 1.25 0 012.165 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
      ></path>

      <path
        d={"M12 7v4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
      ></path>

      <circle cx={"12"} cy={"14"} r={"1"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Group73Icon;
/* prettier-ignore-end */
