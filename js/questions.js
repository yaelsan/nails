(function (){
    const titleQuestions=[...document.querySelectorAll('.questionTitle')];

    titleQuestions.forEach(question=>{
        question.addEventListener('click', ()=>{
            let height =0;
            let answer= question.nextElementSibling;
            let aadPadding= question.parentElement.parentElement;

            aadPadding.classList.toggle('questionPadding--add');
            
            question.children[0].classList.toggle('questionArrow--rotate');

            if (answer.clientHeight===0) {
                height=answer.scrollHeight;
            }
            answer.style.height = `${height}px`;
                
        });
    })
})();


console.log("hola");