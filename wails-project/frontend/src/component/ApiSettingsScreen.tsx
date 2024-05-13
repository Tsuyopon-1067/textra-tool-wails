import { Button, FormControl, FormLabel, Grid, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ReadApiKey, WriteApiKey } from "../../wailsjs/go/main/App";
import { textraapi } from "../../wailsjs/go/models";

export const ApiSettingsScreen = () => {
  const [apiKey, setApiKey] = useState("");
  const [apiSecret, setApiSecret] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    ReadApiKey().then((data) => {
      setApiKey(data.clientKey);
      setApiSecret(data.clientSecret);
      setUserName(data.name);
    });
  }, []);

  const sendApiData = () => {
    const data: textraapi.ApiKey = {
      clientKey: apiKey,
      clientSecret: apiSecret,
      name: userName,
    };
    WriteApiKey(data);
  };
  return (
    <Grid margin={"10vh auto"} width={"50%"} rowGap={"10px"}>
      <FormControl>
        <FormLabel>API key</FormLabel>
        <Input onChange={(e) => setApiKey(e.target.value)} value={apiKey} />
      </FormControl>
      <FormControl>
        <FormLabel>API secret</FormLabel>
        <Input
          onChange={(e) => setApiSecret(e.target.value)}
          value={apiSecret}
        />
      </FormControl>
      <FormControl>
        <FormLabel>User name</FormLabel>
        <Input onChange={(e) => setUserName(e.target.value)} value={userName} />
      </FormControl>
      <Button onClick={sendApiData}>Save</Button>
    </Grid>
  );
};
