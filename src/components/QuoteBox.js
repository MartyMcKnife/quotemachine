import React from "react";
import { CSSTransition } from "react-transition-group";

export default function QuoteBox(props) {
  return (
    <div id="quote-container">
      <i className="fas fa-quote-left"></i>
      <div className="quote">
        <CSSTransition in={props.isLoaded} timeout={200} classNames="textTrans">
          <h2 id="text">{props.isLoaded ? "Getting quote" : props.text}</h2>
        </CSSTransition>
        <h4 id="author">{props.author ? props.author : "Author Unknown"}</h4>
      </div>
    </div>
  );
}
