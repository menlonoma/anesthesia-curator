/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SimpleNavProps } from "./SimpleNav";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SimpleNav2OverridesProps = {
    SimpleNav2?: PrimitiveOverrideProps<FlexProps>;
    SimpleNav?: SimpleNavProps;
} & EscapeHatchProps;
export declare type SimpleNav2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SimpleNav2OverridesProps | undefined | null;
}>;
export default function SimpleNav2(props: SimpleNav2Props): React.ReactElement;
