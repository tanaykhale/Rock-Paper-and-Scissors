import { useState } from "react";
import Layout from "./Components/Layout";

export default function App() {
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [msg, setMsg] = useState("Make Your Choice");
  const [msgClass, setMsgClass] = useState("");

  const showResult = (
    userWin: boolean,
    compChoice: string,
    userChoice: string
  ) => {
    if (userWin) {
      setMsgClass("win");
      setMsg(
        `You win! Your choice: ${userChoice}, computer chose: ${compChoice}`
      );
      setUserScore((prevScore) => prevScore + 1);
    } else {
      setMsgClass("lose");
      setMsg(
        `You lose! Your choice: ${userChoice}, computer chose: ${compChoice}`
      );
      setCompScore((prevScore) => prevScore + 1);
    }
  };

  const getWinner = (compChoice: string, userChoice: string) => {
    if (compChoice === userChoice) {
      setMsgClass("draw");
      setMsg(`It's a draw! You both chose ${userChoice}`);
    } else {
      let userWin =
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper");
      showResult(userWin, compChoice, userChoice);
    }
  };

  const genCompChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return choices[idx];
  };

  const handleClick = (userChoice: string) => {
    const compChoice = genCompChoice();
    getWinner(compChoice, userChoice);
  };

  return (
    <Layout
      userScore={userScore}
      compScore={compScore}
      msg={msg}
      msgClass={msgClass}
      onUserChoice={handleClick}
    />
  );
}
