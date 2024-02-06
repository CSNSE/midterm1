/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Button,
  Divider,
  Flex,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function ProfilePage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="320px"
      height="445px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProfilePage")}
      {...rest}
    >
      <View
        width="320px"
        height="445px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "ReviewHomePage")}
      ></View>
      <View
        width="320px"
        height="445px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="272px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="24px"
          left="24px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="center"
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
            children="Profile"
            {...getOverrideProps(overrides, "Profile")}
          ></Text>
        </Flex>
        <Divider
          width="272px"
          height="1px"
          position="absolute"
          top="52px"
          left="24px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider4145138")}
        ></Divider>
        <Button
          width="125px"
          height="55px"
          position="absolute"
          border="5px SOLID rgba(13,26,38,1)"
          borderRadius="4px"
          padding="3px 11px 3px 11px"
          top="360px"
          left="170px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Statistics"
          {...getOverrideProps(overrides, "Button4145140")}
        ></Button>
        <Divider
          width="272px"
          height="7px"
          position="absolute"
          top="432px"
          left="23px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider4145146")}
        ></Divider>
        <Flex
          gap="16px"
          direction="column"
          width="272px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="71px"
          left="24px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="272px"
            height="unset"
            label="Bio/About Me"
            placeholder="..."
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField4145171")}
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
            {...getOverrideProps(overrides, "TextField4145172")}
          ></TextField>
          <TextField
            width="272px"
            height="unset"
            label="Location"
            placeholder="..."
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField4145173")}
          ></TextField>
        </Flex>
        <Button
          width="125px"
          height="55px"
          position="absolute"
          border="5px SOLID rgba(13,26,38,1)"
          borderRadius="4px"
          padding="3px 11px 3px 11px"
          top="360px"
          left="23px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Review History"
          {...getOverrideProps(overrides, "Button4145139")}
        ></Button>
      </View>
    </View>
  );
}
