
const questions = [
  {
    q:'What is the name of the river',
    options: ["Danube", "Niger", "Congo", "Limpopo"],
    answer:"Niger"
},
{
    q:'What is the name of the Deadly virus',
    options: ['Antrax', 'Killvi', 'Corona', 'Wuhanvi'],
    answer:"Antrax"
},

{
  q:'Who is the cm of uttarpradesh',
  options: ['yogi', 'akhilesh', 'mayawati', 'rajnath'],
  answer:"yogi"
},

{
  q:'Who is the President of America',
  options: ['Donald', 'Biden', 'Kamla', 'Obama'],
  answer:"Biden"
},

{
  q:'Who is the HomeMinister of India',
  options: ['Yogi', 'Modi', 'Dropadi', 'Amit'],
  answer:"Amit"
}

]

 

let cnt = 0;

let index = 0;

let t = document.getElementById("haa");
let first = document.getElementById("a");
let second = document.getElementById("aa");
let third = document.getElementById("aaa");
let fourth = document.getElementById("aaaa");

let submit = document.getElementById("but-ton");
let score = document.getElementById("mark");
let aaju = document.getElementById("hidd");

start(index);

submit.addEventListener("click",sub);

  function sub(){
    index = index+1;
    if(index > questions.length-1){
      submit.style.display = "none";
      document.getElementById("band").style.display = "none";
      score.innerHTML = cnt;
      aaju.classList.remove('hid');
    }
    resetind();
    start(index);
  }

function start(index){
  
  let currque = questions[index];
 let questionno = index + 1;
  t.innerHTML = questionno + "." + currque.q;

 
  first.innerHTML = currque.options[0];
   second.innerHTML = currque.options[1];
  third.innerHTML = currque.options[2];
  fourth.innerHTML = currque.options[3];

  const opt = document.querySelectorAll('.same');

   for(let i = 0; i < opt.length ; i++){
    opt[i].setAttribute('onclick','optionSelected(this)');
   }


      
}

function optionSelected(answer){
  let userans = answer.textContent;
 let corrans = questions[index].answer;

   if(userans == corrans){
    cnt++;
     right(answer);
   }

   else{
   
     console.log("incorrect");
      wrong(answer);
   }

   const opti = document.querySelectorAll('.same');
   for(let i = 0; i < opti.length ; i++){
         opti[i].classList.add('disabled') ;
  }

}


function right(answer){

  submit.style.display = "flex";
  answer.classList.add('good') ;
  
  
 
}

function wrong(answer){
  answer.classList.add('bad') ;

  const opti = document.querySelectorAll('.same');

  for(let i = 0; i < opti.length ; i++){
    if(opti[i].innerText == questions[index].answer ){
          right(opti[i]);
    }
  }

}

 function resetind(){
  const optii = document.querySelectorAll('.same');
   for(let i = 0; i < optii.length ; i++){
         optii[i].classList.remove('disabled') ;
         optii[i].classList.remove('bad') ;
         optii[i].classList.remove('good') ;
  }
 }

