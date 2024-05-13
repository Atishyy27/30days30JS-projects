const qsn = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "What is the capital city of France?",
        answers: [
            { text: "Madrid", correct: false },
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false },
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Vincent van Gogh", correct: false },
            { text: "Michelangelo", correct: false },
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Jupiter", correct: false },
            { text: "Mars", correct: true },
            { text: "Saturn", correct: false },
            { text: "Venus", correct: false },
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "J.K. Rowling", correct: false },
            { text: "Harper Lee", correct: true },
            { text: "Ernest Hemingway", correct: false },
            { text: "Mark Twain", correct: false },
        ]
    },
];

const QuestionElement = document.getElementById("question");
const answerButtons = document.getElementById("ans-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.innerHTML = "Next";
    score = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = qsn[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    QuestionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer)
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild)
        answerButtons.removeChild(answerButtons.firstChild);
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    QuestionElement.innerHTML = `Your Score: ${score} out of ${qsn.length}!`;
    nextButton.innerHTML = "Play again..";
    nextButton.style.display = "block";

}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < qsn.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < qsn.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
