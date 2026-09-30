let startBtn = document.querySelector('.startBtn');
let Infoox = document.querySelector('.Infoox');
let exitBtn = document.querySelector('.exitBtn');
let ContinueBtn = document.querySelector('.ContinueBtn');
let quizBox = document.querySelector('.quiz-box');
let questionText = document.querySelector('.questionText');
let AllOptions = document.querySelectorAll('.option');
let nextBtn = document.querySelector('.nextBtn');
let timeline = document.querySelector('.timeline');
let currentQuestionIndicator = document.querySelector('.currentQuestionIndicator');
let progressBar = document.querySelector('.progressBar');
let TimeLine = document.querySelector('.Time_line-title');
let reply_Quiz = document.querySelector('.reply_Quiz');
let QuitQuiz = document.querySelector('.Quit Quiz');
let resultbox = document.querySelector('.result-box');

let currentQuestionIndex = 0;

let userScore = 0;

let timelineInterval = null;
let progressBarInterval = null;
const tickIcon = `<div class="icon tick"><i class="fa-solid fa-check"></i></div>`;
const CrossIcon = `<div class ="icon cross"><i class="fa-regular fa-circle-xmark"></i></div>`;

startBtn.addEventListener('click', () => {

    Infoox.classList.add('activeInfoBox');
});

exitBtn.addEventListener('click', () =>{
      Infoox.classList.remove('activeInfoBox');
});

ContinueBtn.addEventListener('click' , () =>{
  Infoox.classList.remove('activeInfoBox');
  quizBox.classList.add('activeQuizBox');
  showQuestion(currentQuestionIndex);
  handleTiming(15);
  handleProgressBar();
  timeline.innerText = 'Time Left';
});

nextBtn.addEventListener('click' , () =>{
  if(currentQuestionIndex < 9){
    currentQuestionIndex = currentQuestionIndex + 1;

    handleTiming(15);
    handleProgressBar();
    showQuestion(currentQuestionIndex);
    nextBtn.classList.remove('active');
    timeline.innerText = 'Time Left';
  }else{
    clearInterval(progressBarInterval)
    clearInterval(timelineInterval)
    quizBox.classList.remove('activeQuizBox')
    resultbox.classList.add('activeResultBox')
  }
  
})
QuitQuiz.addEventListener('click', () => {
    restart();
    resultbox.classList.remove('activeResultBox')
})
reply_Quiz.addEventListener('click', () =>{
  restart();
  resultbox.classList.remove('activeResultBox')
  quizBox.classList.remove('activeQuizBox')
  handleTiming(15);
  handleProgressBar();
  timeline.innerText = 'Time Left';
})

const showQuestion = (index) => {
    questionText.innerHTML = '' + Qustions?.[index].numb + '. ' + Qustions?.[index].question;

    for(let i = 0; i < AllOptions.length; i++){
      AllOptions[i].innerText = Qustions?.[index].Options?.[i];
      AllOptions[i].classList.remove('correct');
      AllOptions[i].classList.remove('incorrect');
      AllOptions[i].classList.remove('disabled');
      if(index === 0){
        AllOptions[i]?.addEventListener('click', optionclickHanlder);
      }
    }
      currentQuestionIndicator.innerText = index + 1;
}

const handleTiming = (time) => {
  clearInterval(timelineInterval);
    timeline.innerText = time;
    let timeValue = time;
      timelineInterval = setInterval(() => {
      timeValue--;
      if(timeValue < 10){
        timeline.innerText = '0' + timeValue;
      }else{
        timeline.innerText = timeValue;
      }
      if(timeValue === 0){
        timeline.innerText = 'Time Off';
        clearInterval(timelineInterval)
        nextBtn.classList.add('active');
        const correctAnswer = question(currentQuestionIndex).answer
        for(let i = 0; i < AllOptions.length; i++){
            AllOptions[i].classList.add('disabled');

            if(AllOptions[i].innerText === correctAnswer)
          {
            AllOptions[i].classList.add('correct');
            AllOptions[i].insertAdjacentHTML('beforeend',tickIcon);
          }
        }
      }
    }, 1000);
};

const handleProgressBar = () => {
  clearInterval(progressBarInterval);
  progressBar.style.width = '0%';
  let currentpercentage = 0;
    progressBarInterval = setInterval(() => {
    currentpercentage += 1 / 15;
    progressBar.style.width = currentpercentage + '%';
    if(currentpercentage >= 100){
      clearInterval(progressBarInterval);
    }
  } , 10 );
};

const optionclickHanlder = (e) => {
    clearInterval(progressBarInterval);
    clearInterval(timelineInterval);
    nextBtn.classList.add('active');
    const userAnswer = e.target.innerText;
    const currectAnswer = Qustions[currentQuestionIndex].answer;

    if(userAnswer === currectAnswer){
      userScore++;
      e.target.classList.add('correct');
      e.target.insertAdjacentHTML('beforeend',tickIcon);
    }else{
      e.target.classList.add('incorrect');
      e.target.insertAdjacentHTML('beforeend', CrossIcon);

    }
    for(let i = 0; i < AllOptions.length; i++){
          AllOptions[i].classList.add('disabled');

          if(userAnswer !== currectAnswer && AllOptions[i].innerText===currectAnswer)
          {
          AllOptions[i].classList.add('correct');
          AllOptions[i].insertAdjacentHTML('beforeend',tickIcon);
        }
    }
};

const restart = () => {
  clearInterval(progressBarInterval);
  clearInterval(timelineInterval);
  userScore = 0;
  currentQuestionIndex = 0;
  timeline.innerText = 'Time Left';
}
