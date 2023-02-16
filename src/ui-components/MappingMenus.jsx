/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, SelectField } from "@aws-amplify/ui-react";
export default function MappingMenus(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="955px"
      height="322px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "MappingMenus")}
      {...rest}
    >
      <SelectField
        label="ABA mapping"
        width="267px"
        height="76px"
        shrink="0"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField36572786")}
      ></SelectField>
      <SelectField
        label="EPA mapping"
        width="267px"
        height="76px"
        shrink="0"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField36572776")}
      ></SelectField>
      <SelectField
        label="NTSA mapping"
        width="267px"
        height="76px"
        shrink="0"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField36572795")}
      ></SelectField>
      <SelectField
        label="Procedural skills mapping"
        width="267px"
        height="76px"
        shrink="0"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField36572804")}
      ></SelectField>
    </Flex>
  );
}
