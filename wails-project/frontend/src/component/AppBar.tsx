import {
  Box,
  Button,
  Flex,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { ScreenNameType } from "../App";

export const AppBar = (props: {
  setScreenName: (screen: ScreenNameType) => void;
}) => {
  return (
    <>
      <Box width="100%" bg={useColorModeValue("gray.100", "gray.900")} px={6}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Heading as="h1" size="md">
            TexTra-Tool-Wails
          </Heading>
          <Flex
            width="20%"
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Button
              onClick={() => {
                props.setScreenName("translateScreen");
              }}
            >
              Translate
            </Button>
            <Button
              onClick={() => {
                props.setScreenName("apiSettingsScreen");
              }}
            >
              Settings
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
