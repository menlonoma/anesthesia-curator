/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MappingTable } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MappingTableUpdateFormInputValues = {
    labels?: string;
};
export declare type MappingTableUpdateFormValidationValues = {
    labels?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MappingTableUpdateFormOverridesProps = {
    MappingTableUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    labels?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type MappingTableUpdateFormProps = React.PropsWithChildren<{
    overrides?: MappingTableUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mappingTable?: MappingTable;
    onSubmit?: (fields: MappingTableUpdateFormInputValues) => MappingTableUpdateFormInputValues;
    onSuccess?: (fields: MappingTableUpdateFormInputValues) => void;
    onError?: (fields: MappingTableUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MappingTableUpdateFormInputValues) => MappingTableUpdateFormInputValues;
    onValidate?: MappingTableUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MappingTableUpdateForm(props: MappingTableUpdateFormProps): React.ReactElement;
