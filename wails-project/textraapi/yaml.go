package textraapi

import (
	"fmt"
	"io"
	"os"

	"github.com/go-yaml/yaml"
)

func ReadApiKey() (ApiKey, error) {
	fileName := "settings.yml"
	res := ApiKey{}
	err := readYAML(fileName, &res)
	if err != nil {
		fmt.Println(err)
		return res, err
	}
	return res, nil
}

func WriteApiKey(apiKey ApiKey) error {
	fileName := "settings.yml"
	err := writeYAML(fileName, apiKey)
	if err != nil {
		return err
	}
	return nil
}

func readYAML(fileName string, yf interface{}) error {
	file, err := os.Open(fileName)
	if err != nil {
		return err
	}
	defer file.Close()
	byteData, err := io.ReadAll(file)
	if err != nil {
		return err
	}
	err = yaml.Unmarshal(byteData, yf)
	if err != nil {
		return err
	}
	return nil
}

func writeYAML(fileName string, yf interface{}) error {
	file, err := os.Create(fileName)
	if err != nil {
		return err
	}
	defer file.Close()
	encoder := yaml.NewEncoder(file)
	defer encoder.Close()
	err = encoder.Encode(yf)
	if err != nil {
		return err
	}
	return nil
}
