// Algorithm:
// Create a Math Question.
// Math question will have a random generated.
// Question Type Multiplication, Division, Addition, Subtraction questions with random number range from 1 to 10.
// For Subtract, first number should be greater than second number.
// Answer will be the calculation of the random numbers generated.
// User will have to answer question.
// On submit, answer will be compared with correct calculated answer.
// If answer is correct, score will be incremented.
// If answer is wrong, score will be decremented.
// Give Feedback to user using toast.

const questionEl = document.getElementById("question");
const questionformEl = document.getElementById("questionform");
const scoreEl = document.getElementById("score");

let storedAnswer;
let score = 0;

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min +1) + min);
};

const generateQuestion = () => {
    const randomNumber1 = randomNumber(1, 10);
    const randomNumber2 = randomNumber(1, 10);
    const questionType = randomNumber(1,4);

    let firstNumber;
    let secondNumber;

    if(randomNumber1<randomNumber2){
        firstNumber=randomNumber2;
        secondNumber=randomNumber1;
    }else{
        firstNumber=randomNumber1;
        secondNumber=randomNumber2;
    }


    let question;
    let answer;
    //const question = `Q. What is ${randomNumber1} multiply by ${randomNumber2} ?`;
    //const answer = randomNumber1 * randomNumber2;

    switch(questionType){

        case 1:
            question = `Q. What is ${randomNumber1} multiply by ${randomNumber2} ?`;
            answer = randomNumber1 * randomNumber2;
            break;

        case 2:
            question = `Q. What is ${randomNumber1} added to ${randomNumber2} ?`;
            answer = randomNumber1 + randomNumber2;
            break;

        case 3:
            question = `Q. What is ${firstNumber} divided by ${secondNumber} ?`;
            answer = firstNumber/ secondNumber;
            break;

        case 4:
            question = `Q. What is ${secondNumber} subtracted from ${firstNumber} ?`;
            answer = firstNumber- secondNumber;
            break;

        default:
            question = `Q. What is ${randomNumber1} multiply by ${randomNumber2} ?`;
            answer = firstNumber * secondNumber;
            break;
    }

    return {question, answer};
};

const showQuestion = () =>{
    const {question, answer} = generateQuestion();

    questionEl.innerText = question;
    storedAnswer = answer;

};
showQuestion();

const checkAnswer = (event) =>{
    event.preventDefault();

    const formData = new FormData(questionformEl);

    const userAnswer = +formData.get("answer");

    if(userAnswer === storedAnswer){
        score +=1;
        Toastify({
            text: `You are Right! and your score is ${score}.`,
            gravity: "bottom",
            position: "center",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
    }else{
        score -=1;
        Toastify({
            text: `You are Wrong! and your score is ${score}.`,
            gravity: "bottom",
            position: "center",
            style: {
              background: "linear-gradient(to right, #e33217, #ff001e)",
            }
          }).showToast();
    }
    scoreEl.innerText = score;
    event.target.reset();

    showQuestion();
};