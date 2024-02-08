/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Divider, Flex, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function ProfilePage(props) {
  const { profile, overrides, ...rest } = props;
  const buttonFourOneFourFiveOneFourZeroOnClick = useNavigateAction({
    type: "url",
    url: "stats",
  });
  const buttonFourOneFourFiveOneThreeNineOnClick = useNavigateAction({
    type: "url",
    url: "/history",
  });
  const buttonFourOneFiveSixTwoSevenSevenOnClick = useNavigateAction({
    type: "url",
    url: `${"/editprof/"}${profile?.id}`,
  });
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
          onClick={() => {
            buttonFourOneFourFiveOneFourZeroOnClick();
          }}
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
          onClick={() => {
            buttonFourOneFourFiveOneThreeNineOnClick();
          }}
          {...getOverrideProps(overrides, "Button4145139")}
        ></Button>
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="24px"
          left="272px"
          padding="0px 0px 0px 0px"
          type="edit"
          {...getOverrideProps(overrides, "MyIcon")}
        ></MyIcon>
        <Button
          width="42px"
          height="34px"
          position="absolute"
          borderRadius="4px"
          top="17px"
          left="263px"
          size="default"
          isDisabled={false}
          variation="default"
          onClick={() => {
            buttonFourOneFiveSixTwoSevenSevenOnClick();
          }}
          {...getOverrideProps(overrides, "Button4156277")}
        ></Button>
        <Flex
          gap="0"
          direction="column"
          width="320px"
          height="295px"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="52px"
          left="0px"
          padding="16px 16px 16px 16px"
          {...getOverrideProps(overrides, "Card Area")}
        >
          <Flex
            gap="8px"
            direction="column"
            width="unset"
            height="90px"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Text Group4157287")}
          >
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
              height="20px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="About Me"
              {...getOverrideProps(overrides, "About Me")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
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
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={profile?.Biography}
              {...getOverrideProps(overrides, "...4157291")}
            ></Text>
          </Flex>
          <Flex
            gap="8px"
            direction="column"
            width="unset"
            height="90px"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Text Group4157300")}
          >
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
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Food Preferences"
              {...getOverrideProps(overrides, "Food Preferences")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
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
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={profile?.Preference}
              {...getOverrideProps(overrides, "...4157304")}
            ></Text>
          </Flex>
          <Flex
            gap="8px"
            direction="column"
            width="unset"
            height="90px"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Text Group4157307")}
          >
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
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Location"
              {...getOverrideProps(overrides, "Location")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={profile?.Location}
              {...getOverrideProps(overrides, "...4157313")}
            ></Text>
          </Flex>
        </Flex>
      </View>
    </View>
  );
}
