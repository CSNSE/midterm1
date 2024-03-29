/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, FlexProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type Component1OverridesProps = {
    Component1?: PrimitiveOverrideProps<ViewProps>;
    ReviewHomePage?: PrimitiveOverrideProps<ViewProps>;
    Content?: PrimitiveOverrideProps<ViewProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Profile?: PrimitiveOverrideProps<TextProps>;
    Divider4145138?: PrimitiveOverrideProps<DividerProps>;
    Button4145139?: PrimitiveOverrideProps<ButtonProps>;
    Button4145140?: PrimitiveOverrideProps<ButtonProps>;
    Divider4145146?: PrimitiveOverrideProps<DividerProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField4145171?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4145172?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4145173?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Component1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component1OverridesProps | undefined | null;
}>;
export default function Component1(props: Component1Props): React.ReactElement;
