/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TitleOnlyCardProps } from "./TitleOnlyCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TitleOnlyCardCollectionOverridesProps = {
    TitleOnlyCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    TitleOnlyCard?: TitleOnlyCardProps;
} & EscapeHatchProps;
export declare type TitleOnlyCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => TitleOnlyCardProps;
} & {
    overrides?: TitleOnlyCardCollectionOverridesProps | undefined | null;
}>;
export default function TitleOnlyCardCollection(props: TitleOnlyCardCollectionProps): React.ReactElement;
