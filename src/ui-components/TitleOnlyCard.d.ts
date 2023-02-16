/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Content } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TitleOnlyCardOverridesProps = {
    TitleOnlyCard?: PrimitiveOverrideProps<FlexProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Text?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    "New Amplify Studio gives designers the ability to export UI to React code"?: PrimitiveOverrideProps<TextProps>;
    Status?: PrimitiveOverrideProps<FlexProps>;
    Mapped?: PrimitiveOverrideProps<TextProps>;
    MapperLink?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "Map this publication"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TitleOnlyCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    publication?: Content;
} & {
    overrides?: TitleOnlyCardOverridesProps | undefined | null;
}>;
export default function TitleOnlyCard(props: TitleOnlyCardProps): React.ReactElement;
