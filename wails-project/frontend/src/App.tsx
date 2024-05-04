import {
  Button,
  Grid,
  GridItem,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  FetchArrangeSentences,
  FetchTranslation,
} from "../wailsjs/go/main/App";
import "./App.css";

function App() {
  const [englishText, setEnglishText] = useState("");
  const [japaneseText, setJapaneseText] = useState("");
  const updateTranslateText = (result: string[]) => {
    let newText = "";
    result.forEach((element) => {
      newText += element + "\n";
    });
    setJapaneseText(newText);
  };

  function translate() {
    const text = englishText;
    FetchTranslation(text).then(updateTranslateText);
  }

  function arange() {
    const text = englishText;
    FetchArrangeSentences(text).then(setJapaneseText);
  }
  const [mode, setMode] = useState("0");

  return (
    <Grid
      templateRows="repeat(10, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={10}
      width="calc(100vw - 20px)"
      height="calc(100vh - 20px)"
      margin="10px"
    >
      <GridItem rowSpan={1} colSpan={2}>
        <RadioGroup onChange={setMode} value={mode}>
          <Stack direction="row">
            <Radio value="0" colorScheme="red">
              文書翻訳
            </Radio>
            <Radio value="1">文書統合</Radio>
          </Stack>
        </RadioGroup>
      </GridItem>
      <GridItem rowSpan={8} colSpan={1}>
        <Textarea
          onChange={(e: any) => setEnglishText(e.target.value)}
          width="100%"
          height="100%"
          value={englishText}
        />
      </GridItem>
      <GridItem rowSpan={8} colSpan={1}>
        <Textarea
          value={japaneseText}
          onChange={(e: any) => setJapaneseText(e.target.value)}
          width="100%"
          height="100%"
        />
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}>
        {mode === "0" ? (
          <Button width="100%" height="100%" onClick={translate}>
            Translate
          </Button>
        ) : (
          <Button width="100%" height="100%" onClick={arange}>
            Arrangement
          </Button>
        )}
      </GridItem>
    </Grid>
  );
}

export default App;
