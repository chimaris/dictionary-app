import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import "./Results.css";
import Antonyms from "./Antonyms";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}

            <Synonyms synonyms={props.results.meanings[0].synonyms} />
            <Antonyms antonyms={props.results.meanings[0].antonyms} />

      </div>
    );
  } else {
    return null;
  }
}