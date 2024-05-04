package textraapi

import (
	"strings"
)

func Arrange(text string) string {
	parts := strings.Split(text, "\n")
	length := len(parts) / 2
	res := ""
	for i := 0; i < length; i++ {
		res += parts[i]
		res += "\n"
		res += parts[i+length]
		res += "\n"
		res += "\n"
	}
	return res[0 : len(res)-1]
}