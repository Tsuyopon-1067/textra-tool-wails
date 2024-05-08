package textraapi

import (
	"bytes"
	"context"
	"encoding/json"
	"io"
	"log"
	"net/http"
	"net/url"

	"golang.org/x/oauth2/clientcredentials"
)

type Envs struct {
	BaseURL      string
	ApiName      string
	ApiParam     string
	ClientKey    string
	ClientSecret string
	Name         string
}

func FetchTranslation(textLines string) []string {
	apiKey, err := ReadApiKey()
	if err != nil {
		log.Fatalf("Error reading API key: %v", err)
		return nil
	}

	ctx := context.Background()
	conf := &clientcredentials.Config{
		ClientID:     apiKey.ClientKey,
		ClientSecret: apiKey.ClientSecret,
		TokenURL:     "https://mt-auto-minhon-mlt.ucri.jgn-x.jp/oauth2/token.php",
	}

	client := conf.Client(ctx)
	token, _ := conf.Token(ctx)
	strToken := token.AccessToken
	return helperFetchTranslation(client, strToken, apiKey, textLines)
}

func helperFetchTranslation(client *http.Client, token string, apiKey ApiKey, text string) []string {

	form := url.Values{
		"access_token": {token},
		"key":          {apiKey.ClientKey},
		"api_name":     {"mt"},
		"api_param":    {"generalNT_en_ja"},
		"name":         {apiKey.Name},
		"type":         {"json"},
		"text":         {text},
	}

	resp, err := client.Post("https://mt-auto-minhon-mlt.ucri.jgn-x.jp/api/", "application/x-www-form-urlencoded", bytes.NewBufferString(form.Encode()))
	if err != nil {
		log.Fatalf("Error making request: %v", err)
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatalf("Error reading response body: %v", err)
	}
	var apiResponse APIResponse
	if err := json.Unmarshal(body, &apiResponse); err != nil {
		log.Fatalf("Error decoding response JSON: %v", err)
	}
	resSentence := apiResponse.ResultSet.Result.Information.Sentences
	res := []string{}
	for _, v := range resSentence {
		sentence := v.TextT
		res = append(res, sentence)
	}
	return res
}
