"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import Result from "./results";
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
    {
      id: 3,
      question:
        "Programavimo kalba kurios pavadinimas toks pat kaip gyvačių rūšies?",
      answer: "Python",
    },
    { id: 4, question: "Lietuvos vienintelis karalius?", answer: "Mindaugas" },
    {
      id: 5,
      question: "Kokia tai programavimo kalba? J*V*SC*I*T",
      answer: "javascript",
    },
    {
      id: 6,
      question:
        "„Dirbtinis intelektas“ anglų kalboje trumpinamas... (dvi raidės)",
      answer: "AI",
    },
    {
      id: 7,
      question: "Žinomiausia paieškos sistema?",
      answer: "google",
    },
    {
      id: 8,
      question:
        "Kokio žodžio trūksta šio kompiuterinio viruso pavadinime: ...... arklys",
      answer: "trojos",
    },
    {
      id: 9,
      question: "Kilobaitas, ........, gigabaitas. Ko trūksta?",
      answer: "megabaitas",
    },
    { id: 10, question: "Kokia raidė čia praleista? QW*RTY", answer: "e" },
    {
      id: 11,
      question: "Operacinė sistema Microsoft .......",
      answer: "windows",
    },
    { id: 12, question: "Jūsų el. paštas", answer: "" },
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
  const [validEmail, setValidEmail] = useState(true);
  // const [color, setColor] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("answersData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      parsedData.sort((a, b) => b.score - a.score);
      setData(parsedData);
    }
  }, [answersArray]);

  useEffect(() => {
    answer.length < 1 ? setDisabled(true) : setDisabled(false);
  }, [answer]);
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter" && answer.length >= 1) {
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
    if (arr[11].length > 1) {
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
      if (
        currentQuestion === 12 &&
        answer.includes("@") &&
        answer.includes(".")
      ) {
        const updatedAnswersArray = [...answersArray, answer, time];
        setAnswersArray(updatedAnswersArray);
        setScore(getScore(updatedAnswersArray));
        // console.log(answersArray);
        setShowResult(true);
        setStarted(false);
        setAnswer("");
        setValidEmail(true);
      } else {
        // console.log("nera@@@@");
        setValidEmail(false);
      }
      // console.log(time);
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
            ? Math.trunc(
                (score / answersArray[answersArray.length - 1]) * 10000
              )
            : Math.trunc(
                (score / answersArray[answersArray.length - 1]) * 200000
              ),
        email: answersArray[answersArray.length - 2],
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
    // if (time > 0 && time % 2000 === 0) {
    //   setColor("#ff0000");
    //   setTimeout(() => {
    //     setColor("");
    //   }, 1000);
    // }

    return () => clearInterval(interval);
  }, [started, time]);

  return (
    <main style={barlowSemi.style} className={styles.main}>
      <nav className={styles.nav}>
        <Image className={styles.img} src={vcsLogo} alt="Vcs logo" />
      </nav>
      <div
        // style={{ backgroundColor: color }}
        className={started ? styles.timer : styles.hiddenTimer}
      >
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
            <div className={styles.top5}>
              <h1 className={styles.resultsh1}>TOP 5 rezultatai</h1>
              <div className={styles.scoreBox}>
                <p className={styles.player}>Vardas</p>
                <p className={styles.scoras}>Taškai</p>
              </div>
              {data.map((data, index) => {
                if (index <= 2) {
                  return (
                    <div key={index}>
                      <div className={styles.scoreBox}>
                        <div className={styles.playername}>
                          <div className={styles[`place${index + 1}`]}>
                            {index + 1}
                          </div>
                          <p>{data.name}</p>
                        </div>
                        <p className={styles.score}>{data.score} </p>
                      </div>
                    </div>
                  );
                } else if (index > 2 && index < 5) {
                  return (
                    <div key={index}>
                      <div className={styles.scoreBox}>
                        <p className={styles.playername}>{data.name}</p>
                        <p className={styles.score}>{data.score} </p>
                      </div>
                    </div>
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
              minLength={1}
              required
            ></input>
            {!validEmail && (
              <p className={styles.emailWarning}>
                Neteisingas el. pašto adresas
              </p>
            )}
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
              email={answersArray[11]}
              name={answersArray[0]}
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
