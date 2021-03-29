//Method 1: using selectors inside the element

// const questions = document.querySelectorAll('.question');

// questions.forEach(function(question){
//     const btn = question.querySelector('.question-btn');
//     btn.addEventListener('click', function(){
//         questions.forEach(function(item){
//             if(item !== question)
//             {
//                 item.classList.remove('show-text');
//             }
//         });
//         question.classList.toggle('show-text');
//     })
// });



//Method 2: traversing the dom

const quesbtns = document.querySelectorAll('.question-btn'); 
const questions = document.querySelectorAll('.question');

quesbtns.forEach(function(btn){

    btn.addEventListener('click', function(e){
        // targetting the parent element that is question
        const question = e.currentTarget.parentElement.parentElement;
        // collapse question when another question button opens
        questions.forEach(function(item){
            if(item !== question)
            {
                item.classList.remove('show-text');
            }
        });
        
        // toggle the question buttons to show the text
        question.classList.toggle('show-text');
    });
})