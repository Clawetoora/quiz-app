"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import Result from "./results";
import Timer from "./timer";
import Image from "next/image";
import { Barlow_Semi_Condensed } from "next/font/google";
import vcsLogo from "../../public/vcs.png";
const barlowSemi = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const questions = [
    { id: 1, question: "Jūsų vardas" },
    { id: 2, question: "Lietuvos ilgiausia upė?", answer: "Nemunas" },
    { id: 3, question: "Jūsų pavardė" },
    { id: 4, question: "Lietuvos vienintelis karalius?", answer: "Mindaugas" },
    {
      id: 5,
      question: "Kokia tai programavimo kalba? J*V*SC*I*T",
      answer: "javascript",
    },
    { id: 6, question: "Jusu el. pastas", answer: "" },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answer, setAnswer] = useState("");
  const [answersArray, setAnswersArray] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("answersData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      parsedData.sort((a, b) => b.score - a.score);
      setData(parsedData);
    }
  }, [answersArray]);

  useEffect(() => {
    answer.length < 3 ? setDisabled(true) : setDisabled(false);
  }, [answer]);
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter" && answer.length > 2) {
        event.preventDefault();

        handleClick();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  function getScore(arr) {
    let score = 0;
    for (let i = 0; i < arr.length; i++) {
      const userAnswer = arr[i];
      if (typeof userAnswer === "string") {
        if (arr[i].toLowerCase() === questions[i].answer?.toLowerCase()) {
          score++;
        }
      }
    }
    if (arr[0].length > 1) {
      score++;
    }
    if (arr[2].length > 1) {
      score++;
    }
    if (arr[5].length > 1) {
      score++;
    }
    return score;
  }
  const pull_time = (time) => {
    setTime(time);
  };
  const handleClick = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswersArray([...answersArray, answer]);
      setAnswer("");
    } else {
      // console.log(time);
      const updatedAnswersArray = [...answersArray, answer, time];
      setAnswersArray(updatedAnswersArray);
      setScore(getScore(updatedAnswersArray));
      // console.log(answersArray);
      setShowResult(true);
      setStarted(false);
      setAnswer("");
    }
  };

  const handleClickStart = () => {
    setTime(0);
    setStarted(true);
  };
  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleClickFinishGame = () => {
    console.log(answersArray);
    const existingData = JSON.parse(localStorage.getItem("answersData")) || [];

    // Add the current answersArray to the existing data
    const newData = [
      ...existingData,
      {
        name: answersArray[0],
        score:
          score <= 3
            ? Math.trunc((score / answersArray[6]) * 10000)
            : Math.trunc((score / answersArray[6]) * 100000),
      },
    ];

    // Save the updated data to local storage
    localStorage.setItem("answersData", JSON.stringify(newData));
    setStarted(false);
    setShowResult(false);
    setCurrentQuestion(1);
    setAnswersArray([]);
  };
  useEffect(() => {
    let interval;
    if (started) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      setTime(0);
    } else if (!started) {
      clearInterval(interval);
    }
    setTime(time);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <main style={barlowSemi.style} className={styles.main}>
      <nav className={styles.nav}>
        <Image className={styles.img} src={vcsLogo} alt="Vcs logo" />
      </nav>
      <div className={started ? styles.timer : styles.hiddenTimer}>
        <div className="stopwatch">
          <div className="numbers">
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        {!started && showResult === false && (
          <>
            <div>
              <h1 className={styles.resultsh1}>TOP 5 rezultatai</h1>
              <div className={styles.scoreBox}>
                <p className={styles.player}>Vardas</p>
                <p className={styles.scoras}>Taškai</p>
              </div>
              {data.map((data, index) => {
                if (index < 5) {
                  return (
                    <>
                      <div className={styles.scoreBox} key={index}>
                        <p className={styles.playername}>{data.name}</p>
                        <p className={styles.score}>{data.score} </p>
                      </div>
                    </>
                  );
                }
              })}
            </div>
            <button onClick={handleClickStart} className={styles.btn}>
              PRADĖTI ŽAIDIMĄ
            </button>
          </>
        )}
        {started && showResult === false && (
          <>
            <p className={styles.questionNumber}>
              Klausimas Nr.{currentQuestion}
            </p>
            <h1 className={styles.question}>
              {questions[currentQuestion - 1]?.question}
            </h1>
            <input
              style={barlowSemi.style}
              className={styles.input}
              type="text"
              name="answer"
              value={answer}
              onChange={handleChange}
              minLength={3}
              required
            ></input>
            <button
              style={barlowSemi.style}
              className={disabled ? styles.btndisabled : styles.btn}
              onClick={handleClick}
              disabled={disabled}
            >
              Kitas klausimas
            </button>
          </>
        )}
        {!started && showResult && (
          <>
            <Result
              email={answersArray[5]}
              name={answersArray[0]}
              lastname={answersArray[2]}
              time={time}
              result={score}
            ></Result>
            <button onClick={handleClickFinishGame} className={styles.btn}>
              Baigti žaidimą
            </button>
          </>
        )}
      </div>
    </main>
  );
}
