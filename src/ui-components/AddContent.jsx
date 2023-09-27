/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  SelectField,
  Text,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
export default function AddContent(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="960px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="24px 24px 24px 24px"
      {...getOverrideProps(overrides, "AddContent")}
      {...rest}
    >
      <Flex
        gap="40px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Body")}
      >
        <Flex
          gap="0"
          direction="column"
          width="912px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text")}
        >
          <Flex
            gap="5px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Title")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="25px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Add new content"
              {...getOverrideProps(overrides, "Add new content")}
            ></Text>
            <TextField
              width="300px"
              height="unset"
              shrink="0"
              placeholder="Placeholder"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField36642825")}
            ></TextField>
            <TextAreaField
              width="912px"
              height="138px"
              shrink="0"
              placeholder="Placeholder"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextAreaField")}
            ></TextAreaField>
            <TextField
              width="300px"
              height="unset"
              placeholder="i.e. Toolbox Quizbank"
              shrink="0"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField36642832")}
            ></TextField>
            <SelectField
              width="300px"
              height="unset"
              shrink="0"
              placeholder="Placeholder"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "SelectField")}
            ></SelectField>
            <TextField
              width="300px"
              height="unset"
              shrink="0"
              placeholder="Placeholder"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField4050385")}
            ></TextField>
          </Flex>
        </Flex>
      </Flex>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="default"
        {...getOverrideProps(overrides, "Button37502745")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="primary"
        {...getOverrideProps(overrides, "Button37472748")}
      ></Button>
    </Flex>
  );
}
