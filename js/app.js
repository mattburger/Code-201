"use strict";

//Storing all the questions on Array
var questionArray = ["Does my name contains letter 'g'?(y/n)", 
"My favourite basketball team is Celtics?(y/n)", "I am 23 years old ?(y/n)",
"I prefer dogs over cats(y/n)?", "I love snow (y/n)? "];
//Correct Answers
var answers = ["My names doesn't contain letter 'g'","My favourite team is Celtics","I am 27","I prefer dogs", "Don't like snow at all!"]
//Welcome Screen
alert("Welcome!\nPlease respond following question with 'y'/'n' or 'yes'/'no' as response ");
var i = 0;
var response = [];
function responseCheck(response){
  if(i%2==0){
    if(response=="y"||response=="yes"){
        alert("Sorry! Incorrect!!");
    }
    else{
        alert("Correct");
    }
  }
  else{
    if(response=="y"||response=="yes"){
      alert("Correct!");
    }
    else{
      alert("Incorrect!!");
    } 
  }
}
//Show prompt until user enter correct answers
for(i; i<questionArray.length;i++)
{
 do{
  response = prompt(questionArray[i]);
  response = response.toLowerCase();
  if(response!="y"&&response!="n"&&response!="yes"&&response!="no"){
    alert("Plese enter either 'y/n' or 'yes/no' as response");
  }
  }while(response!="y"&&response!="n"&&response!="yes"&&response!="no");
  console.log("For"+ questionArray[i] + " User responded: " + response);
  var temp = responseCheck(response);
}

