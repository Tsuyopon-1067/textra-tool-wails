package golangtsuyopon

import (
	"bytes"
	"context"
	"encoding/json"
	"io"
	"log"
	"net/http"
	"net/url"
	"os"

	"github.com/joho/godotenv"
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

func FetchTranslation(text string) []string {
	envs := loadEnv()

	ctx := context.Background()
	conf := &clientcredentials.Config{
		ClientID:     envs.ClientKey,
		ClientSecret: envs.ClientSecret,
		TokenURL:     envs.BaseURL + "/oauth2/token.php",
	}

	client := conf.Client(ctx)
	token, _ := conf.Token(ctx)
	strToken := token.AccessToken
	splitText := ParseSentence(text)
	return helperFetchTranslation(client, strToken, envs, splitText)
}

func helperFetchTranslation(client *http.Client, token string, envs Envs, text string) []string {

	form := url.Values{
		"access_token": {token},
		"key":          {envs.ClientKey},
		"api_name":     {envs.ApiName},
		"api_param":    {envs.ApiParam},
		"name":         {envs.Name},
		"type":         {"json"},
		"text":         {text},
	}

	resp, err := client.Post(envs.BaseURL+"/api/", "application/x-www-form-urlencoded", bytes.NewBufferString(form.Encode()))
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

func loadEnv() Envs {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	envs := Envs{
		BaseURL:      os.Getenv("BASE_URL"),
		ApiName:      os.Getenv("API_NAME"),
		ApiParam:     os.Getenv("API_PARAM"),
		ClientKey:    os.Getenv("CLIENT_KEY"),
		ClientSecret: os.Getenv("CLIENT_SECRET"),
		Name:         os.Getenv("NAME"),
	}

	return envs
}
