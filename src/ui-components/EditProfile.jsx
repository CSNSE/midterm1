/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { generateClient } from "aws-amplify/api";
import { updateProfile } from "../graphql/mutations";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
const client = generateClient();
export default function EditProfile(props) {
  const { d, overrides, ...rest } = props;
  const [
    textFieldFourOneFiveFiveTwoTwoSevenValue,
    setTextFieldFourOneFiveFiveTwoTwoSevenValue,
  ] = useState("");
  const [
    textFieldFourOneFiveFiveTwoTwoEightValue,
    setTextFieldFourOneFiveFiveTwoTwoEightValue,
  ] = useState("");
  const [
    textFieldFourOneFiveFiveTwoTwoNineValue,
    setTextFieldFourOneFiveFiveTwoTwoNineValue,
  ] = useState("");
  const vectorOnClick = useNavigateAction({ type: "url", url: "/profile" });
  const buttonOnMouseOut = useNavigateAction({ type: "url", url: "/profile" });
  const buttonOnMouseDown = async () => {
    await client.graphql({
      query: updateProfile.replaceAll("__typename", ""),
      variables: {
        input: {
          Biography: textFieldFourOneFiveFiveTwoTwoSevenValue,
          Preference: textFieldFourOneFiveFiveTwoTwoEightValue,
          Location: textFieldFourOneFiveFiveTwoTwoNineValue,
          id: d?.id,
        },
      },
    });
  };
  return (
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
      {...getOverrideProps(overrides, "EditProfile")}
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
            fontSize="20px"
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
            children="Edit Profile"
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
          {...getOverrideProps(overrides, "Divider4155225")}
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
            label="About Me"
            placeholder="..."
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourOneFiveFiveTwoTwoSevenValue}
            onChange={(event) => {
              setTextFieldFourOneFiveFiveTwoTwoSevenValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4155227")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Food Preferences"
            placeholder="..."
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourOneFiveFiveTwoTwoEightValue}
            onChange={(event) => {
              setTextFieldFourOneFiveFiveTwoTwoEightValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4155228")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Main Location"
            placeholder="..."
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourOneFiveFiveTwoTwoNineValue}
            onChange={(event) => {
              setTextFieldFourOneFiveFiveTwoTwoNineValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4155229")}
          ></TextField>
        </Flex>
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider4155232")}
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
            onMouseOut={() => {
              buttonOnMouseOut();
            }}
            onMouseDown={() => {
              buttonOnMouseDown();
            }}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
