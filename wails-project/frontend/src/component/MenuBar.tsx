import { Button, Grid, GridItem } from "@chakra-ui/react";
import { ScreenType } from "../App";

export const MenuBar = (props: {
  setCurrentScreen: (screen: ScreenType) => void;
}) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={"20px"}>
      <GridItem>
        <Button
          onClick={() => {
            props.setCurrentScreen("Translate");
          }}
        >
          {"<-"}
        </Button>
      </GridItem>
      <GridItem>
        <Button
          onClick={() => {
            props.setCurrentScreen("ApiSettings");
          }}
        >
          ApiSettings
        </Button>
      </GridItem>
    </Grid>
  );
};
