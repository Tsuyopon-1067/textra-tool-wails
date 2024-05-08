import { Button, Grid, Input } from "@chakra-ui/react";
import { useState } from "react";
import { WriteApiKey } from "../../wailsjs/go/main/App";
import { textraapi } from "../../wailsjs/go/models";

export const ApiSettingsScreen = () => {
  const [apiKey, setApiKey] = useState("");
  const [apiSecret, setApiSecret] = useState("");
  const [userName, setUserName] = useState("");
  const sendApiData = () => {
    const data: textraapi.ApiKey = {
      clientKey: apiKey,
      clientSecret: apiSecret,
      name: userName,
    };
    WriteApiKey(data);
  };
  return (
    <Grid>
      <Input onChange={(e) => setApiKey(e.target.value)} value={apiKey} />
      <Input onChange={(e) => setApiSecret(e.target.value)} value={apiSecret} />
      <Input onChange={(e) => setUserName(e.target.value)} value={userName} />
      <Button onClick={sendApiData}>Save</Button>
    </Grid>
  );
};
