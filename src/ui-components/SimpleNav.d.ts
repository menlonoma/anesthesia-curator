/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SimpleNavOverridesProps = {
    SimpleNav?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    "Star 1"?: PrimitiveOverrideProps<IconProps>;
    "Anesthesia Map"?: PrimitiveOverrideProps<TextProps>;
    "Frame 418"?: PrimitiveOverrideProps<FlexProps>;
    Button37472737?: PrimitiveOverrideProps<ButtonProps>;
    Button37472744?: PrimitiveOverrideProps<ButtonProps>;
    Button37542827?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SimpleNavProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SimpleNavOverridesProps | undefined | null;
}>;
export default function SimpleNav(props: SimpleNavProps): React.ReactElement;
