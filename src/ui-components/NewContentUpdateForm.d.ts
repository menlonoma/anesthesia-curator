/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NewContent } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewContentUpdateFormInputValues = {
    title?: string;
    link?: string;
    text?: string;
    userId?: string;
};
export declare type NewContentUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewContentUpdateFormOverridesProps = {
    NewContentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewContentUpdateFormProps = React.PropsWithChildren<{
    overrides?: NewContentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    newContent?: NewContent;
    onSubmit?: (fields: NewContentUpdateFormInputValues) => NewContentUpdateFormInputValues;
    onSuccess?: (fields: NewContentUpdateFormInputValues) => void;
    onError?: (fields: NewContentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NewContentUpdateFormInputValues) => NewContentUpdateFormInputValues;
    onValidate?: NewContentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NewContentUpdateForm(props: NewContentUpdateFormProps): React.ReactElement;
