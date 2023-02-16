/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, SelectFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MappingMenusOverridesProps = {
    MappingMenus?: PrimitiveOverrideProps<FlexProps>;
    SelectField36572786?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField36572776?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField36572795?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField36572804?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type MappingMenusProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MappingMenusOverridesProps | undefined | null;
}>;
export default function MappingMenus(props: MappingMenusProps): React.ReactElement;
