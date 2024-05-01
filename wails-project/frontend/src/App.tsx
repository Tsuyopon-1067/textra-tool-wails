import { useState } from "react";
import logo from "./assets/images/logo-universal.png";
import "./App.css";
import { FetchTranslation, Greet } from "../wailsjs/go/main/App";

function App() {
    const [resultText, setResultText] = useState(
        "Please enter your name below 👇"
    );
    const [transText, setTransText] = useState("");
    const [name, setName] = useState("");
    const updateName = (e: any) => setName(e.target.value);
    const updateTranslateText = (result: string[]) => {
        let newText = "";
        result.forEach((element) => {
            newText += element + "\n";
        });
        setTransText(newText);
    };

    function greet() {
        //Greet(name).then(updateResultText);
    }
    function translate() {
        const text = name;
        FetchTranslation(text).then(updateTranslateText);
    }

    return (
        <div id="App">
            <img src={logo} id="logo" alt="logo" />
            <div id="result" className="result">
                {resultText}
            </div>
            <div id="input" className="input-box">
                <input
                    id="name"
                    className="input"
                    onChange={updateName}
                    autoComplete="off"
                    name="input"
                    type="text"
                />
                <button className="btn" onClick={greet}>
                    Greet
                </button>
                <button className="btn" onClick={() => translate()}>
                    Test
                </button>
            </div>
            <p>{transText}</p>
        </div>
    );
}

export default App;
