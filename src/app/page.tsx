"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "../styles/globals.css";

// Import the statically generated shield list
import shieldsData from "../../public/shields.json";

const Home = () => {
  const [files, setFiles] = useState<string[]>([]);
  const [currentShield, setCurrentShield] = useState<string>("");
  const [options, setOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    setFiles(shieldsData);
    loadNewQuestion(shieldsData);
  }, []);

  const loadNewQuestion = (filesList: string[]) => {
    const correctAnswer =
      filesList[Math.floor(Math.random() * filesList.length)];
    const choices = new Set<string>([correctAnswer]);

    while (choices.size < 4) {
      choices.add(filesList[Math.floor(Math.random() * filesList.length)]);
    }

    const shuffledOptions = Array.from(choices).sort(() => Math.random() - 0.5);
    setCurrentShield(correctAnswer);
    setOptions(shuffledOptions);
    setSelectedAnswer("");
    setIsAnswered(false);
    setMessage("");
  };

  const checkAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);
    if (answer === currentShield) {
      setMessage("✅ Rikitg!");
    } else {
      setMessage(
        `❌ Feil, herran var ${currentShield
          .replace("_komm.svg", "")
          .replace(/_/g, " ")}`
      );
    }
  };

  let basePath = ""

  if (typeof window !== "undefined") {
    const pathname = window.location.pathname;
    basePath = pathname.split('/')[1];

    if (basePath !== ""){
      basePath = "/" + basePath;
    }

  }

  return (
    <div className="container">
      <h1>Hvilken kommune er detta a?</h1>
      {currentShield && (
        <div className="shieldContainer">
          <Image
            src={`${basePath}/kommunevapen/${currentShield}`}
            alt="Municipality Shield"
            width={300}
            height={300}
          />
        </div>
      )}
      <div className="optionsContainer">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => !isAnswered && checkAnswer(option)}
            className={
              isAnswered
                ? option === currentShield
                  ? "correct"
                  : option === selectedAnswer
                  ? "wrong"
                  : ""
                : ""
            }
          >
            {option.replace("_komm.svg", "").replace(/_/g, " ")}
          </button>
        ))}
      </div>
      {message && <p>{message}</p>}
      {isAnswered && (
        <button className="nextButton" onClick={() => loadNewQuestion(files)}>
          Neste
        </button>
      )}
    </div>
  );
};

export default Home;
