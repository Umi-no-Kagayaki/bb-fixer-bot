import { useState } from "react";
import './App.css';
import Log from "./components/Log";
import Input from "./components/input";
import InputButton from "./components/inputButton";

function App() {
  const [page, setPage] = useState("home");
  const [inputed, setInputed] = useState("ここに口汚く入力");

  return (
    <div
      className = "bot"
    >
      <header
          className = "bot-header"
      >
          言葉は綺麗に使いましょう！
      </header>


      <body
        className = "bot-body"
      >
        {
          page === "home" ?
            <Log
              comment = {inputed}
            /> :
            <Input
              value = {inputed}
              
              onChange = {setInputed}
            />
        }
      </body>

      <footer
          className = "bot-footer"
      >
        {
          page === "home" ?
            <InputButton onClick = {setPage} page = {""} value = "入力" /> :
            <InputButton onClick = {setPage} page = {"home"} value = "完了" />
        }
      </footer>
    </div>
  );
};

export default App;
