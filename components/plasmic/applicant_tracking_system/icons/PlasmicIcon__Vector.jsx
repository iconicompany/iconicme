// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 20"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.877 17.04c.35-.23.815-.23 1.164 0l4.54 2.768c.93.576 1.978-.23 1.745-1.269l-1.164-5.19c-.116-.461 0-.807.35-1.153l4.073-3.46c.815-.692.35-1.96-.698-1.96l-5.238-.462c-.465 0-.814-.346-.93-.692L11.506.778a1.094 1.094 0 00-2.095 0L7.317 5.622c-.116.346-.582.692-.931.692l-5.354.462c-1.047 0-1.397 1.268-.582 1.96l4.074 3.46c.349.23.465.692.349 1.153l-1.164 5.19c-.233 1.038.815 1.73 1.746 1.269l4.422-2.768z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
