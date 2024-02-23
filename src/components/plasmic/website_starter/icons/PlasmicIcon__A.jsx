// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function AIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.675.285A.135.135 0 102.71.018a.135.135 0 00-.035.267zM.09 2.433L.18.858.09.108 0 .858l.09 1.575z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AIcon;
/* prettier-ignore-end */
