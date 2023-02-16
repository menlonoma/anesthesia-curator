/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextAreaField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { MappingTable } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MappingTableUpdateForm(props) {
  const {
    id: idProp,
    mappingTable,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    labels: "",
  };
  const [labels, setLabels] = React.useState(initialValues.labels);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = mappingTableRecord
      ? { ...initialValues, ...mappingTableRecord }
      : initialValues;
    setLabels(
      typeof cleanValues.labels === "string"
        ? cleanValues.labels
        : JSON.stringify(cleanValues.labels)
    );
    setErrors({});
  };
  const [mappingTableRecord, setMappingTableRecord] =
    React.useState(mappingTable);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(MappingTable, idProp)
        : mappingTable;
      setMappingTableRecord(record);
    };
    queryData();
  }, [idProp, mappingTable]);
  React.useEffect(resetStateValues, [mappingTableRecord]);
  const validations = {
    labels: [{ type: "JSON" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          labels,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            MappingTable.copyOf(mappingTableRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MappingTableUpdateForm")}
      {...rest}
    >
      <TextAreaField
        label="Labels"
        isRequired={false}
        isReadOnly={false}
        value={labels}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              labels: value,
            };
            const result = onChange(modelFields);
            value = result?.labels ?? value;
          }
          if (errors.labels?.hasError) {
            runValidationTasks("labels", value);
          }
          setLabels(value);
        }}
        onBlur={() => runValidationTasks("labels", labels)}
        errorMessage={errors.labels?.errorMessage}
        hasError={errors.labels?.hasError}
        {...getOverrideProps(overrides, "labels")}
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || mappingTable)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || mappingTable) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
