import { Button, Grid, GridItem, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import {
  EnglishJapaneseFormat,
  Format,
  Translate,
  TranslateFormat,
} from "../wailsjs/go/main/App";
import "./App.css";
import { TranslateScreen } from "./component/TranslateScreen";
import { ApiSettingsScreen } from "./component/ApiSettingsScreen";

function App() {
  return (
    <Grid
      gridTemplateRows="3fr 1fr"
      width="calc(100vw - 40px)"
      height="calc(100vh - 40px)"
      margin="20px"
    >
      <GridItem rowSpan={1} colSpan={1}>
        <TranslateScreen />;
        <ApiSettingsScreen />
      </GridItem>
    </Grid>
  );
}

export default App;
