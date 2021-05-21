function eventListener() {
    const showBtn = document.getElementById('show-btn');
    const questionCard = document.querySelector('.question-card');
    const form = document.getElementById('question-form');
    const questionInput = document.getElementById('question-input');
    const answerInput = document.getElementById('answer-input');
    const questionList = document.getElementById('question-list');
}

const card = new Card()

//show the question form
showBtn.addEventListener('click', () => {
    showQuestion(questionCard)
});

function Card() {

}

form.addEventListener('submit', (event) => {
    const qValue = questionInput.value;
    const aValue = answerInput.value;


})


card.prototype.editValues = () => {
    //grabbing the values from the card


}

card.prototpe.deleteCard = () => {

    let c = event.target
    questionList.removeChild()
}