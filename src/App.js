import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);
  const [rounds, setrounds] = useState(0);
  const [won, setWon] = useState("Tournament Results");

  useEffect(() => {
    if (p1Score === 3) {
      setWon("Player 1 Won Tournament!");
      setrounds(0);
      setP1Score(0);
      setP2Score(0);
    }
    if (p2Score === 3) {
      setWon("Player 2 Won Tournament!");
      setrounds(0);
      setP1Score(0);
      setP2Score(0);
    }
    if (rounds === 5) {
      if (p1Score > p2Score) {
        setWon("Player 1 Won Tournament!");
        setP1Score(0);
        setP2Score(0);
      }
      if (p2Score > p1Score) {
        setWon("Player 2 Won Tournament!");
        setP1Score(0);
        setP2Score(0);
      }
      if (p2Score === p1Score) {
        setWon("Match Draw");
        setP1Score(0);
        setP2Score(0);
      }
    }
  }, [rounds, p1Score, p2Score]);

  const startGame = () => {
    let p1Health = 100;
    let p2Health = 100;
    let p1Fire = Math.floor(Math.random() * 6);
    let p2Fire = Math.floor(Math.random() * 6);

    while (p1Health >= 0 && p2Health >= 0) {
      p1Health = p1Health - p2Fire;
      p2Health = p2Health - p1Fire;
    }
    if (rounds >= 5) {
      setrounds(0);
    } else {
      setrounds(rounds + 1);
    }
    if (p1Health === p2Health) {
      console.log("Match Draw");
    } else if (p1Health < p2Health) {
      setP2Score(p2Score + 1);
    } else {
      setP1Score(p1Score + 1);
    }
  };

  const resetGame = () => {
    setWon("Tournament Results");
    setrounds(0);
    setP1Score(0);
    setP2Score(0);
  };

  return (
    <div className="App">
      <img src="/bg.png" alt="bg" />
      <div className="main-container">
        <div className="container">
          <div className="title">Shooting Game</div>
          <div className="rounds">Match Rounds - {rounds}</div>
          <div className="game">
            <div className="player p1">
              <div className="ptitle">Player 1 Points</div>
              <div className="points">{p1Score}</div>
            </div>
            <div className="player p2">
              <div className="ptitle">Player 2 Points</div>
              <div className="points">{p2Score}</div>
            </div>
          </div>
          <div className="result">{won}</div>
        </div>
        <div className="btns">
          <button
            className="reset"
            onClick={() => {
              resetGame();
            }}
          >
            Reset
          </button>
          <button
            className="start"
            onClick={() => {
              startGame();
            }}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
