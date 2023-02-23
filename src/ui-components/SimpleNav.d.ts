/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SimpleNavOverridesProps = {
    SimpleNav?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    "Star 1"?: PrimitiveOverrideProps<IconProps>;
    AnesMap?: PrimitiveOverrideProps<TextProps>;
    Button37472737?: PrimitiveOverrideProps<ButtonProps>;
    Button37472744?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 32136582842"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32136582847"?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type SimpleNavProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SimpleNavOverridesProps | undefined | null;
}>;
export default function SimpleNav(props: SimpleNavProps): React.ReactElement;
