/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ReviewHomePageOverridesProps = {
    ReviewHomePage?: PrimitiveOverrideProps<ViewProps>;
    Content?: PrimitiveOverrideProps<ViewProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    "Dylan\u2019s Food Review App"?: PrimitiveOverrideProps<TextProps>;
    Divider4137179?: PrimitiveOverrideProps<DividerProps>;
    Button4137215?: PrimitiveOverrideProps<ButtonProps>;
    Button4137211?: PrimitiveOverrideProps<ButtonProps>;
    Button4137219?: PrimitiveOverrideProps<ButtonProps>;
    Divider4137184?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type ReviewHomePageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ReviewHomePageOverridesProps | undefined | null;
}>;
export default function ReviewHomePage(props: ReviewHomePageProps): React.ReactElement;
