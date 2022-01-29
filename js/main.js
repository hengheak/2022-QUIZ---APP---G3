// function remove ------------------------------------------------------
function deleteOption(event){
    
  if (event.target.id === 'delete'){
      event.target.parentElement.remove();
  }
}

let btndelete = document.querySelectorAll("#delete");
for (let btn of btndelete){
  btn.addEventListener('click',deleteOption);
}

// function display question---------------------------------------------

let arrQ = [
  {id:"ques1",question:"1/How many province in Cambodia?",
chooseAnswer:["20 province","22 province","24 province","25 province"],
correctAnswer: "25 province"},
{id:"ques2",question:"2/What is your subject did you learn?",
chooseAnswer:["HTML/English","Python/English/Algarithm/HTML","Algarithm/Python","English/HTML/Python"],
correctAnswer:"Python/English/Algarithm/HTML"},
{id:"ques3",question:"3/How old is Angkor Wat?",
chooseAnswer:["1200 old","1500 old","700 old","900 old"],
correctAnswer:"900 old"},
{id:"ques4",question:"4/What is capital of Cambodia?",
chooseAnswer:["Phnom Penh","Ratanakiri","Siem Reap","Central"],
correctAnswer:"Phnom Penh"}
];

// function score------------------------------------------------
function submitTask(){
  let answers = document.querySelectorAll(".answers");
  for (let answer of answers){
      if (answer.checked){
          arrayOfAnswer.push(answer.value);
          console.log(arrayOfAnswer)
      }
  }
  checkAnswer ()
}
let arrayOfAnswer = []
function checkAnswer (){
  let score = 0;
  for (let i in arrQ){
      if (arrayOfAnswer[i] === arrQ[i].correctAnswer){
          score += 10;
      }
     
  }
  let getScore = document.getElementById("scores");
  getScore.textContent = score;
}

document.querySelector("#btnSubmit").addEventListener("click",submitTask);
// make form ------------------------------------------------------------------------------------

function makers(){
  let quest=document.querySelector(".optional");
  
    let tion1=document.querySelector("#tion1");
 
    let tion2=document.querySelector("#tion2");
    
    let tion3=document.querySelector("#tion3");

    let tion4 = document.querySelector("#tion4");
    

    // app the question and display to browswer
    let object=[{Question:quest.value,answers1:tion1.value,answers2:tion2.value,answers3:tion3.value,answers4:tion4.value}];
    localStorage.setItem("Narong",JSON.stringify( object));


    
    for (let value of object){
      let bigquestion=document.createElement("form");
      let storage1=document.querySelector(".biganswer");
      storage1.appendChild(bigquestion);
      bigquestion.textContent=value.Question;
      
      
      let makestor=document.querySelector(".spaners");
      storage1.appendChild(makestor);


      // Store only two question to span=============================

    
      let show1=document.createElement("span");
      show1.textContent=value.answers1;
      makestor.appendChild(show1);



      let show2=document.createElement("span");
      show2.textContent=value.answers2;
      makestor.appendChild(show2);
      
      let show3=document.createElement("span");
      show3.textContent=value.answers3;
      makestor.appendChild(show3);
      
      let show4=document.createElement("span");
      show4.textContent=value.answers4;
      makestor.appendChild(show4);
      
      console.log(makestor)

      // Reloat the name input when we aready input
      quest.value="";
      tion1.value="";
      tion2.value="";
      tion3.value="";
      tion4.value="";
    };
  };
  let creaters=document.querySelector(".addtogo");
  creaters.addEventListener("click",makers);
  
  
  // ================ hide and show the quiz and make it done ==========>>>>>>>.

  let showImage = () => {
    // your code here
    let image1 = document.querySelectorAll('.addition_quiz');
    for (let pic of image1){
        pic.style.display = 'block';
    }
}
let hideImage = () => {
   // your code here
   let image2 = document.querySelectorAll('.addition_quiz');
   for (let pic of image2){
       pic.style.display = 'none';
   };
};

let btnShow = document.querySelector('#getback');

let btnHide = document.querySelector('#getdone');

btnHide.addEventListener('click', hideImage);
btnShow.addEventListener('click', showImage);
  
  