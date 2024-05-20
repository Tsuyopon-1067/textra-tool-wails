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
import { AppBar } from "./component/AppBar";

export type ScreenNameType = "translateScreen" | "apiSettingsScreen";

function App() {
  const [currentScreen, setScreenName] = useState(
    "translateScreen" as ScreenNameType
  );
  return (
    <>
      <AppBar setScreenName={setScreenName} />
      <Grid
        gridTemplateRows="3fr 1fr"
        width="100%"
        height="90%"
        padding="20px"
        box-sizing="border-box"
      >
        <GridItem rowSpan={1} colSpan={1}>
          {(() => {
            switch (currentScreen) {
              case "translateScreen":
                return <TranslateScreen />;
              case "apiSettingsScreen":
                return <ApiSettingsScreen />;
              default:
                return <TranslateScreen />;
            }
          })()}
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
