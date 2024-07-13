const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Who wrote 'Harry Potter'?",
        options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Stephen King"],
        answer: "J.K. Rowling"
    }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz() {
    const output = [];

    quizData.forEach((currentQuestion, questionNumber) => {
        const options = [];
        for (const option of currentQuestion.options) {
            options.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${option}">
                    ${option}
                </label>`
            );
        }

        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="options">${options.join('')}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.options');
    let score = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.answer) {
            score++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
