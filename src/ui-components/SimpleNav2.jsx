/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import SimpleNav from "./SimpleNav";
import { Flex } from "@aws-amplify/ui-react";
export default function SimpleNav2(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SimpleNav2")}
      {...rest}
    >
      <SimpleNav
        display="flex"
        gap="20px"
        direction="row"
        width="1144px"
        height="unset"
        justifyContent="space-between"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "SimpleNav")}
      ></SimpleNav>
    </Flex>
  );
}
