import { Button, Grid, GridItem, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import {
  EnglishJapaneseFormat,
  Format,
  GenerateHtml,
  Translate,
  TranslateFormat,
} from "../../wailsjs/go/main/App";
import { CircularProgressIndicator } from "./CircularProgressIndicator";
import { HandleButtonClick } from "./HandleButtonClick";

export const TranslateScreen = () => {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");
  const [loadingState, setLoadingState] = useState(false);

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
                HandleButtonClick(
                  Format(inputText),
                  setResultText,
                  setLoadingState
                );
              }}
            >
              Format
            </Button>
            <Button
              width="100%"
              height="100%"
              onClick={() => {
                HandleButtonClick(
                  Translate(inputText),
                  setResultText,
                  setLoadingState
                );
              }}
            >
              Translate
            </Button>
            <Button
              width="100%"
              height="100%"
              onClick={() => {
                HandleButtonClick(
                  TranslateFormat(inputText),
                  setResultText,
                  setLoadingState
                );
              }}
            >
              Translate + Format
            </Button>
            <Button
              width="100%"
              height="100%"
              onClick={() => {
                HandleButtonClick(
                  EnglishJapaneseFormat(inputText),
                  setResultText,
                  setLoadingState
                );
              }}
            >
              Format English + Japanese
            </Button>
            <Button
              width="100%"
              height="100%"
              onClick={() => {
                HandleButtonClick(
                  GenerateHtml(inputText),
                  setResultText,
                  setLoadingState
                );
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
