/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewContentCreateFormInputValues = {
    title?: string;
    link?: string;
    text?: string;
    userId?: string;
};
export declare type NewContentCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewContentCreateFormOverridesProps = {
    NewContentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewContentCreateFormProps = React.PropsWithChildren<{
    overrides?: NewContentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewContentCreateFormInputValues) => NewContentCreateFormInputValues;
    onSuccess?: (fields: NewContentCreateFormInputValues) => void;
    onError?: (fields: NewContentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NewContentCreateFormInputValues) => NewContentCreateFormInputValues;
    onValidate?: NewContentCreateFormValidationValues;
} & React.CSSProperties>;
export default function NewContentCreateForm(props: NewContentCreateFormProps): React.ReactElement;
