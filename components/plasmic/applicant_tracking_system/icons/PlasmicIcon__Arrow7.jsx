// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Arrow7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 8"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.368 4.354a.5.5 0 000-.708L17.186.464a.5.5 0 10-.707.708L19.308 4l-2.829 2.828a.5.5 0 00.707.708l3.182-3.182zM0 4.5h20.015v-1H0v1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Arrow7Icon;
/* prettier-ignore-end */
