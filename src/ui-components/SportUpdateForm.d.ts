/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SportUpdateFormInputValues = {
    name?: string;
    grad?: string;
    sport?: string;
    position?: string;
    height?: string;
    weight?: string;
    team?: string;
    highlight?: string;
    Parentname?: string;
    Parentemail?: string;
    Parentphone?: string;
    Coachname?: string;
    Coachemail?: string;
    Coachphone?: string;
    gpa?: string;
    test?: string;
    image?: string;
    author?: string;
};
export declare type SportUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    grad?: ValidationFunction<string>;
    sport?: ValidationFunction<string>;
    position?: ValidationFunction<string>;
    height?: ValidationFunction<string>;
    weight?: ValidationFunction<string>;
    team?: ValidationFunction<string>;
    highlight?: ValidationFunction<string>;
    Parentname?: ValidationFunction<string>;
    Parentemail?: ValidationFunction<string>;
    Parentphone?: ValidationFunction<string>;
    Coachname?: ValidationFunction<string>;
    Coachemail?: ValidationFunction<string>;
    Coachphone?: ValidationFunction<string>;
    gpa?: ValidationFunction<string>;
    test?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SportUpdateFormOverridesProps = {
    SportUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    grad?: PrimitiveOverrideProps<TextFieldProps>;
    sport?: PrimitiveOverrideProps<TextFieldProps>;
    position?: PrimitiveOverrideProps<TextFieldProps>;
    height?: PrimitiveOverrideProps<TextFieldProps>;
    weight?: PrimitiveOverrideProps<TextFieldProps>;
    team?: PrimitiveOverrideProps<TextFieldProps>;
    highlight?: PrimitiveOverrideProps<TextFieldProps>;
    Parentname?: PrimitiveOverrideProps<TextFieldProps>;
    Parentemail?: PrimitiveOverrideProps<TextFieldProps>;
    Parentphone?: PrimitiveOverrideProps<TextFieldProps>;
    Coachname?: PrimitiveOverrideProps<TextFieldProps>;
    Coachemail?: PrimitiveOverrideProps<TextFieldProps>;
    Coachphone?: PrimitiveOverrideProps<TextFieldProps>;
    gpa?: PrimitiveOverrideProps<TextFieldProps>;
    test?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SportUpdateFormProps = React.PropsWithChildren<{
    overrides?: SportUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sport?: any;
    onSubmit?: (fields: SportUpdateFormInputValues) => SportUpdateFormInputValues;
    onSuccess?: (fields: SportUpdateFormInputValues) => void;
    onError?: (fields: SportUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SportUpdateFormInputValues) => SportUpdateFormInputValues;
    onValidate?: SportUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SportUpdateForm(props: SportUpdateFormProps): React.ReactElement;
