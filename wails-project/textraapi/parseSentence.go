package textraapi

func ParseSentence(text string) string {
	splits := splitSentence(text)
	res := ""
	for _, s := range splits {
		res += s
		res += "\n"
	}
	return res[0 : len(res)-1]
}

func splitSentence(sentence string) []string {
	res := []string{}
	chars := []rune{}
	for i := 0; i < len(sentence); i++ {
		c := rune(sentence[i])
		chars = append(chars, c)
		if c != '.' && c != '?' && c != '!' {
			continue
		}
		endIdx := getStartIdxOfSentence(sentence, i+1)
		if endIdx != -1 && i < endIdx-1 {
			i = endIdx - 1
			res = append(res, string(chars))
			chars = []rune{}
			continue
		}
	}
	if len(chars) > 0 {
		res = append(res, string(chars))
	}
	return res
}

func getStartIdxOfSentence(str string, start int) int {
	for i := start; i < len(str); i++ {
		if str[i] == ' ' {
			continue
		}
		if isCapitalLetter(str[i]) {
			return i
		} else {
			return -1
		}
	}
	return -1
}

func isCapitalLetter(c byte) bool {
	return 'A' <= c && c <= 'Z'
}
