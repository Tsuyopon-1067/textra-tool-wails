package textraapi

type APIResponse struct {
	ResultSet ResultSet `json:"resultset"`
}

type ResultSet struct {
	Code    int          `json:"code"`
	Message string       `json:"message"`
	Result  ResultDetail `json:"result"`
}

type ResultDetail struct {
	Text        string      `json:"text"`
	Blank       int         `json:"blank"`
	Information Information `json:"information"`
}

type Information struct {
	TextS     string     `json:"text-s"`
	TextT     string     `json:"text-t"`
	Sentences []Sentence `json:"sentence"`
}

type Sentence struct {
	TextS  string  `json:"text-s"`
	TextT  string  `json:"text-t"`
	Splits []Split `json:"split"`
}

type Split struct {
	TextS   string  `json:"text-s"`
	TextT   string  `json:"text-t"`
	Process Process `json:"process"`
}

type Process struct {
	Regex         []interface{} `json:"regex"`
	ReplaceBefore []interface{} `json:"replace-before"`
	ShortBefore   []interface{} `json:"short-before"`
	Preprocess    []interface{} `json:"preprocess"`
	Translate     TranslateType `json:"translate"`
	ShortAfter    []interface{} `json:"short-after"`
	ReplaceAfter  []interface{} `json:"replace-after"`
	RegexAfter    []interface{} `json:"regex-after"`
}

type TranslateType struct {
	Reverse       []interface{} `json:"reverse"`
	Specification []interface{} `json:"specification"`
	TextS         string        `json:"text-s"`
	SrcToken      []string      `json:"src-token"`
	TextT         string        `json:"text-t"`
	Oov           interface{}   `json:"oov"`
	Exception     string        `json:"exception"`
}
