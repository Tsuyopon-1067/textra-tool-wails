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
	englishList, japaneseList := GetEnglishJapaneseSplit(text)
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

func GenerateHtml(text string) string {
	englishList, japaneseList := GetEnglishJapaneseSplit(text)
	res := ""
	for i := 0; i < len(englishList); i++ {
		res += "<div class=\"bun\">\n"
		res += "<div>\n"
		res += "<p>\n"
		res += englishList[i]
		res += "</p>\n"
		res += "<p>\n"
		res += japaneseList[i]
		res += "</p>\n"
		res += "</div>\n"
		res += "<div>\n"
		res += "<p>\n"
		res += "</p>\n"
		res += "</div>\n"
		res += "</div>\n"
		res += "\n"
	}
	return res
}
