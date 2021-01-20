import { useState } from "react";
import './App.css';
import Home from "./components/comment";
import InputButton from "./components/inputButton";

function App() {
  const [page, setPage] = useState("home");

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
            <Home /> :
            <div></div>
        }
      </body>

      <footer
          className = "bot-footer"
      >
        {
          page === "home" ?
            <InputButton setState = {setPage}/> :
            <div></div>
        }
      </footer>
    </div>
  );
};

export default App;
