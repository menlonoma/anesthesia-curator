/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddContentOverridesProps = {
    AddContent?: PrimitiveOverrideProps<FlexProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Text?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    "Add new content"?: PrimitiveOverrideProps<TextProps>;
    TextField36642825?: PrimitiveOverrideProps<TextFieldProps>;
    TextAreaField?: PrimitiveOverrideProps<TextAreaFieldProps>;
    TextField36642832?: PrimitiveOverrideProps<TextFieldProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    TextField4050385?: PrimitiveOverrideProps<TextFieldProps>;
    Button37502745?: PrimitiveOverrideProps<ButtonProps>;
    Button37472748?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AddContentProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AddContentOverridesProps | undefined | null;
}>;
export default function AddContent(props: AddContentProps): React.ReactElement;
