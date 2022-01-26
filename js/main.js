//menu########### -heng-
let getQuiz = document.getElementById("play-quiz");
let getHide = document.getElementById("hide");
getQuiz.style.display="none";
function playQuiz(e){
  e.preventDefault()
  getQuiz.style.display="block";
  getHide.style.display="none";

}
let btnShow= document.getElementById("btn-quiz");
btnShow.addEventListener("click",playQuiz)
// getQuiz.style.display="none";
function edit(e){
  e.preventDefault()
  getQuiz.style.display="none";
  getHide.style.display="block";

}
let btnHide= document.getElementById("btn-edit-quiz");
btnHide.addEventListener("click",edit)
const question = [
  {question:'How old are you ?',
answer: [{text: '18 year old', isAnswer:false}, {text:'20 year old', isAnswer:false},{text:'24 year old', isAnswer:false},{text:'23 year old', isAnswer:true}]}
]
 let firsQuestion=0;