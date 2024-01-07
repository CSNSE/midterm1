/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Grid,
  Button,
  Flex,
  Icon,
  Text,
  TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField, processFile, useNavigateAction } from "./utils"; //MAH processFile
import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { getDiary } from "../graphql/queries";
import { updateDiary } from "../graphql/mutations";
import { Field } from "@aws-amplify/ui-react/internal";  //MAH add!
import { StorageManager } from "@aws-amplify/ui-react-storage"; //MAH add!
const client = generateClient();
export default function UIEditReview(props) {
  const {
    idProp, //remove id:
    diary: diaryModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  console.log("thing update got it: " + {idProp}); //added
  const initialValues = {
    name: "",
    description: "",
    image: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [image, setImage] = React.useState(initialValues.image);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = diaryRecord
      ? { ...initialValues, ...diaryRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setImage(cleanValues.image);
    setErrors({});
  };
  const [diaryRecord, setDiaryRecord] = React.useState(diaryModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getDiary.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getDiary
        : diaryModelProp;
      setDiaryRecord(record);
    };
    queryData();
  }, [idProp, diaryModelProp]);
  React.useEffect(resetStateValues, [diaryRecord]);
  const validations = {
    name: [{ type: "Required" }],
    description: [],
    image: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const buttonOnMouseOut = useNavigateAction({ type: "url", url: "/" });
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          description: description ?? null,
          image: image ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateDiary.replaceAll("__typename", ""),
            variables: {
              input: {
                id: diaryRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
        buttonOnMouseOut(); //added to move screen to collection once updated
      }}
      {...getOverrideProps(overrides, "DiaryUpdateForm")}
      {...rest}
    >
    <Flex
      gap="16px"
      direction="column"
      width="320px"
      height="720px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "UIEditReview")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="720px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "xIcon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(92,102,112,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Edit Review"
            {...getOverrideProps(overrides, "Edit Review")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="272px"
          height="582px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Name of Restaurant"
            placeholder="name"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            isRequired={true}
            isReadOnly={false}
            value={name}
            onChange={(e) => {
              let { value } = e.target;
              if (onChange) {
                const modelFields = {
                  name: value,
                  description,
                  image,
                };
                const result = onChange(modelFields);
                value = result?.name ?? value;
              }
              if (errors.name?.hasError) {
                runValidationTasks("name", value);
              }
              setName(value);
            }}
            onBlur={() => runValidationTasks("name", name)}
            errorMessage={errors.name?.errorMessage}
            hasError={errors.name?.hasError}
            {...getOverrideProps(overrides, "name")}
          ></TextField>
          {/* <Field> REPLACES ORIGINAL Image TextField  //MAH */}
          <Field

              label={"Image"}
              isRequired={false}
              isReadOnly={false}
              >
              <StorageManager
              onUploadSuccess={({ key }) => {
                setImage(
                  key
                );
              }}
              processFile={processFile}
              accessLevel={"public"}
              acceptedFileTypes={[]}
              isResumable={false}
              showThumbnails={true}
              maxFileCount={1}
              {...getOverrideProps(overrides, "image")}
              ></StorageManager>
              </Field>
          <TextAreaField
            width="272px"
            height="406px"
            label="Description"
            placeholder="description"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            isRequired={false}
            isReadOnly={false}
            value={description}
            onChange={(e) => {
              let { value } = e.target;
              if (onChange) {
                const modelFields = {
                  name,
                  description: value,
                  image,
                };
                const result = onChange(modelFields);
                value = result?.description ?? value;
              }
              if (errors.description?.hasError) {
                runValidationTasks("description", value);
              }
              setDescription(value);
            }}
            onBlur={() => runValidationTasks("description", description)}
            errorMessage={errors.description?.errorMessage}
            hasError={errors.description?.hasError}
            {...getOverrideProps(overrides, "description")}
          ></TextAreaField>
        </Flex>
      
          
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || diaryModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
      </Flex>
    </Flex>
    </Grid>
  );
}
