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
export declare type UICreateSportOverridesProps = {
    UICreateSport?: PrimitiveOverrideProps<ViewProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Create Sports"?: PrimitiveOverrideProps<TextProps>;
    Divider41712852?: PrimitiveOverrideProps<DividerProps>;
    Forms?: PrimitiveOverrideProps<ViewProps>;
    TextField41712854?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41712855?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41712856?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41712857?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41712858?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41712859?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41712860?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41712861?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41712862?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41712863?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41712864?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41712865?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41712866?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41712867?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41712868?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41712869?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41712870?: PrimitiveOverrideProps<TextFieldProps>;
    Divider41712871?: PrimitiveOverrideProps<DividerProps>;
    "Frame 322"?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type UICreateSportProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UICreateSportOverridesProps | undefined | null;
}>;
export default function UICreateSport(props: UICreateSportProps): React.ReactElement;
