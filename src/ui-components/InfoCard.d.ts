/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InfoCardOverridesProps = {
    InfoCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 324"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    "Address of Restaurant"?: PrimitiveOverrideProps<TextProps>;
    "..."?: PrimitiveOverrideProps<TextProps>;
    "Website URL"?: PrimitiveOverrideProps<TextProps>;
    "...."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type InfoCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    d?: any;
} & {
    overrides?: InfoCardOverridesProps | undefined | null;
}>;
export default function InfoCard(props: InfoCardProps): React.ReactElement;
