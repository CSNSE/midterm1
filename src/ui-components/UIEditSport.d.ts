/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, FlexProps, IconProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type UIEditSportOverridesProps = {
    UIEditSport?: PrimitiveOverrideProps<ViewProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Create Review"?: PrimitiveOverrideProps<TextProps>;
    Divider41702581?: PrimitiveOverrideProps<DividerProps>;
    Forms?: PrimitiveOverrideProps<ViewProps>;
    TextField41702583?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41702589?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41702585?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41702584?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41702587?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41702588?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41702590?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41702586?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41702591?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41702592?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41702593?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41702594?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41702595?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41702596?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41702597?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41702598?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41702599?: PrimitiveOverrideProps<TextFieldProps>;
    Divider41702600?: PrimitiveOverrideProps<DividerProps>;
    "Frame 322"?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type UIEditSportProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UIEditSportOverridesProps | undefined | null;
}>;
export default function UIEditSport(props: UIEditSportProps): React.ReactElement;
