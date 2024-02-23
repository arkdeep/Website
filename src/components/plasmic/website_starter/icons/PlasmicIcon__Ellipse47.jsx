// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse47Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 80 80"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"40"} cy={"40"} r={"40"} fill={"currentColor"}></circle>

      <circle cx={"40"} cy={"40"} r={"40"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Ellipse47Icon;
/* prettier-ignore-end */
