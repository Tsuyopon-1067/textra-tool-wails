import { Button, Grid, GridItem, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import {
  EnglishJapaneseFormat,
  Format,
  Translate,
  TranslateFormat,
} from "../../wailsjs/go/main/App";

export const TranslateScreen = () => {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");

  return (
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
          templateColumns="repeat(4, 1fr)"
          gap="20px"
          width="100%"
          height="100%"
        >
          <Button
            width="100%"
            height="100%"
            onClick={() => {
              Format(inputText).then(setResultText);
            }}
          >
            Format
          </Button>
          <Button
            width="100%"
            height="100%"
            onClick={() => {
              Translate(inputText).then(setResultText);
            }}
          >
            Translate
          </Button>
          <Button
            width="100%"
            height="100%"
            onClick={() => {
              TranslateFormat(inputText).then(setResultText);
            }}
          >
            Translate + Format
          </Button>
          <Button
            width="100%"
            height="100%"
            onClick={() => {
              EnglishJapaneseFormat(inputText).then(setResultText);
            }}
          >
            Format English + Japanese
          </Button>
        </Grid>
      </GridItem>
    </Grid>
  );
};
