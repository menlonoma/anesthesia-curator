/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddSourceOverridesProps = {
    "1"?: PrimitiveOverrideProps<TextProps>;
    "2"?: PrimitiveOverrideProps<TextProps>;
    AddSource?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4358"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4354"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4357"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4359"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 4360"?: PrimitiveOverrideProps<IconProps>;
    "Line 18"?: PrimitiveOverrideProps<IconProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    " Fill / arrow-left"?: PrimitiveOverrideProps<ViewProps>;
    "Add new resource"?: PrimitiveOverrideProps<TextProps>;
    "Frame 37141"?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 37140"?: PrimitiveOverrideProps<FlexProps>;
    Continue?: PrimitiveOverrideProps<TextProps>;
    "Group 37324"?: PrimitiveOverrideProps<ViewProps>;
    "Resource data"?: PrimitiveOverrideProps<TextProps>;
    "Skill mapping"?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Source?: PrimitiveOverrideProps<TextProps>;
    Type?: PrimitiveOverrideProps<TextProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    "Group 37135"?: PrimitiveOverrideProps<ViewProps>;
    "Group 3713338578181"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 43538578182"?: PrimitiveOverrideProps<IconProps>;
    "Group 37136"?: PrimitiveOverrideProps<ViewProps>;
    "Group 3713338578185"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 43538578186"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type AddSourceProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AddSourceOverridesProps | undefined | null;
}>;
export default function AddSource(props: AddSourceProps): React.ReactElement;
