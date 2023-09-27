/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddTitleOverridesProps = {
    "1"?: PrimitiveOverrideProps<TextProps>;
    "2"?: PrimitiveOverrideProps<TextProps>;
    AddTitle?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4358"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4354"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4357"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4359"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 4360"?: PrimitiveOverrideProps<IconProps>;
    "Line 18"?: PrimitiveOverrideProps<IconProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    "Add new resource"?: PrimitiveOverrideProps<TextProps>;
    "Frame 37141"?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 37140"?: PrimitiveOverrideProps<FlexProps>;
    Continue?: PrimitiveOverrideProps<TextProps>;
    " Fill / arrow-left"?: PrimitiveOverrideProps<ViewProps>;
    "Group 37324"?: PrimitiveOverrideProps<ViewProps>;
    "Resource data"?: PrimitiveOverrideProps<TextProps>;
    "Skill mapping"?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Source?: PrimitiveOverrideProps<TextProps>;
    Type?: PrimitiveOverrideProps<TextProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    "Group 37135"?: PrimitiveOverrideProps<ViewProps>;
    "Group 3713338526871"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 43538526872"?: PrimitiveOverrideProps<IconProps>;
    "Group 37136"?: PrimitiveOverrideProps<ViewProps>;
    "Group 3713338526875"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 43538526876"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type AddTitleProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AddTitleOverridesProps | undefined | null;
}>;
export default function AddTitle(props: AddTitleProps): React.ReactElement;
