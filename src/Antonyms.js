import React from "react";
import "./Antonyms.css";

const Antonyms = (props) => {
  if (props.antonyms) {
    return (
        <section>
            <h3>Antonyms</h3>
            <ul className="Antonyms">
                {props.antonyms.map(function (antonym, index) {
                    return <li key={index}>{antonym}</li>;
                })}
            </ul>
        </section>
    );
  } else {
    return "Nothing";
  }
}

export default Antonyms;