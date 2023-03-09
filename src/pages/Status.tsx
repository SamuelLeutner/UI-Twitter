import { PaperPlaneTilt } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Status.css";

export function Status() {
  const [newAnswer, setNewAnswers] = useState("");
  const [answers, setAnswers] = useState([
    "Concordo...",
    "Faz sentido",
    "Parabéns!",
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswers("");
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      // submit
      setAnswers([newAnswer, ...answers]);
      setNewAnswers("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident rem
      obcaecati voluptatibus debitis exercitationem repellendus non in sapiente
      asperiores culpa hic tenetur, adipisci maiores et aspernatur dolorem
      praesentium voluptates ex?"
      />
      <Separator />
      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/SamuelLeutner.png"
            alt="Samuel Leutner"
          />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswers(event.target.value);
            }}
          />
        </label>

        <button type="submit">
          <PaperPlaneTilt />
          <span>Answer</span>
        </button>
      </form>
      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
