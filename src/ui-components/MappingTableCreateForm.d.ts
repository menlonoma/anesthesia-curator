/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MappingTableCreateFormInputValues = {
    labels?: string;
};
export declare type MappingTableCreateFormValidationValues = {
    labels?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MappingTableCreateFormOverridesProps = {
    MappingTableCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    labels?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type MappingTableCreateFormProps = React.PropsWithChildren<{
    overrides?: MappingTableCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MappingTableCreateFormInputValues) => MappingTableCreateFormInputValues;
    onSuccess?: (fields: MappingTableCreateFormInputValues) => void;
    onError?: (fields: MappingTableCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MappingTableCreateFormInputValues) => MappingTableCreateFormInputValues;
    onValidate?: MappingTableCreateFormValidationValues;
} & React.CSSProperties>;
export default function MappingTableCreateForm(props: MappingTableCreateFormProps): React.ReactElement;
