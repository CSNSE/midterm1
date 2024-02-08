/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, FlexProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
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
export declare type ProfilePageOverridesProps = {
    ProfilePage?: PrimitiveOverrideProps<ViewProps>;
    ReviewHomePage?: PrimitiveOverrideProps<ViewProps>;
    Content?: PrimitiveOverrideProps<ViewProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Profile?: PrimitiveOverrideProps<TextProps>;
    Divider4145138?: PrimitiveOverrideProps<DividerProps>;
    Button4145140?: PrimitiveOverrideProps<ButtonProps>;
    Divider4145146?: PrimitiveOverrideProps<DividerProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField4145171?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4145172?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4145173?: PrimitiveOverrideProps<TextFieldProps>;
    Button4145139?: PrimitiveOverrideProps<ButtonProps>;
    MyIcon?: MyIconProps;
    Button4156277?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ProfilePageProps = React.PropsWithChildren<Partial<ViewProps> & {
    profile?: any;
} & {
    overrides?: ProfilePageOverridesProps | undefined | null;
}>;
export default function ProfilePage(props: ProfilePageProps): React.ReactElement;
