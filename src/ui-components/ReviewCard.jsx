/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { generateClient } from "aws-amplify/api";
import { deleteDiary } from "../graphql/mutations";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
const client = generateClient();
export default function ReviewCard(props) {
  const { d, overrides, ...rest } = props;
  console.log(d);
  const imageOnClick = useNavigateAction({
    type: "url",
    url: `${"/info/"}${d?.id}`,
  });
  const buttonFourOneOneSevenSixTwoOnClick = useNavigateAction({
    type: "url",
    url: `${"/edit/"}${d?.id}`,
  });
  const buttonFourZeroNineTwoSixFiveOnMouseDown = async () => {
    await client.graphql({
      query: deleteDiary.replaceAll("__typename", ""),
      variables: {
        input: {
          id: d?.id,
        },
      },
    });
  };
  const buttonFourZeroNineTwoSixFiveOnMouseUp = useNavigateAction({
    type: "url",
    url: "/",
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="320px"
      height="330px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ReviewCard")}
      {...rest}
    >
      <Image
        width="unset"
        height="160px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={d?.image}
        onClick={() => {
          imageOnClick();
        }}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <View
        width="320px"
        height="34px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 324")}
      >
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="5px"
          left="9px"
          padding="0px 0px 0px 0px"
          type="edit"
          {...getOverrideProps(overrides, "MyIcon4089123")}
        ></MyIcon>
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="5px"
          left="287px"
          padding="0px 0px 0px 0px"
          type="delete"
          {...getOverrideProps(overrides, "MyIcon4117139")}
        ></MyIcon>
        <Button
          width="42px"
          height="34px"
          position="absolute"
          borderRadius="4px"
          top="0px"
          left="0px"
          size="default"
          isDisabled={false}
          variation="default"
          onClick={() => {
            buttonFourOneOneSevenSixTwoOnClick();
          }}
          {...getOverrideProps(overrides, "Button411762")}
        ></Button>
        <Button
          width="42px"
          height="34px"
          position="absolute"
          borderRadius="4px"
          top="0px"
          left="278px"
          size="default"
          isDisabled={false}
          variation="default"
          onMouseDown={() => {
            buttonFourZeroNineTwoSixFiveOnMouseDown();
          }}
          onMouseUp={() => {
            buttonFourZeroNineTwoSixFiveOnMouseUp();
          }}
          {...getOverrideProps(overrides, "Button409265")}
        ></Button>
      </View>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="106px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group")}
        >
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
            children={d?.name}
            {...getOverrideProps(overrides, "Name of Restaurant")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
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
            children={d?.author}
            {...getOverrideProps(overrides, "Writer/Author")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
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
            children={d?.description}
            {...getOverrideProps(overrides, "Description of Review")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
