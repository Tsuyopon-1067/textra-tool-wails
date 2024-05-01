import { useState } from "react";
import "./App.css";
import { FetchTranslation } from "../wailsjs/go/main/App";
import { Box, Button, Grid, GridItem, Textarea } from "@chakra-ui/react";

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

    return (
        <Grid
            templateRows='repeat(10, 1fr)'
            templateColumns='repeat(2, 1fr)'
            gap={10}
            width='calc(100vw - 20px)'
            height='calc(100vh - 20px)'
            margin='10'
        >
            <GridItem rowSpan={9} colSpan={1}>
                <Textarea onChange={(e: any) => setEnglishText(e.target.value)}
                    width='100%'
                    height='100%'
                    value={englishText}
                />
            </GridItem>
            <GridItem rowSpan={9} colSpan={1}>
                <Textarea
                    value={japaneseText}
                    onChange={(e: any) => setJapaneseText(e.target.value)}
                    width='100%'
                    height='100%'
                />
            </GridItem>
            <GridItem rowSpan={1} colSpan={2}>
                <Button
                    width='100%'
                    height='100%'
                    onClick={translate}>Translate</Button>
            </GridItem>
        </Grid>
    );
}

export default App;
