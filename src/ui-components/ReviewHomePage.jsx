/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Divider, Flex, Text, View } from "@aws-amplify/ui-react";
export default function ReviewHomePage(props) {
  const { overrides, ...rest } = props;
  const buttonFourOneThreeSevenTwoOneFiveOnClick = useNavigateAction({
    type: "url",
    url: "/mine",
  });
  const buttonFourOneThreeSevenTwoOneOneOnClick = useNavigateAction({
    type: "url",
    url: "/all",
  });
  const buttonFourOneThreeSevenTwoOneNineOnClick = useNavigateAction({
    type: "url",
    url: "/profile",
  });
  return (
    <View
      width="320px"
      height="342px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ReviewHomePage")}
      {...rest}
    >
      <View
        width="320px"
        height="335px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
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
            children="Dylan’s &#xA;Food Review App"
            {...getOverrideProps(overrides, "Dylan\u2019s Food Review App")}
          ></Text>
        </Flex>
        <Divider
          width="272px"
          height="1px"
          position="absolute"
          top="93px"
          left="24px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider4137179")}
        ></Divider>
        <Button
          width="200px"
          height="50px"
          position="absolute"
          border="5px SOLID rgba(13,26,38,1)"
          borderRadius="4px"
          padding="3px 11px 3px 11px"
          top="182px"
          left="60px"
          size="default"
          isDisabled={false}
          variation="default"
          children="My Entries"
          onClick={() => {
            buttonFourOneThreeSevenTwoOneFiveOnClick();
          }}
          {...getOverrideProps(overrides, "Button4137215")}
        ></Button>
        <Button
          width="200px"
          height="50px"
          position="absolute"
          border="5px SOLID rgba(13,26,38,1)"
          borderRadius="4px"
          padding="3px 11px 3px 11px"
          top="113px"
          left="60px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Home Page"
          onClick={() => {
            buttonFourOneThreeSevenTwoOneOneOnClick();
          }}
          {...getOverrideProps(overrides, "Button4137211")}
        ></Button>
        <Button
          width="200px"
          height="50px"
          position="absolute"
          border="5px SOLID rgba(13,26,38,1)"
          borderRadius="4px"
          padding="3px 11px 3px 11px"
          top="251px"
          left="59px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Profile"
          onClick={() => {
            buttonFourOneThreeSevenTwoOneNineOnClick();
          }}
          {...getOverrideProps(overrides, "Button4137219")}
        ></Button>
        <Divider
          width="272px"
          height="7px"
          position="absolute"
          top="327px"
          left="24px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider4137184")}
        ></Divider>
      </View>
    </View>
  );
}
