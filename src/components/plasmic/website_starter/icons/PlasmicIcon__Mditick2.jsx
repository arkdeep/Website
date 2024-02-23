// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Mditick2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 70 70"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M59.193 18.36a2.909 2.909 0 010 4.113l-28.7 28.701a6 6 0 01-8.486 0l-9.741-9.742a2.91 2.91 0 014.112-4.117l7.752 7.732a3 3 0 004.239-.001L55.08 18.359a2.909 2.909 0 014.112 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mditick2Icon;
/* prettier-ignore-end */
