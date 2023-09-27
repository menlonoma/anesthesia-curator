/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ArticleFullOverridesProps = {
    ArticleFull?: PrimitiveOverrideProps<FlexProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Text?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    titleText?: PrimitiveOverrideProps<TextProps>;
    Article?: PrimitiveOverrideProps<FlexProps>;
    contentText?: PrimitiveOverrideProps<TextProps>;
    "Name of source29766862"?: PrimitiveOverrideProps<FlexProps>;
    "Name of source29766863"?: PrimitiveOverrideProps<TextProps>;
    "Type of source40831001"?: PrimitiveOverrideProps<FlexProps>;
    "Type of source40831002"?: PrimitiveOverrideProps<TextProps>;
    Link?: PrimitiveOverrideProps<FlexProps>;
    URL?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ArticleFullProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ArticleFullOverridesProps | undefined | null;
}>;
export default function ArticleFull(props: ArticleFullProps): React.ReactElement;
