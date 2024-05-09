package main

import (
	textraapi "changeme/textraapi"
	"context"
	"fmt"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) Translate(text string) string {
	return textraapi.Translate(text)
}

func (a *App) Format(text string) string {
	return textraapi.Format(text)
}

func (a *App) TranslateFormat(text string) string {
	return textraapi.TranslateFormat(text)
}

func (a *App) EnglishJapaneseFormat(text string) string {
	return textraapi.EnglishJapaneseFormat(text)
}

func (a *App) GenerateHtml(text string) string {
	return textraapi.GenerateHtml(text)
}

func (a *App) ReadApiKey() textraapi.ApiKey {
	res, _ := textraapi.ReadApiKey()
	return res
}

func (a *App) WriteApiKey(data textraapi.ApiKey) {
	textraapi.WriteApiKey(data)
}
