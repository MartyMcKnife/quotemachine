import "./App.css";
import QuoteBox from "./components/QuoteBox";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quote, setQuote] = useState({ text: "", author: "" });
  const urlQuotes = "https://type.fit/api/quotes";

  const handleClick = (e) => {
    e.preventDefault();
    setQuote(items[Math.floor(Math.random() * 1642)]);
  };

  useEffect(() => {
    fetch(urlQuotes)
      .then((res) => res.json())
      .then(
        (quotes) => {
          setIsLoaded(true);
          setItems(quotes);
          setQuote(quotes[Math.floor(Math.random() * 1642)]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      .then();
  }, []);

  return (
    <div className="App">
      {error && (
        <div>
          <h1>An Error has occured!: {error.message}</h1>
        </div>
      )}
      <div id="quote-box">
        {console.log(quote)}
        <QuoteBox
          loading={isLoaded}
          text={quote.text}
          author={quote.author}
          id="center-box"
        />
        <Container id="other">
          <Row>
            <Col md={4}></Col>
            <Col md={7}>
              <Button id="new-quote" variant="dark" onClick={handleClick}>
                New Quote
              </Button>
            </Col>
            <Col>
              <a
                href="https://twitter.com/intent/tweet"
                id="tweet-quote"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter fa-2x" aria-hidden="true"></i>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
