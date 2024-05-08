import { Button, Grid, GridItem, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import {
  EnglishJapaneseFormat,
  Format,
  Translate,
  TranslateFormat,
} from "../wailsjs/go/main/App";
import "./App.css";
import { MenuBar } from "./component/MenuBar";
import { TranslateScreen } from "./component/TranslateScreen";
import { ApiSettingsScreen } from "./component/ApiSettingsScreen";

export type ScreenType = "Translate" | "ApiSettings";
function App() {
  const [currentScreen, setCurrentScreen] = useState("Translate" as ScreenType);
  return (
    <Grid
      templateRows="100px 1fr"
      width="calc(100vw - 40px)"
      height="calc(100vh - 40px)"
      margin="20px"
    >
      <GridItem rowSpan={1} colSpan={1}>
        <MenuBar setCurrentScreen={setCurrentScreen} />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        {(() => {
          switch (currentScreen) {
            case "Translate":
              return <TranslateScreen />;
            case "ApiSettings":
              return <ApiSettingsScreen />;
            default:
              return <TranslateScreen />;
          }
        })()}
      </GridItem>
    </Grid>
  );
}

export default App;
