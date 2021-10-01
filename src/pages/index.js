import * as React from "react"
import { Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Quiz from 'react-quiz-component';
const quizquestions = require("/quizfragen.json");

const parseQuiz = (questions) => {
  Object.values(questions)[2].forEach(element => {
    element.messageForCorrectAnswer = "👍 " + element.explanation;
    element.messageForIncorrectAnswer = "👎 " + element.explanation; 
  });

  return questions;
}

// markup
const IndexPage = () => {
  return (
    <div className="outerwrap">
      <Container className="wrap p-0">
        <header>
          <title>Тест - проверка на пригодность к практике LOGO</title>
          <img className="img-fluid" alt="logo" src="banner.jpg" />
        </header>

        <main >
          <Row className="justify-content-md-center m-3">
            <Quiz quiz={parseQuiz(quizquestions)} showInstantFeedback={true} continueTillCorrect={false} />
          </Row>
        </main>

        <footer>
          <Row className="justify-content-md-center py-4 footer">
            <span>Copyright © 2021 LOGO e.V.</span>
            <a href="https://logoev.de/ru/impressum-datenschutz">Выходные данные Защита данных</a>
          </Row>
        </footer>
      </Container>
    </div>

  )
}

export default IndexPage
