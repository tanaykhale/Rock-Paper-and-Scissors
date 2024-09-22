import "./Layout.css";
import Rock from "../assets/rock.png";
import Paper from "../assets/paper.png";
import Scissors from "../assets/scissors.png";

interface Props {
  userScore: number;
  compScore: number;
  msg: string;
  msgClass: string;
  onUserChoice: (choice: string) => void;
}

export default function Layout({
  userScore,
  compScore,
  msg,
  msgClass,
  onUserChoice,
}: Props) {
  return (
    <>
      <div className="navbar">
        <p>Rock Paper Scissors</p>
      </div>
      <div className="image-container">
        <div className="choice" id="rock" onClick={() => onUserChoice("rock")}>
          <img src={Rock} alt="Rock" />
        </div>
        <div
          className="choice"
          id="paper"
          onClick={() => onUserChoice("paper")}
        >
          <img src={Paper} alt="Paper" />
        </div>
        <div
          className="choice"
          id="scissors"
          onClick={() => onUserChoice("scissors")}
        >
          <img src={Scissors} alt="Scissors" />
        </div>
      </div>

      <div className="score-board">
        <div className="score">
          <p id="user-score">{userScore}</p>
          <p>You</p>
        </div>
        <div className="score">
          <p id="comp-score">{compScore}</p>
          <p>Comp</p>
        </div>
      </div>
      <div className="msg-box">
        <p className={`msg ${msgClass}`}>{msg}</p>
      </div>
    </>
  );
}
