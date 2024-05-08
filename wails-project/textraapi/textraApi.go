package textraapi

func Translate(text string) string {
	formatEnglish, _ := FormatEnglish(text)
	list := FetchTranslation(formatEnglish)
	res := ""
	for _, s := range list {
		res += s
		res += "\n"
	}
	return res
}

func Format(text string) string {
	res, _ := FormatEnglish(text)
	return res
}

func TranslateFormat(text string) string {
	format, splits := FormatEnglish(text)
	japaneseList := FetchTranslation(format)
	englishList := splits
	res := ""
	for i := 0; i < len(englishList); i++ {
		res += englishList[i]
		res += "\n"
		res += japaneseList[i]
		res += "\n\n"
	}
	return res
}

func EnglishJapaneseFormat(text string) string {
	return FormatEnglishJapanese(text)
}
