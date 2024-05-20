import { Button, Grid, GridItem, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  EnglishJapaneseFormat,
  Format,
  GenerateHtml,
  Translate,
  TranslateFormat,
} from "../../wailsjs/go/main/App";
import { CircularProgressIndicator } from "./CircularProgressIndicator";

export const TranslateScreen = () => {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");
  const [loadingState, setLoadingState] = useState(false);

  const handleButtonClick = async (operationFunction: String) => {
    setLoadingState(true);
    try {
      let result: string = "";
      switch (operationFunction) {
        case "format":
          result = await Format(inputText);
          break;
        case "translate":
          result = await Translate(inputText);
          break;
        case "translateFormat":
          result = await TranslateFormat(inputText);
          break;
        case "englishJapaneseFormat":
          result = await EnglishJapaneseFormat(inputText);
          break;
        case "generateHtml":
          result = await GenerateHtml(inputText);
          break;
        default:
          throw new Error("Invalid operation");
      }
      setResultText(result);
      setLoadingState(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loadingState && <CircularProgressIndicator />}
      <Grid
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap="20px"
        width="100%"
        height="100%"
      >
        <GridItem rowSpan={5} colSpan={1}>
          <Textarea
            onChange={(e: any) => setInputText(e.target.value)}
            width="100%"
            height="100%"
            value={inputText}
          />
        </GridItem>
        <GridItem rowSpan={5} colSpan={1}>
          <Textarea
            value={resultText}
            onChange={(e: any) => setResultText(e.target.value)}
            width="100%"
            height="100%"
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <Grid
            templateColumns="repeat(5, 1fr)"
            gap="20px"
            width="100%"
            height="100%"
          >
            <Button
              width="100%"
              height="100%"
              onClick={() => {
                handleButtonClick("format");
              }}
            >
              Format
            </Button>
            <Button
              width="100%"
              height="100%"
              onClick={() => {
                handleButtonClick("translate");
              }}
            >
              Translate
            </Button>
            <Button
              width="100%"
              height="100%"
              onClick={() => {
                handleButtonClick("translateFormat");
              }}
            >
              Translate + Format
            </Button>
            <Button
              width="100%"
              height="100%"
              onClick={() => {
                handleButtonClick("englishJapaneseFormat");
              }}
            >
              Format English + Japanese
            </Button>
            <Button
              width="100%"
              height="100%"
              onClick={() => {
                handleButtonClick("generateHtml");
              }}
            >
              Generate Html
            </Button>
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
};
