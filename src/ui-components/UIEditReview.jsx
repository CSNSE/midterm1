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
  Divider,
  Flex,
  Icon,
  Text,
TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField, processFile, useNavigateAction } from "./utils"; //MAH processFile
import { generateClient } from "aws-amplify/api";
import { getDiary } from "../graphql/queries";
import { updateDiary } from "../graphql/mutations";
import { Field } from "@aws-amplify/ui-react/internal";  //MAH add!
import { StorageManager } from "@aws-amplify/ui-react-storage"; //MAH add!
const client = generateClient();
export default function UIEditReview(props) {
  const {
        idProp,
        diary: diaryModelProp,
        onSuccess,
        onError,
        onSubmit,
        onValidate,
        onChange,
        overrides,
        ...rest
      } = props;
      const initialValues = {
        name: "",
        image: undefined,
        description: "",
        address: "",
        website: "",
      };
      const [name, setName] = React.useState(initialValues.name);
      const [image, setImage] = React.useState(initialValues.image);
      const [description, setDescription] = React.useState(
        initialValues.description
      );
      const [address, setAddress] = React.useState(initialValues.address);
      const [website, setWebsite] = React.useState(initialValues.website);
      const [errors, setErrors] = React.useState({});
      const resetStateValues = () => {
        const cleanValues = diaryRecord
          ? { ...initialValues, ...diaryRecord }
          : initialValues;
        setName(cleanValues.name);
        setImage(cleanValues.image);
        setDescription(cleanValues.description);
        setAddress(cleanValues.address);
        setWebsite(cleanValues.website);
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
        name: [],
        image: [],
        description: [],
        address: [],
        website: [],
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
  return (
    // <Grid
    //   as="form"
    //   rowGap="15px"
    //   columnGap="15px"
    //   padding="20px"
    //   onSubmit={async (event) => {
    //     event.preventDefault();
    //     let modelFields = {
    //       name: name ?? null,
    //       image: image ?? null,
    //       description: description ?? null,
    //       address: address ?? null,
    //       website: website ?? null,
    //     };
    //     const validationResponses = await Promise.all(
    //       Object.keys(validations).reduce((promises, fieldName) => {
    //         if (Array.isArray(modelFields[fieldName])) {
    //           promises.push(
    //             ...modelFields[fieldName].map((item) =>
    //               runValidationTasks(fieldName, item)
    //             )
    //           );
    //           return promises;
    //         }
    //         promises.push(
    //           runValidationTasks(fieldName, modelFields[fieldName])
    //         );
    //         return promises;
    //       }, [])
    //     );
    //     if (validationResponses.some((r) => r.hasError)) {
    //       return;
    //     }
    //     if (onSubmit) {
    //       modelFields = onSubmit(modelFields);
    //     }
    //     try {
    //       Object.entries(modelFields).forEach(([key, value]) => {
    //         if (typeof value === "string" && value === "") {
    //           modelFields[key] = null;
    //         }
    //       });
    //       await client.graphql({
    //         query: updateDiary.replaceAll("__typename", ""),
    //         variables: {
    //           input: {
    //             id: diaryRecord.id,
    //             ...modelFields,
    //           },
    //         },
    //       });
    //       if (onSuccess) {
    //         onSuccess(modelFields);
    //       }
    //     } catch (err) {
    //       if (onError) {
    //         const messages = err.errors.map((e) => e.message).join("\n");
    //         onError(modelFields, messages);
    //       }
    //     }
    //   }}
    //   {...getOverrideProps(overrides, "DiaryUpdateForm")}
    //   {...rest}
    // ></Grid>
    <Flex
      gap="16px"
      direction="column"
      width="320px"
      height="unset"
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
        height="unset"
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
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
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
              onClick={() => {
                vectorOnClick();
              }}
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
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider4075319")}
        ></Divider>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="272px"
            height="unset"
            label="Name of Restaurant"
            placeholder="Sage Dining"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourZeroSevenFiveFourFiveZeroValue}
            onChange={(event) => {
              setTextFieldFourZeroSevenFiveFourFiveZeroValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField4075450")}
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
            height="unset"
            label="Written Review"
            placeholder="It was good..."
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourZeroSevenFiveFourSevenEightValue}
            onChange={(event) => {
              setTextFieldFourZeroSevenFiveFourSevenEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField4075478")}
          ></TextAreaField>
          <TextField
            width="272px"
            height="unset"
            label="Address of Restaurant"
            placeholder="123 Pineapple Dr"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField4148136")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Restaurant Website"
            placeholder="www.example.com"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField4148157")}
          ></TextField>
        </Flex>
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider4075324")}
        ></Divider>
        <Flex
          gap="25px"
          direction="row"
          width="272px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="13px 39px 13px 39px"
          {...getOverrideProps(overrides, "Frame 322")}
        >
          <Button
            width="140px"
            height="unset"
            borderRadius="4px"
            shrink="0"
            backgroundColor="rgba(67,168,84,1)"
            size="default"
            isDisabled={false}
            variation="default"
            children="Save"
            onClick={() => {
              buttonOnClick();
            }}
            onMouseOut={() => {
              buttonOnMouseOut();
            }}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}


// export default function UIEditReview(props) {
//   const {
//     idProp,
//     diary: diaryModelProp,
//     onSuccess,
//     onError,
//     onSubmit,
//     onValidate,
//     onChange,
//     overrides,
//     ...rest
//   } = props;
//   const initialValues = {
//     name: "",
//     image: undefined,
//     description: "",
//     address: "",
//     website: "",
//   };
//   const [name, setName] = React.useState(initialValues.name);
//   const [image, setImage] = React.useState(initialValues.image);
//   const [description, setDescription] = React.useState(
//     initialValues.description
//   );
//   const [address, setAddress] = React.useState(initialValues.address);
//   const [website, setWebsite] = React.useState(initialValues.website);
//   const [errors, setErrors] = React.useState({});
//   const resetStateValues = () => {
//     const cleanValues = diaryRecord
//       ? { ...initialValues, ...diaryRecord }
//       : initialValues;
//     setName(cleanValues.name);
//     setImage(cleanValues.image);
//     setDescription(cleanValues.description);
//     setAddress(cleanValues.address);
//     setWebsite(cleanValues.website);
//     setErrors({});
//   };
//   const [diaryRecord, setDiaryRecord] = React.useState(diaryModelProp);
//   React.useEffect(() => {
//     const queryData = async () => {
//       const record = idProp
//         ? (
//             await client.graphql({
//               query: getDiary.replaceAll("__typename", ""),
//               variables: { id: idProp },
//             })
//           )?.data?.getDiary
//         : diaryModelProp;
//       setDiaryRecord(record);
//     };
//     queryData();
//   }, [idProp, diaryModelProp]);
//   React.useEffect(resetStateValues, [diaryRecord]);
//   const validations = {
//     name: [],
//     image: [],
//     description: [],
//     address: [],
//     website: [],
//   };
//   const runValidationTasks = async (
//     fieldName,
//     currentValue,
//     getDisplayValue
//   ) => {
//     const value =
//       currentValue && getDisplayValue
//         ? getDisplayValue(currentValue)
//         : currentValue;
//     let validationResponse = validateField(value, validations[fieldName]);
//     const customValidator = fetchByPath(onValidate, fieldName);
//     if (customValidator) {
//       validationResponse = await customValidator(value, validationResponse);
//     }
//     setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
//     return validationResponse;
//   };
//   return (
    // <Grid
    //   as="form"
    //   rowGap="15px"
    //   columnGap="15px"
    //   padding="20px"
    //   onSubmit={async (event) => {
    //     event.preventDefault();
    //     let modelFields = {
    //       name: name ?? null,
    //       image: image ?? null,
    //       description: description ?? null,
    //       address: address ?? null,
    //       website: website ?? null,
    //     };
    //     const validationResponses = await Promise.all(
    //       Object.keys(validations).reduce((promises, fieldName) => {
    //         if (Array.isArray(modelFields[fieldName])) {
    //           promises.push(
    //             ...modelFields[fieldName].map((item) =>
    //               runValidationTasks(fieldName, item)
    //             )
    //           );
    //           return promises;
    //         }
    //         promises.push(
    //           runValidationTasks(fieldName, modelFields[fieldName])
    //         );
    //         return promises;
    //       }, [])
    //     );
    //     if (validationResponses.some((r) => r.hasError)) {
    //       return;
    //     }
    //     if (onSubmit) {
    //       modelFields = onSubmit(modelFields);
    //     }
    //     try {
    //       Object.entries(modelFields).forEach(([key, value]) => {
    //         if (typeof value === "string" && value === "") {
    //           modelFields[key] = null;
    //         }
    //       });
    //       await client.graphql({
    //         query: updateDiary.replaceAll("__typename", ""),
    //         variables: {
    //           input: {
    //             id: diaryRecord.id,
    //             ...modelFields,
    //           },
    //         },
    //       });
    //       if (onSuccess) {
    //         onSuccess(modelFields);
    //       }
    //     } catch (err) {
    //       if (onError) {
    //         const messages = err.errors.map((e) => e.message).join("\n");
    //         onError(modelFields, messages);
    //       }
    //     }
    //   }}
    //   {...getOverrideProps(overrides, "DiaryUpdateForm")}
    //   {...rest}
    // >
//       <TextField
//         label="Name"
//         isRequired={false}
//         isReadOnly={false}
//         value={name}
//         onChange={(e) => {
//           let { value } = e.target;
//           if (onChange) {
//             const modelFields = {
//               name: value,
//               image,
//               description,
//               address,
//               website,
//             };
//             const result = onChange(modelFields);
//             value = result?.name ?? value;
//           }
//           if (errors.name?.hasError) {
//             runValidationTasks("name", value);
//           }
//           setName(value);
//         }}
//         onBlur={() => runValidationTasks("name", name)}
//         errorMessage={errors.name?.errorMessage}
//         hasError={errors.name?.hasError}
//         {...getOverrideProps(overrides, "name")}
//       ></TextField>
//       <Field
//         errorMessage={errors.image?.errorMessage}
//         hasError={errors.image?.hasError}
//         label={"Image"}
//         isRequired={false}
//         isReadOnly={false}
//       >
//         {diaryRecord && (
//           <StorageManager
//             defaultFiles={[{ key: diaryRecord.image }]}
//             onUploadSuccess={({ key }) => {
//               setImage((prev) => {
//                 let value = key;
//                 if (onChange) {
//                   const modelFields = {
//                     name,
//                     image: value,
//                     description,
//                     address,
//                     website,
//                   };
//                   const result = onChange(modelFields);
//                   value = result?.image ?? value;
//                 }
//                 return value;
//               });
//             }}
//             onFileRemove={({ key }) => {
//               setImage((prev) => {
//                 let value = initialValues?.image;
//                 if (onChange) {
//                   const modelFields = {
//                     name,
//                     image: value,
//                     description,
//                     address,
//                     website,
//                   };
//                   const result = onChange(modelFields);
//                   value = result?.image ?? value;
//                 }
//                 return value;
//               });
//             }}
//             processFile={processFile}
//             accessLevel={"private"}
//             acceptedFileTypes={[]}
//             isResumable={false}
//             showThumbnails={true}
//             maxFileCount={1}
//             {...getOverrideProps(overrides, "image")}
//           ></StorageManager>
//         )}
//       </Field>
//       <TextField
//         label="Description"
//         isRequired={false}
//         isReadOnly={false}
//         value={description}
//         onChange={(e) => {
//           let { value } = e.target;
//           if (onChange) {
//             const modelFields = {
//               name,
//               image,
//               description: value,
//               address,
//               website,
//             };
//             const result = onChange(modelFields);
//             value = result?.description ?? value;
//           }
//           if (errors.description?.hasError) {
//             runValidationTasks("description", value);
//           }
//           setDescription(value);
//         }}
//         onBlur={() => runValidationTasks("description", description)}
//         errorMessage={errors.description?.errorMessage}
//         hasError={errors.description?.hasError}
//         {...getOverrideProps(overrides, "description")}
//       ></TextField>
//       <TextField
//         label="Address"
//         isRequired={false}
//         isReadOnly={false}
//         value={address}
//         onChange={(e) => {
//           let { value } = e.target;
//           if (onChange) {
//             const modelFields = {
//               name,
//               image,
//               description,
//               address: value,
//               website,
//             };
//             const result = onChange(modelFields);
//             value = result?.address ?? value;
//           }
//           if (errors.address?.hasError) {
//             runValidationTasks("address", value);
//           }
//           setAddress(value);
//         }}
//         onBlur={() => runValidationTasks("address", address)}
//         errorMessage={errors.address?.errorMessage}
//         hasError={errors.address?.hasError}
//         {...getOverrideProps(overrides, "address")}
//       ></TextField>
//       <TextField
//         label="Website"
//         isRequired={false}
//         isReadOnly={false}
//         value={website}
//         onChange={(e) => {
//           let { value } = e.target;
//           if (onChange) {
//             const modelFields = {
//               name,
//               image,
//               description,
//               address,
//               website: value,
//             };
//             const result = onChange(modelFields);
//             value = result?.website ?? value;
//           }
//           if (errors.website?.hasError) {
//             runValidationTasks("website", value);
//           }
//           setWebsite(value);
//         }}
//         onBlur={() => runValidationTasks("website", website)}
//         errorMessage={errors.website?.errorMessage}
//         hasError={errors.website?.hasError}
//         {...getOverrideProps(overrides, "website")}
//       ></TextField>
//       <Flex
//         justifyContent="space-between"
//         {...getOverrideProps(overrides, "CTAFlex")}
//       >
//         <Flex
//           gap="15px"
//           {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
//         >
//           <Button
//             children="Submit"
//             type="submit"
//             variation="primary"
//             isDisabled={
//               !(idProp || diaryModelProp) ||
//               Object.values(errors).some((e) => e?.hasError)
//             }
//             {...getOverrideProps(overrides, "SubmitButton")}
//           ></Button>
//         </Flex>
//       </Flex>
//     </Grid>
//   );
// }