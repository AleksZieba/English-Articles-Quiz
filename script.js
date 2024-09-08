function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
} 

const questions = [
    {
        question: "We went to ___ Louvre to see ___ famous art.", 
        answers: [
            { text: "(bez) ; (bez)", correct: false},
            { text: "the ; a", correct: false},
            { text: "the ; (bez)", correct: true},
            { text: "the ; the", correct: true},
        ]
    }, 
    {
        question: "___ Buckingham Palace is one of ___ London's biggest attractions.", 
        answers: [
            { text: "(bez) ; the", correct: false},
            { text: "An ; (bez)", correct: false},
            { text: "The ; (bez)", correct: false},
            { text: "(bez) ; (bez)", correct: true},
        ]
    }, 
    {
        question: "___ design of ___ new museum is very modern.", 
        answers: [
            { text: "A ; the", correct: false},
            { text: "A ; a", correct: false},
            { text: "The ; a", correct: false},
            { text: "The ; the", correct: true},
        ]
    }, 
    { 
        question: "She discovered ___ love for hiking in ___ Rocky Mountains.", 
        answers: [
            { text: "a ; the", correct: true},
            { text: "a ; a", correct: false},
            { text: "the ; a", correct: false},
            { text: "the ; the", correct: false},
        ]
    }, 
    {
        question: "___ Thames flows through ___ London.", 
        answers: [
            { text: "A ; (bez)", correct: false},
            { text: "A ; a", correct: false},
            { text: "The ; (bez)", correct: true},
            { text: "The ; the", correct: false},
        ]
    }, 
    {
        question: "Her research into ___ genetics has led to ___ breakthrough.", 
        answers: [
            { text: "(bez) ; (bez)", correct: false},
            { text: "(bez) ; a", correct: true},
            { text: "the ; (bez)", correct: false},
            { text: "(bez) ; the", correct: false},
        ]
    }, {
        question: "___ Great Wall of China is ___ historical structure.", 
        answers: [
            { text: "The ; a", correct: true},
            { text: "A ; a", correct: false},
            { text: "The ; (bez)", correct: false},
            { text: "(bez) ; a", correct: false},
        ]
    }, {
        question: "___ Eiffel Tower is in ___ Paris.", 
        answers: [
            { text: "A ; (bez)", correct: false},
            { text: "A ; a", correct: false},
            { text: "The ; (bez)", correct: true},
            { text: "The ; the", correct: false},
        ]
    }, {
        question: "Learning ___ second language improves ___ general cognitive function.", 
        answers: [
            { text: "a ; (bez)", correct: true},
            { text: "a ; a", correct: false},
            { text: "the ; (bez)", correct: false},
            { text: "the ; the", correct: false},
        ]
    }, {
        question: "She has ___ eye for ___ aesthetics.", 
        answers: [
            { text: "(bez) ; (bez)", correct: false},
            { text: "an ; (bez)", correct: true},
            { text: "the ; (bez)", correct: false},
            { text: "(bez) ; the", correct: false},
        ]
    }, {
        question: "___ ability to adapt to ___ changing technology is important.", 
        answers: [
            { text: "The ; (bez)", correct: true},
            { text: "An ; a", correct: false},
            { text: "An ; (bez)", correct: true},
            { text: "An ; the", correct: false},
        ]
    }, {
        question: "Learning ___ second language improves general ___ cognitive function.", 
        answers: [
            { text: "a ; the", correct: false},
            { text: "a ; a", correct: false},
            { text: "the ; (bez)", correct: false},
            { text: "a ; (bez)", correct: true},
        ]
    }, {
        question: "___ ability to adapt to changing ___ technology is important.", 
        answers: [
            { text: "An ; (bez)", correct: true},
            { text: "An ; a", correct: false},
            { text: "A ; (bez)", correct: true},
            { text: "An ; the", correct: false},
        ]
    }, {
        question: "They enjoy ___ taste of ___ authentic Italian cuisine .", 
        answers: [
            { text: "the ; (bez)", correct: true},
            { text: "a ; a", correct: false},
            { text: "a ; (bez)", correct: false},
            { text: "the ; the", correct: false},
        ]
    }, {
        question: "Our trip across ___ Sahara was ___ adventure of ___ lifetime.", 
        answers: [
            { text: "the ; (bez) ; a", correct: true},
            { text: "a ; the ; the", correct: false},
            { text: "the ; (bez) ; the", correct: false},
            { text: "the ; the ; a", correct: false},
        ]
    }, {
        question: "___ trip across ___ Sahara was ___ amazing adventure.", 
        answers: [
            { text: "a ; the ; an", correct: true},
            { text: "the ; (bez) ; an", correct: false},
            { text: "the ; the ; an", correct: true},
            { text: "the ; an ; (bez)", correct: false},
        ]
    }, {
        question: "___ innovation in ___ renewable energy sector is accelerating.", 
        answers: [
            { text: "An ; the", correct: true},
            { text: "An ; (bez)", correct: false},
            { text: "The ; (bez)", correct: false},
            { text: "(bez) ; the", correct: true},
        ]
    }, {
        question: "We explored ___ Krakow's ___ old town last weekend.", 
        answers: [
            { text: "a ; (bez)", correct: false},
            { text: "a ; a", correct: false},
            { text: "(bez) ; (bez)", correct: true},
            { text: "the ; the", correct: false},
        ]
    }, {
        question: "Bill was sentenced to ___ prison on ___ Monday.", 
        answers: [
            { text: "A ; (bez)", correct: false},
            { text: "(bez) ; the", correct: false},
            { text: "(bez) ; (bez)", correct: true},
            { text: "The ; the", correct: false},
        ]
    }, {
        question: "David went to ___ church to inspect ___ damage", 
        answers: [
            { text: "(bez) ; (bez)", correct: false},
            { text: "a ; a", correct: false},
            { text: "the ; (bez)", correct: false},
            { text: "the ; the", correct: true},
        ]
    }, {
        question: "___ Thames flows through ___ London.", 
        answers: [
            { text: "a ; (bez)", correct: false},
            { text: "a ; a", correct: false},
            { text: "the ; (bez)", correct: true},
            { text: "the ; the", correct: false},
        ]
    }, {
        question: "Chris is serving ___ time at ___ local prison.", 
        answers: [
            { text: "(bez) ; (bez)", correct: true},
            { text: "a : (bez)", correct: false},
            { text: "(bez) ; the", correct: false},
            { text: "an ; the", correct: false},
        ]
    }, {
        question: "___ North Korea is also known as ___ Democratic People's Republic of Korea.", 
        answers: [
            { text: "(bez) ; (bez)", correct: false},
            { text: "a ; a", correct: false},
            { text: "the ; (bez)", correct: false},
            { text: "(bez) ; the", correct: true},
        ]
    }, {
        question: "John starts ___ school in ___ September", 
        answers: [
            { text: "a ; (bez)", correct: false},
            { text: "a ; a", correct: false},
            { text: "the ; (bez)", correct: false},
            { text: "(bez) ; (bez)", correct: true},
        ]
    }, {
        question: "I have ___ class tomorrow ___ night", 
        answers: [
            { text: "a ; (bez)", correct: true},
            { text: "a ; a", correct: false},
            { text: "the ; (bez)", correct: false},
            { text: "(bez) ; (bez", correct: true},
        ]
    }, {
        question: "___ Nile River is essential for ___ agriculture in Egypt.", 
        answers: [
            { text: "A ; (bez)", correct: false},
            { text: "The ; a", correct: false},
            { text: "A ; (bez)", correct: false},
            { text: "The ; (bez)", correct: true},
        ]
    }, {
        question: "He has ___ enviable knack for ___ mathematics", 
        answers: [
            { text: "a ; (bez)", correct: false},
            { text: "an ; a", correct: false},
            { text: "the ; (bez)", correct: false},
            { text: "an ; (bez)", correct: true},
        ]
    }, {
        question: "___ ability to think critically is ___ essential.", 
        answers: [
            { text: "The ; (bez)", correct: true},
            { text: "A ; a", correct: false},
            { text: "A ; (bez)", correct: false},
            { text: "The ; the", correct: false},
        ]
    }, {
        question: "___ Statue of Liberty was gift from ___ France.", 
        answers: [
            { text: "A ; (bez)", correct: false},
            { text: "(bez) ; a", correct: false},
            { text: "The ; (bez)", correct: true},
            { text: "The ; The", correct: false},
        ]
    }, {
        question: "They navigated ___ Mediterranean Sea to reach ___ historic site.", 
        answers: [
            { text: "(bez) ; (bez)", correct: false},
            { text: "a ; a", correct: false},
            { text: "the ; (bez)", correct: false},
            { text: "the ; the", correct: true},
        ]
    }, 
];  

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons"); 
const nextButton = document.getElementById("next-btn"); 

let currentQuestionIndex = 0; 
let score = 0; 

const maxQuestions = 5;

function startQuiz(){ 
    currentQuestionIndex = 0; 
    shuffleQuestions(questions);
    score = 0; 
    nextButton.innerHTML = "Dalej";
    showQuestion(); 
} 

const getRandomInteger = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
  
    return Math.floor(Math.random() * (max - min)) + min
  }

const randomInteger = getRandomInteger(0, 3)

console.log(randomInteger)
  
function showQuestion(){ 
    resetState(); 
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1; 
    questionElement.innerHTML = questionNo + ". " + currentQuestion. 
    question; 

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button"); 
        button.innerHTML = answer.text; 
        button.classList.add("btn"); 
        answerButtons.appendChild(button); 
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target; 
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct"); 
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    } 
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        } 
        button.disabled = true;
    }); 
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Odpowiedziałeś(łaś) poprawnie na ${score} z ${maxQuestions} pytań!`;
    nextButton.innerHTML = "Zagraj Ponownie"; 
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++; 
    if (currentQuestionIndex < maxQuestions){
            showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < maxQuestions){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz(); 

