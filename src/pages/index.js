import * as React from "react"
import { Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Quiz from 'react-quiz-component';
const quizquestions = require("/quizfragen.json");

const renderCustomResultPage = (obj) => {
  console.log(obj);
  return (
    <div>
      This is a custom result page. You can use obj to render your custom result page
    </div>
  )
}

// markup
const IndexPage = () => {
  return (
    <Container className="wrap p-0">
      <header>
        <title>Eignungstest für ein LOGO-Praktikum</title>
        <img className="img-fluid" alt="logo" src="banner.jpg" />
      </header>

      <main >
        <Row className="justify-content-md-center m-3">
          <Quiz showDefaultResult={false} customResultPage={renderCustomResultPage} quiz={quizquestions} showInstantFeedback={true} continueTillCorrect={false} />
        </Row>
      </main>

      <footer>
        <Row className="justify-content-md-center py-4 footer">
          <span>Copyright © 2021 LOGO e.V.</span>       
          <a href="https://logoev.de/de/impressum-datenschutz">Impressum & Datenschutz</a>
        </Row>
      </footer>
    </Container>
  )
}

export default IndexPage
