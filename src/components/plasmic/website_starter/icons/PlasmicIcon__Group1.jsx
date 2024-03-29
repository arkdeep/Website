// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group1Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.968.87l-.736-.736c-.208-.208-.592-.176-.832.112L12.84 2.79c-1.152-.496-2.416-.736-3.744-.736C5.144 2.07 1.72 4.374.072 7.686c-.096.208-.096.464 0 .64a9.857 9.857 0 003.36 3.84l-2.096 2.128c-.24.24-.272.624-.112.832l.736.736c.208.208.592.176.832-.112L16.84 1.702c.304-.24.336-.624.128-.832zM9.944 5.702c-.272-.064-.56-.144-.832-.144a2.438 2.438 0 00-2.448 2.448c0 .272.064.56.144.832L5.736 9.894a3.734 3.734 0 01-.496-1.888 3.83 3.83 0 013.84-3.84c.704 0 1.328.176 1.888.496l-1.024 1.04zm8.176 1.984c-.56-1.12-1.296-2.128-2.208-2.944l-2.976 2.944v.32a3.83 3.83 0 01-3.84 3.84h-.32l-1.888 1.888c.704.144 1.44.24 2.16.24 3.952 0 7.376-2.304 9.024-5.632a.65.65 0 00.048-.656z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group1Icon;
/* prettier-ignore-end */
