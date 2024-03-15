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
export declare type ResumeUpdateFormInputValues = {
    name?: string;
    grad?: string;
    sport?: string;
    position?: string;
    height?: string;
    weight?: string;
    team?: string;
    highlight?: string;
    parentname?: string;
    parentemail?: string;
    parentphone?: string;
    coachname?: string;
    coachemail?: string;
    coachphone?: string;
    gpa?: string;
    test?: string;
    image?: string;
    author?: string;
};
export declare type ResumeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    grad?: ValidationFunction<string>;
    sport?: ValidationFunction<string>;
    position?: ValidationFunction<string>;
    height?: ValidationFunction<string>;
    weight?: ValidationFunction<string>;
    team?: ValidationFunction<string>;
    highlight?: ValidationFunction<string>;
    parentname?: ValidationFunction<string>;
    parentemail?: ValidationFunction<string>;
    parentphone?: ValidationFunction<string>;
    coachname?: ValidationFunction<string>;
    coachemail?: ValidationFunction<string>;
    coachphone?: ValidationFunction<string>;
    gpa?: ValidationFunction<string>;
    test?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResumeUpdateFormOverridesProps = {
    ResumeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    grad?: PrimitiveOverrideProps<TextFieldProps>;
    sport?: PrimitiveOverrideProps<TextFieldProps>;
    position?: PrimitiveOverrideProps<TextFieldProps>;
    height?: PrimitiveOverrideProps<TextFieldProps>;
    weight?: PrimitiveOverrideProps<TextFieldProps>;
    team?: PrimitiveOverrideProps<TextFieldProps>;
    highlight?: PrimitiveOverrideProps<TextFieldProps>;
    parentname?: PrimitiveOverrideProps<TextFieldProps>;
    parentemail?: PrimitiveOverrideProps<TextFieldProps>;
    parentphone?: PrimitiveOverrideProps<TextFieldProps>;
    coachname?: PrimitiveOverrideProps<TextFieldProps>;
    coachemail?: PrimitiveOverrideProps<TextFieldProps>;
    coachphone?: PrimitiveOverrideProps<TextFieldProps>;
    gpa?: PrimitiveOverrideProps<TextFieldProps>;
    test?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ResumeUpdateFormProps = React.PropsWithChildren<{
    overrides?: ResumeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    resume?: any;
    onSubmit?: (fields: ResumeUpdateFormInputValues) => ResumeUpdateFormInputValues;
    onSuccess?: (fields: ResumeUpdateFormInputValues) => void;
    onError?: (fields: ResumeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResumeUpdateFormInputValues) => ResumeUpdateFormInputValues;
    onValidate?: ResumeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ResumeUpdateForm(props: ResumeUpdateFormProps): React.ReactElement;
